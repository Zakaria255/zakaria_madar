"use client";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Linkedin } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex flex-col justify-center min-h-[90vh] py-20 overflow-hidden bg-background">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />

            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                            Available for Freelance & Consulting
                        </motion.div>
                        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl font-heading">
                            {portfolioData.personal.name}
                        </h1>
                        <p className="text-xl font-medium text-muted-foreground md:text-2xl max-w-2xl">
                            {portfolioData.personal.title}
                        </p>
                    </div>

                    <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                        Helping businesses streamline operations with Odoo and building scalable, high-performance web solutions.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button size="lg" asChild className="group">
                            <Link
                                href="https://www.linkedin.com/in/zakaria-madar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my LinkedIn profile"
                            >
                                LinkedIn Profile
                                <Linkedin className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
