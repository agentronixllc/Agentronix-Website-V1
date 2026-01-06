import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-box glass">
                    <h2 className="cta-title">Ready to build something intelligent?</h2>
                    <p className="cta-desc">
                        Let's discuss how Agentronix can accelerate your roadmap with AI-driven efficiency.
                    </p>
                    <a href="#contact" className="btn btn-glow cta-btn large">Contact Agentronix</a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
