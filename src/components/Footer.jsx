import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">Agentronix<span className="dot">.</span></h3>
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
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                    <p className="contact-email">hello@agentronix.com</p>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Agentronix LLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
