import React from 'react';
import { FaShieldAlt, FaRocket, FaHandshake, FaCogs } from 'react-icons/fa';
import './WhyUs.css';

const WhyUs = () => {
    const reasons = [
        {
            icon: <FaRocket />,
            title: "Engineering First",
            desc: "We don't just design; we build robust, scalable systems using the latest stable technologies."
        },
        {
            icon: <FaShieldAlt />,
            title: "Security & Scale",
            desc: "Enterprise-grade security practices and architecture designed to handle millions of requests."
        },
        {
            icon: <FaCogs />,
            title: "Automation Experts",
            desc: "Deep expertise in AI agents and workflow automation that gives you a competitive edge."
        },
        {
            icon: <FaHandshake />,
            title: "Long-term Partnership",
            desc: "We are committed to your success, providing ongoing support and iteration as you grow."
        }
    ];

    return (
        <section id="about" className="why-us">
            <div className="container">
                <div className="why-grid">
                    <div className="why-content">
                        <h2 className="section-title">Why Agentronix?</h2>
                        <p className="section-subtitle align-left">
                            In a world of noise, we provide signal. Our team combines creative vision with rigorous engineering to deliver software that works as good as it looks.
                        </p>
                        <div className="stats-row">
                            <div className="stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Enterprise Projects</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">10M+</span>
                                <span className="stat-label">Events Processed</span>
                            </div>
                        </div>
                    </div>

                    <div className="reasons-grid">
                        {reasons.map((item, index) => (
                            <div key={index} className="reason-item">
                                <div className="reason-icon">{item.icon}</div>
                                <div>
                                    <h4 className="reason-title">{item.title}</h4>
                                    <p className="reason-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
