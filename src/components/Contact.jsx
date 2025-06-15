import React from 'react';
import './Contact.css';
import linkedinIcon from '/imgs/linkedin_icon.png';
import githubIcon from '/imgs/github_icon.png';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="social-profiles">
                <div className="profile-card">
                    <img 
                        src={linkedinIcon}
                        alt="LinkedIn" 
                        className="social-icon"
                    />
                    <div className="profile-info">
                        <h3>LinkedIn</h3>
                        <p>Username: Anthony Marchello</p>
                        <a 
                            href="https://www.linkedin.com/in/anthony-marchello-9760822a4/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="profile-link"
                        >
                            View Profile
                        </a>
                    </div>
                </div>
                
                <div className="profile-card">
                    <img 
                        src={githubIcon}
                        alt="GitHub" 
                        className="social-icon"
                    />
                    <div className="profile-info">
                        <h3>GitHub</h3>
                        <p>Username: AnthonyMarchello</p>
                        <a 
                            href="https://github.com/AnthonyMarchello?tab=repositories" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="profile-link"
                        >
                            View Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 