"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Honeypot Check
        if (formData.get("_gotcha")) {
            setStatus("success");
            form.reset();
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("https://formspree.io/f/meeonwln", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                const result = await response.json();
                throw new Error(result.error || "Oops! There was a problem submitting your form");
            }
        } catch (error: unknown) {
            setStatus("error");
            const message = error instanceof Error ? error.message : "Oops! There was a problem submitting your form";
            setErrorMessage(message);
        }
    };

    return (
        <section id="contact" className="py-20 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <div className="grid gap-12 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold font-heading text-primary mb-6">Get in Touch</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Looking for a seasoned Odoo Consultant or Web Developer? Let&apos;s discuss how I can help your business grow.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">Email</div>
                                    <div className="font-semibold text-primary">sakicade41@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">Location</div>
                                    <div className="font-semibold text-primary">Mogadishu, Somalia</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">Phone</div>
                                    <div className="font-semibold text-primary">+252 614 480 267</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-card rounded-2xl shadow-sm border"
                    >
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Formspree Honeypot */}
                            <input type="text" name="_gotcha" style={{ display: "none" }} />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <div className="pt-2">
                                {status === "success" ? (
                                    <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-md flex items-center gap-2 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4" />
                                        Thanks! Your message has been sent.
                                    </div>
                                ) : (
                                    <Button type="submit" className="w-full" disabled={status === "loading"}>
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                )}
                                {status === "error" && (
                                    <div className="mt-3 p-3 bg-destructive/10 text-destructive rounded-md flex items-center gap-2 text-sm font-medium">
                                        <AlertCircle className="w-4 h-4" />
                                        {errorMessage}
                                    </div>
                                )}
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
