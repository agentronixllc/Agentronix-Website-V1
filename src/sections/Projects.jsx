import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Texas All Grass-Fed LLC",
            image: "/projects/texasallgrassfed.png",
            url: "https://texasallgrassfedllc.com"
        },
        {
            title: "Retail Relay",
            image: "/projects/retailrelay.png",
            url: "https://www.retailrelay.io/"
        },
        {
            title: "Mark's Flooring Zone",
            image: "/projects/marksflooringzone.png",
            url: "https://marksflooringzone.com/"
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
                        <motion.a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card glass"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`project-image-wrapper ${!project.image ? 'placeholder' : ''}`}>
                                {project.image ? (
                                    <>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-image"
                                        />
                                        <div className="project-overlay">
                                            <FaExternalLinkAlt className="overlay-icon" />
                                        </div>
                                    </>
                                ) : (
                                    <span className="placeholder-text">Coming Soon</span>
                                )}
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
