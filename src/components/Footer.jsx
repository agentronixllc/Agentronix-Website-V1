import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <img src="/Agentornix-logo.png" alt="Agentronix" className="footer-logo-img" />
                    <p className="footer-desc">
                        Building intelligent software and autonomous systems for the future of business.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <a href="#about">About</a>
                    <a href="#process">Process</a>
                    <a href="#careers">Careers</a>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <p className="contact-email">agentronix@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Agentronix LLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
