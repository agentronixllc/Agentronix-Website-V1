import React from 'react';
import { motion } from 'framer-motion';
import NexusOrb from '@/components/ui/nexus-orb';
import './Hero.css';

// ============================================
// Main Hero Component
// ============================================
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-glow"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span>Agentronix Intelligence</span>
                    </motion.div>

                    <h1 className="hero-title">
                        Intelligent Software.<br />
                        <span className="text-gradient">Autonomous Systems.</span>
                    </h1>

                    <p className="hero-subtitle">
                        We build next-generation AI agents, automation pipelines, and enterprise-grade web platforms that scale with your vision.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary hero-btn">Start a Project</a>
                        <a href="#projects" className="btn btn-secondary hero-btn">View Our Work</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <NexusOrb />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
