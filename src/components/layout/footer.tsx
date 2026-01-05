import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-secondary/30">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <Link href="/" className="text-lg font-bold font-heading text-primary">
                            Zakaria Ahmed Madar
                        </Link>
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            Odoo Functional Consultant & Senior Web Developer
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            href="https://www.linkedin.com/in/zakaria-madar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Visit my LinkedIn profile"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://github.com/Zakaria255"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Visit my GitHub profile"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link
                            href="mailto:sakicade41@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Send me an email"
                        >
                            <Mail className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://wa.me/qr/5UZWIYBTOWAYH1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Chat with me on WhatsApp"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Zakaria Ahmed Madar. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
