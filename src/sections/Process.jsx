import React from 'react';
import './Process.css';

const Process = () => {
    const steps = [
        { title: "Discovery", desc: "Understanding needs" },
        { title: "Design", desc: "System Architecture" },
        { title: "Build", desc: "Agile Development" },
        { title: "Deploy", desc: "CI/CD & Scaling" }
    ];

    return (
        <section id="process" className="process">
            <div className="container">
                <h2 className="section-title center">How We Work</h2>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="timeline-step">
                            <div className="step-number">{index + 1}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
