import React, { useState, useEffect } from 'react';
import './BioResume.css';

const BioResume = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bio-resume-container">
            {/* Bio Section */}
            <section className="bio-section">
                <h1>Bio</h1>
                <div className="bio-content">
                    <img 
                        src="/imgs/RiverBack3.jpg" 
                        alt="Tony at the river" 
                        className="bio-image"
                    />
                    <div className="bio-text">
                        <p>
                            I'm Anthony Marchello, a Software Engineering student at Milwaukee School of Engineering (MSOE),
                            pursuing a minor in Data Science. My academic focus combines software design, cybersecurity,
                            and data science to build robust and thoughtful applications.
                        </p>
                        <p>
                            Throughout the academic year, I've been working with Scot Forge on a year-long group project
                            developing a web application, applying tools like Python, Poetry, and React JS to solve real-world
                            problems while improving my skills in debugging, team collaboration, and technical debt reduction.
                        </p>
                        <p>
                            I'm experienced in full-stack development with technologies including Java, C++, MongoDB, SQL,
                            TensorFlow, and AWS. My projects span from deep learning character recognition to a Minesweeper
                            game clone, and a Culver's menu filtering app built with React JS and Bootstrap.
                        </p>
                        <p>
                            Outside of the classroom, I'm active in the MSOE community through Concert Band, the Video Game
                            Development Club, and Circle K. I also enjoy giving back through long-term volunteer roles at
                            St. Matthew's Church Choir and the Salvation Army.
                        </p>
                        <p>
                            When I'm not coding or studying, I enjoy reading, hiking, fishing, gaming with friends, and
                            diving into new ideas and creative projects. My broad interests help me stay curious,
                            adaptable, and eager to grow—both personally and professionally.
                        </p>
                    </div>

                </div>
            </section>

            <div className="section-divider"></div>

            {/* Resume Section */}
            <section className="resume-section">
                <h1>Resume</h1>
                <div className="pdf-viewer">
                    {isMobile ? (
                        <div className="pdf-mobile-fallback">
                            <p>Your browser does not support inline PDFs on mobile devices. Please download the PDF to view it.</p>
                            <a 
                                href="/docs/AnthonyWilliamMarchelloResume2024-2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-download-button"
                            >
                                Download Resume
                            </a>
                        </div>
                    ) : (
                        <object
                            data="/docs/AnthonyWilliamMarchelloResume2024-2025.pdf"
                            type="application/pdf"
                            className="pdf-content"
                        >
                            <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
                        </object>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BioResume; 