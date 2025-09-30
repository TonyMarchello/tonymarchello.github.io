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
                            I'm Anthony Marchello, a Software Engineering student at the Milwaukee School of Engineering
                            (MSOE),
                            pursuing a minor in Data Science. My academic focus blends software design, data-driven
                            problem solving,
                            and cybersecurity to build applications that are both reliable and impactful.
                        </p>
                        <p>
                            My project experience spans embedded systems, front-end and back-end development, DevOps,
                            and machine learning.
                            This includes a year-long collaboration with Scot Forge to develop a web application using
                            Python, Docker, and React,
                            as well as my current Senior Design project: building a collaborative digital audio
                            workstation (DAW) in C++ with the JUCE
                            framework, integrating technologies like Nvidia’s Fugatto model and Dolby Atmos.
                        </p>
                        <p>
                            I'm skilled in full-stack development and comfortable across a wide range of technologies,
                            including C, C++, Java,
                            Python, JavaScript, SQL, MongoDB, TensorFlow, and AWS. My personal projects range from deep
                            learning models for Japanese
                            character recognition to creative builds like a ROM hack of Pokémon Sapphire, a Minesweeper
                            clone, and a Culver’s
                            menu filter web app.
                        </p>
                        <p>
                            Outside the classroom, I’m active in the MSOE community through Concert Band, the Video Game
                            Development Club, Circle K,
                            and SAGA. I’ve also been committed to long-term volunteer roles with St. Matthew’s Church
                            Choir and the Salvation Army.
                        </p>
                        <p>
                            When I’m not coding or studying, you’ll likely find me reading, fishing, gaming with
                            friends, meditating,
                            or following open-wheel racing. My broad set of interests keeps me curious, adaptable, and
                            motivated to grow—
                            both personally and professionally.
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
                                href="public/docs/Anthony William Marchello Career Fair Resume 2025-2026.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-download-button"
                            >
                                Download Resume
                            </a>
                        </div>
                    ) : (
                        <object
                            data="public/docs/Anthony William Marchello Career Fair Resume 2025-2026.pdf"
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