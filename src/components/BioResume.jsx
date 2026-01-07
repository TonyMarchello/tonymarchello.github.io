import React, {useState, useEffect} from 'react';
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
                            I’m Anthony Marchello, a Software Engineering B.S. candidate at the Milwaukee
                            School of Engineering with a minor in Data Science. My academic and professional
                            experience centers on building reliable, well-structured software across embedded
                            systems, full-stack web development, DevOps, and data-driven applications.
                        </p>

                        <p>
                            I completed a year-long academic internship with Scot Forge, where I worked as a
                            Software Developer Intern on a web-based Part Creation Tool. In this role, I helped
                            resolve 3D rendering issues, improved backend APIs using MongoDB, enhanced the
                            React-based frontend, and assisted with Docker-based deployment. I worked in an
                            Agile environment, collaborating closely with a team to deliver high-priority
                            product backlog items.
                        </p>

                        <p>
                            I am currently contributing to a Senior Design team developing a digital audio
                            workstation using the JUCE C++ framework. The project focuses on collaborative
                            music composition and plans to integrate Nvidia’s Fugatto model, Meta’s MMS
                            text-to-speech technology, and Dolby Atmos features.
                        </p>

                        <p>
                            My technical skill set includes programming in C, C++, C#, Java, Python, Rust,
                            JavaScript, SQL, and R, along with experience using React, Express, AWS, Docker,
                            MongoDB, MySQL, TensorFlow, and Keras. I have applied these skills across projects
                            such as machine learning models for Japanese character classification, an AWS-based
                            prime number detection service, a Pokémon Sapphire ROM hack, and multiple React web
                            applications.
                        </p>

                        <p>
                            Outside of coursework and projects, I am active in the MSOE community through
                            Concert Band, the Video Game Development Club, Circle K, and SAGA. I have also
                            volunteered long-term with St. Matthew’s Church Choir and the Salvation Army.
                        </p>

                        <p>
                            In my free time, I enjoy reading, gaming, meditating, freshwater fishing, hunting
                            pheasants, walking my dog, and traveling with my family. I am especially passionate
                            about open-wheel racing and previously developed a slogan for the 2015 Milwaukee
                            IndyCar Race while also job-shadowing an IndyCar team.
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
                            <p>Your browser does not support inline PDFs on mobile devices. Please download the PDF to
                                view it.</p>
                            <a
                                href="/docs/Anthony William Marchello Updated Resume December 2025-2026.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-download-button"
                            >
                                Download Resume
                            </a>
                        </div>
                    ) : (
                        <object
                            data="/docs/Anthony William Marchello Updated Resume December 2025-2026.pdf"
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