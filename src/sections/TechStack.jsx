import React from 'react';
import { FaReact, FaPython, FaAws, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiPytorch, SiOpenai, SiTypescript, SiPostgresql, SiMongodb } from 'react-icons/si';
import './TechStack.css';

const TechStack = () => {
    const techs = [
        { icon: <SiOpenai />, name: "OpenAI" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiPytorch />, name: "PyTorch" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" }
    ];

    return (
        <section className="tech-stack">
            <div className="container">
                <h3 className="section-title center small-title">Powered By Modern Tech</h3>
                <div className="tech-grid">
                    {techs.map((tech, index) => (
                        <div key={index} className="tech-item" title={tech.name}>
                            <div className="tech-icon">{tech.icon}</div>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
