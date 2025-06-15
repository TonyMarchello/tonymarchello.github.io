// Created by Anthony (Tony) Marchello

import React from 'react';

const Home = () => {
    return (
        <div className="home-container" style={{ 
            background: 'var(--primary-gradient)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                gap: '4rem'
            }} className="home-content-wrapper">
                <div style={{ flex: '1' }} className="home-image-column">
                    <img 
                        src="/imgs/ByTree2.jpg" 
                        alt="Tony by tree" 
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            height: 'auto',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                        }}
                    />
                </div>
                <div style={{ flex: '1' }} className="home-text-column">
                    <div style={{ position: 'relative' }}>
                        <h1 style={{ 
                            fontSize: '3.5rem',
                            color: 'white',
                            marginBottom: '1rem',
                            WebkitBackgroundClip: 'unset',
                            WebkitTextFillColor: 'white',
                            display: 'inline-block',
                            position: 'relative',
                            paddingBottom: '0.5rem'
                        }}>
                            Hi, my name is Tony.
                            <span style={{
                                content: '""',
                                position: 'absolute',
                                width: '0',
                                height: '2px',
                                bottom: '0',
                                left: '0',
                                background: 'var(--accent-color, white)',
                                transition: 'width 0.2s ease',
                                display: 'block'
                            }} className="underline-hover" />
                        </h1>
                    </div>
                    <p style={{ 
                        fontSize: '1.5rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '2rem',
                        lineHeight: '1.6',
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom: '0.5rem'
                    }}>
                        I'm a software engineer with data science experience. Feel free to explore my site!
                        <span style={{
                            content: '""',
                            position: 'absolute',
                            width: '0',
                            height: '2px',
                            bottom: '0',
                            left: '0',
                            background: 'var(--accent-color, white)',
                            transition: 'width 0.2s ease',
                            display: 'block'
                        }} className="underline-hover" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home; 