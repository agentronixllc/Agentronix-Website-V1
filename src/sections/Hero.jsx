import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Hero.css';

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
                        <Button variant="primary" className="hero-btn">Start a Project</Button>
                        <Button variant="secondary" className="hero-btn">View Our Work</Button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {/* Abstract representation of AI nodes/network */}
                    <div className="ai-network">
                        <div className="circle c1"></div>
                        <div className="circle c2"></div>
                        <div className="circle c3"></div>
                        <div className="line l1"></div>
                        <div className="line l2"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
