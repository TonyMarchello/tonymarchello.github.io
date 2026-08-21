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
                            I am a Software Engineering graduate from the Milwaukee School of Engineering with a
                            Data Science minor and honors recognition. I build practical software across the full
                            stack, with experience in Python, Java, JavaScript, Ruby, Ruby on Rails, React, Node.js,
                            REST APIs, SQL, MongoDB, AWS, Azure, Docker, and Git-based development workflows.
                            Through engineering internships with Scot Forge and Regal Rexnord, I developed
                            customer-facing application features, backend services, data pipelines, validation
                            workflows, and cloud-based projects while collaborating with technical and non-technical
                            stakeholders. My senior design work included a Python API integrating a foundational AI
                            model into a larger multi-component application. I am especially interested in
                            AI-assisted development, reliable software, clear communication, and solving ambiguous
                            problems through thoughtful engineering, testing, and continuous learning.
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
                                href="/docs/Anthony William Marchello Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-download-button"
                            >
                                Download Resume
                            </a>
                        </div>
                    ) : (
                        <object
                            data="/docs/Anthony William Marchello Resume.pdf"
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
