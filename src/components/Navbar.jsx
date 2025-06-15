// Created by Anthony (Tony) Marchello

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="logo">
                    <img src="/imgs/TonyMarchelloSign2.png" alt="Tony's Sign" className="logo-image" />
                </Link>
            </div>
            <div className="nav-right">
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </div>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/bio" onClick={() => setIsOpen(false)}>BIO & RESUME</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
                    <Link to="/mudkip" onClick={() => setIsOpen(false)}>MUDKIP</Link>
                    <Link to="/" className="home-icon" onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 