import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            <Link to="/" className="footer-logo">
                <img 
                    src="/imgs/TonyMarchelloSign2.png" 
                    alt="Tony Marchello Signature" 
                    className="footer-signature"
                />
            </Link>
            <div className="footer-disclaimer">
                <p>
                    Mudkip, the Pokéball, and all Pokémon-related content are registered trademarks of Nintendo, Creatures Inc., 
                    and GAME FREAK inc. This personal website is a non-commercial project created solely to demonstrate web 
                    design skills and showcase personal interests. No revenue is generated from this content, and it is used 
                    under fair use for educational purposes only.
                </p>
            </div>
        </footer>
    );
};

export default Footer; 