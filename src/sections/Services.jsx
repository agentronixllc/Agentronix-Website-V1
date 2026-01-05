import React from 'react';
import { FaRobot, FaCode, FaTools, FaLayerGroup } from 'react-icons/fa';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "AI Agents & Automation",
            icon: <FaRobot />,
            desc: "Custom AI agents capable of specialized reasoning, autonomous task execution, and seamless workflow automation."
        },
        {
            title: "Custom Web Development",
            icon: <FaCode />,
            desc: "High-performance web applications built with modern frameworks. Scalable, secure, and designed for impact."
        },
        {
            title: "Internal Tools & Dashboards",
            icon: <FaTools />,
            desc: "Streamline operations with bespoke admin panels and data visualization dashboards tailored to your business metrics."
        },
        {
            title: "System Integrations",
            icon: <FaLayerGroup />,
            desc: "Connect your existing software ecosystem. We build robust APIs and middleware to ensure your tools talk to each other."
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What We Do</h2>
                    <p className="section-subtitle">
                        We bridge the gap between complex AI technology and practical business solutions.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card title={service.title} icon={service.icon}>
                                <p>{service.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
