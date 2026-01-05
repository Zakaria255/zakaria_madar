"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-primary mb-4">Professional Experience</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A proven track record in Odoo implementation, digital operations management, and scalable web development.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {portfolioData.experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 md:-translate-x-1/2">
                                    <Briefcase className="w-4 h-4 text-primary" />
                                </div>

                                {/* Content */}
                                <div className="ml-16 md:ml-0 md:w-1/2">
                                    <div
                                        className={`p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                                            } relative`}
                                    >
                                        {/* Arrow for desktop */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border-b border-l bg-card ${index % 2 === 0 ? "-right-2 border-r border-t border-b-0 border-l-0" : "-left-2"
                                            }`} />

                                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent mb-2">
                                            {item.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-primary mb-1">{item.role}</h3>
                                        <h4 className="text-base font-medium text-muted-foreground mb-4">{item.company}</h4>
                                        <ul className="text-muted-foreground leading-relaxed text-sm list-disc pl-4 space-y-1">
                                            {Array.isArray(item.description) ? (
                                                item.description.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))
                                            ) : (
                                                <li>{item.description}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty side for layout balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
