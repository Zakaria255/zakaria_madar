"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";


export function Skills() {
    return (
        <section id="skills" className="py-20 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-primary mb-4">Core Competencies</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive blend of technical expertise and leadership capabilities.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                    {/* Technical Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-card rounded-xl border shadow-sm"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                            🔧 Technical Skills
                        </h3>
                        <div className="space-y-4">
                            {portfolioData.skills.technical.map((skill, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                                    <span className="text-foreground font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-card rounded-xl border shadow-sm"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                            🧠 Soft Skills
                        </h3>
                        <div className="space-y-4">
                            {portfolioData.skills.soft.map((skill, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                    <span className="text-foreground font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
