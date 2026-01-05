import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Button from '../components/Button';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "FinTech Data Pipeline",
            category: "Data Engineering",
            tags: ["Python", "AWS", "Kafka"],
            desc: "Real-time transaction processing system handling millions of events daily with < 50ms latency."
        },
        {
            title: "HealthCare AI Assistant",
            category: "AI & NLP",
            tags: ["OpenAI", "React", "Node.js"],
            desc: "SaaS platform for clinics to automate patient intake and triage using advanced LLMs."
        },
        {
            title: "Logistics Dashboard",
            category: "Web App",
            tags: ["Next.js", "Supabase", "Mapbox"],
            desc: "Fleet management interface with live tracking, route optimization, and driver analytics."
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-subtitle">
                        A glimpse into the systems constructing the future.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card glass"
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="project-header">
                                <span className="project-category">{project.category}</span>
                                <FaExternalLinkAlt className="external-icon" />
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Button variant="secondary">View All Case Studies</Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
