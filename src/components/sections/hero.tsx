"use client";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] py-20 overflow-hidden bg-background">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />

            <div className="container px-4 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[inherit]">

                {/* Text Content - Order 2 on mobile, Order 1 on Desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col space-y-8 order-2 lg:order-1 max-w-2xl text-center lg:text-left"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mx-auto lg:mx-0"
                        >
                            Available for Freelance & Consulting
                        </motion.div>
                        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl md:text-[56px] font-heading leading-tight">
                            {portfolioData.personal.name}
                        </h1>
                        <p className="text-lg font-medium text-muted-foreground md:text-xl max-w-2xl">
                            {portfolioData.personal.title}
                        </p>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Helping businesses streamline operations with Odoo and building scalable, high-performance web solutions.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
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

                {/* Image Content - Order 1 on mobile, Order 2 on Desktop */}
                <div className="order-1 lg:order-2 flex justify-center w-full lg:w-auto">
                    <motion.div
                        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 12,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    >
                        {/* Soft Radial Glow */}
                        <div
                            className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110 animate-pulse-slow"
                            style={{ animationDuration: '4s' }}
                        />

                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-full h-full"
                        >
                            {/* Image Container */}
                            <motion.div
                                className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/10 shadow-2xl bg-muted"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src="/hero-image.png"
                                    alt={portfolioData.personal.name}
                                    className="object-cover w-full h-full"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
