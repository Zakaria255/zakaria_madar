import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = "nodejs";

export async function POST(request: Request) {
    // 0. Environment Check
    if (!process.env.RESEND_API_KEY) {
        console.error("Missing RESEND_API_KEY");
        return NextResponse.json(
            { error: 'Server configuration error: Missing Resend API Key.' },
            { status: 500 }
        );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { name, email, subject, message, honeypot } = await request.json();

        // 1. Basic Spam Check (Honeypot)
        if (honeypot) {
            return NextResponse.json({ success: true }, { status: 200 });
        }

        // 2. Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        const emailSubject = `[Portfolio Contact] ${subject || 'New Message'}`;
        const contactEmail = process.env.CONTACT_TO_EMAIL || 'sakicade41@gmail.com';

        // 3. Send Email via Resend
        const data = await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: [contactEmail],
            replyTo: email,
            subject: emailSubject,
            html: `
        <div>
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        if (data.error) {
            console.error("Resend API Error:", data.error);
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: error?.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
