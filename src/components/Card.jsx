import React from 'react';
import './Card.css';

const Card = ({ title, icon, children, className = '' }) => {
    return (
        <div className={`card glass ${className}`}>
            <div className="card-icon-wrapper">
                {icon}
            </div>
            <h3 className="card-title">{title}</h3>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;
