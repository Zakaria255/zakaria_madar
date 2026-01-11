"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


// Placeholder project data
const projects = [
    {
        title: "Odoo ERP Implementation",
        category: "Odoo / ERP",
        description: "Full-scale Odoo implementation for a large manufacturing firm, streamlining inventory, sales, and accounting processes. Resulted in 30% operational efficiency increase.",
        tags: ["Odoo", "Python", "PostgreSQL", "Manufacturing"],
    },
    {
        title: "Taagerso Digital Platform",
        category: "Web Development / Operations",
        description: "Developed and managed the digital operations platform for Taagerso, integrating e-commerce workflows with backend logistics.",
        tags: ["Next.js", "React", "Node.js", "Operations"],
    },
    {
        title: "HornReport News Portal",
        category: "Web & Content Strategy",
        description: "Architected and maintained a high-traffic news portal with advanced SEO optimization and content management strategy.",
        tags: ["CMS", "SEO", "Performance", "Analytics"],
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-primary mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects demonstrating expertise in Odoo implementation and web solutions.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">
                                        {project.category}
                                    </div>
                                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                    <CardDescription>
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" size="sm" className="w-full justify-between group">
                                        View Details
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
