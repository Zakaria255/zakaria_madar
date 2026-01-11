"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Target, Layers, Settings, BookOpen } from "lucide-react";
import React from "react";

const iconMap: Record<string, React.ElementType> = {
    "Target": Target,
    "Layers": Layers,
    "Settings": Settings,
    "BookOpen": BookOpen,
};

export function About() {
    return (
        <section id="about" className="py-20 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 items-start">
                    {/* Bio Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold font-heading text-primary mb-6">About Me</h2>
                        <div className="prose prose-lg text-muted-foreground">
                            <p className="mb-4 leading-relaxed">
                                {portfolioData.personal.summary}
                            </p>
                            <p className="leading-relaxed">
                                I combine technical expertise with strategic thinking to deliver digital solutions that solve real business problems. Whether it&apos;s implementing complex Odoo ERP systems or developing custom web applications, my focus is always on quality, scalability, and user experience.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="p-4 bg-background rounded-lg border shadow-sm">
                                <h3 className="text-3xl font-bold text-accent mb-1">30+</h3>
                                <p className="text-sm font-medium text-muted-foreground">Odoo Projects Delivered</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border shadow-sm">
                                <h3 className="text-3xl font-bold text-accent mb-1">6+</h3>
                                <p className="text-sm font-medium text-muted-foreground">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Core Values Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="bg-card rounded-2xl p-6 sm:p-8 border shadow-sm">
                            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                Core Values
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {portfolioData.coreValues.map((value, index) => {
                                    const Icon = iconMap[value.icon];
                                    return (
                                        <div key={index} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-border">
                                            <div className="mb-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                {Icon && <Icon className="w-4 h-4" />}
                                            </div>
                                            <h4 className="font-semibold text-primary mb-2 text-sm">{value.title}</h4>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
