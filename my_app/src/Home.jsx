import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { initScrollAnimation } from "./scrollAnimation";
import { initGalleryAnimation } from "./galleryAnimation";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = (node) => {
        if (node) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(node);
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(node);
        }
    };

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const updateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(percentage * end));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(updateCount);
            }
        };

        animationFrame = requestAnimationFrame(updateCount);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span ref={elementRef}>{count}{suffix}</span>;
};

export default function Home() {
    useEffect(() => {
        const scrollCleanup = initScrollAnimation();
        const galleryCleanup = initGalleryAnimation();

        return () => {
            scrollCleanup();
            galleryCleanup();
        };
    }, []);

    return (
        <div className="home-root">
            {/* HERO SECTION */}
            <div className="Main_img" id="hero">
                <div className="hero-content">
                    <div className="hero-text-block">
                        <h1>BMSCE Rocketry Team</h1>
                        <p className="hero-tagline">Engineering the Future of High-Power Rocketry</p>
                        <a href="#about" className="learn-more-btn">LEARN MORE</a>
                    </div>
                    <div className="hero-visual">
                        <img src="" alt="Rocket Logo" className="hero-rocket-img" />
                    </div>
                </div>
            </div>

            {/* ABOUT US SECTION */}
            <div className="about-us-section" id="about">
                <div className="container">
                    <h2 className="section-title-alt">About Us</h2>
                    <p className="mission-text">At BMSCE Rocketry Team, we design, manufacture, and launch high-power sounding rockets to a world-class standard.</p>

                    <div className="about-grid">
                        <div className="about-info-blocks">
                            <div className="info-block">
                                <div className="info-icon">⭐</div>
                                <div className="info-text">
                                    <h3>THE TEAM</h3>
                                    <p>We are a highly-technical team of student engineers who design, manufacture and test high power sounding rockets to compete in competitions.</p>
                                </div>
                            </div>
                            <div className="info-block">
                                <div className="info-icon">👁️</div>
                                <div className="info-text">
                                    <h3>OUR VISION</h3>
                                    <p>Our passionate team strives to innovate and push the boundaries of the sounding rocket environment everyday.</p>
                                </div>
                            </div>
                            <div className="info-block">
                                <div className="info-icon">🚀</div>
                                <div className="info-text">
                                    <h3>OUR ROCKETS</h3>
                                    <p>Our rockets are designed for performance and built with integrity. We take a systems engineering approach.</p>
                                </div>
                            </div>
                            <div className="info-block">
                                <div className="info-icon">🏢</div>
                                <div className="info-text">
                                    <h3>OUR SPONSORS</h3>
                                    <p>BMSCE Rocketry Team would not have been able to achieve all of our major milestones without our sponsors.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-image-side">
                            <div className="image-wrapper">
                                <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800" alt="Rocket Launch" />
                                <div className="image-accent-bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* QUICK LINKS SECTION */}
            <div className="quick-links-section">
                <div className="container">
                    <div className="quick-link-cards">
                        <div className="q-card">
                            <div className="q-image">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" alt="Members working on rocket" />
                            </div>
                            <div className="q-content">
                                <h3>Our Team</h3>
                                <p>Behind every project is a team of highly talented and dedicated student engineers.</p>
                                <Link to="/team" className="q-btn">LEARN MORE</Link>
                            </div>
                        </div>
                        <div className="q-card">
                            <div className="q-image">
                                <img src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=400" alt="Media display" />
                            </div>
                            <div className="q-content">
                                <h3>Media Releases</h3>
                                <p>View our dedicated media gallery showcasing our projects throughout the years.</p>
                                <Link to="/media" className="q-btn">VIEW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="dashboard-stats" style={{ padding: "8rem 3rem", background: "#ffffff" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: "0.85rem", color: "#666", fontWeight: "700", letterSpacing: "4px", marginBottom: "4rem", textTransform: "uppercase" }}>By The Numbers</h2>
                    <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                        <div className="stat-card">
                            <h2 style={{ color: "#111827", fontSize: "4.5rem", fontWeight: "900", marginBottom: "0.5rem" }}><CountUp end={150} suffix="+" /></h2>
                            <p style={{ color: "#4a5568", fontWeight: "500", textTransform: "lowercase", letterSpacing: "1px" }}>projects completed</p>
                        </div>
                        <div className="stat-card">
                            <h2 style={{ color: "#111827", fontSize: "4.5rem", fontWeight: "900", marginBottom: "0.5rem" }}><CountUp end={50} suffix="+" /></h2>
                            <p style={{ color: "#4a5568", fontWeight: "500", textTransform: "lowercase", letterSpacing: "1px" }}>happy clients</p>
                        </div>
                        <div className="stat-card">
                            <h2 style={{ color: "#111827", fontSize: "4.5rem", fontWeight: "900", marginBottom: "0.5rem" }}><CountUp end={10} /></h2>
                            <p style={{ color: "#4a5568", fontWeight: "500", textTransform: "lowercase", letterSpacing: "1px" }}>awards won</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="project" id="projects" style={{ background: "white" }}>
                <div className="container">
                    <h1 style={{ color: "#1a1a1a" }}>Current Projects</h1>
                    <div className="project1">
                        <img src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800" alt="Rocket Model" />
                        <div className="card1"><h2>Solid Fuel Rocket Mk-1</h2>
                            <p>Our primary launch vehicle for high-altitude research.</p>
                        </div>
                    </div>
                    <div className="project2">
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Electronics module" />
                        <div className="card2"><h2>Avionics System</h2>
                            <p>State-of-the-art flight control and real-time telemetry system.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="sponser_name" style={{ background: "#ffffff", padding: "6rem 0" }}>
                <div className="feature-in-1" style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "0.85rem", color: "#666", fontWeight: "700", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "3rem" }}>As Featured In</p>
                    <div className="marquee">
                        <div className="marquee-content">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HGTV_Logo_2010.svg/2560px-HGTV_Logo_2010.svg.png" alt="HGTV Logo" style={{ height: "40px" }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Exp_realty_logo.svg/2560px-Exp_realty_logo.svg.png" alt="Exp Realty Logo" style={{ height: "40px" }} />
                            <img src="https://logos-world.net/wp-content/uploads/2021/08/Fortune-Magazine-Logo.png" alt="Fortune Logo" style={{ height: "40px" }} />
                            {/* Duplicate for infinite loop */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HGTV_Logo_2010.svg/2560px-HGTV_Logo_2010.svg.png" alt="HGTV Logo" style={{ height: "40px" }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Exp_realty_logo.svg/2560px-Exp_realty_logo.svg.png" alt="Exp Realty Logo" style={{ height: "40px" }} />
                            <img src="https://logos-world.net/wp-content/uploads/2021/08/Fortune-Magazine-Logo.png" alt="Fortune Logo" style={{ height: "40px" }} />
                            {/* More duplicates to fill space */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HGTV_Logo_2010.svg/2560px-HGTV_Logo_2010.svg.png" alt="HGTV Logo" style={{ height: "40px" }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Exp_realty_logo.svg/2560px-Exp_realty_logo.svg.png" alt="Exp Realty Logo" style={{ height: "40px" }} />
                            <img src="https://logos-world.net/wp-content/uploads/2021/08/Fortune-Magazine-Logo.png" alt="Fortune Logo" style={{ height: "40px" }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="technical-resources-section" id="resources">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title-alt">Technical Resources</h2>
                        <p className="section-subtitle">Research publications, engineering documentation, educational material and compliance reference.</p>
                    </div>

                    <div className="resources-grid">
                        <div className="resource-category-card">
                            <div className="category-header">
                                <div className="category-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                </div>
                                <h3>Research Papers</h3>
                            </div>
                            <div className="resource-list">
                                <div className="resource-item">
                                    <span className="file-name">Aerodynamic Analysis of Subsonic Rockets</span>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                                <div className="resource-item">
                                    <span className="file-name">CFD Modeling for Fin Optimization</span>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                            </div>
                        </div>

                        <div className="resource-category-card">
                            <div className="category-header">
                                <div className="category-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                </div>
                                <h3>Technical Reports</h3>
                            </div>
                            <div className="resource-list">
                                <div className="resource-item">
                                    <span className="file-name">Static Fire Test Report - Q1 2024</span>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                                <div className="resource-item">
                                    <span className="file-name">Avionics Integration Review</span>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                            </div>
                        </div>

                        <div className="resource-category-card">
                            <div className="category-header">
                                <div className="category-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6M6 12h12"></path><rect x="6" y="4" width="12" height="16" rx="2"></rect></svg>
                                </div>
                                <h3>HPR 101 (Educational)</h3>
                            </div>
                            <div className="resource-list">
                                <div className="resource-item">
                                    <span className="file-name">Introduction to High Power Rocketry</span>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                                <div className="resource-item">
                                    <span className="file-name">Motor Classification & Safety Guide</span>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                            </div>
                        </div>

                        <div className="resource-category-card">
                            <div className="category-header">
                                <div className="category-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                </div>
                                <h3>Safety Compliance</h3>
                                <p className="category-subtitle">Legal & Safety Documentation</p>
                            </div>
                            <div className="resource-list">
                                <div className="resource-item">
                                    <span className="file-name">Range Safety Regulations 2024</span>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                                <div className="resource-item">
                                    <span className="file-name">Legal Compliance & Liability Docs</span>
                                    <button className="download-btn">Download PDF</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer" style={{ background: "#111827", color: "white" }}>
                <div className="footer-content container">
                    <div className="footer-col">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/team">TEAM</Link></li>
                            <li><a href="#projects">PARTNERS</a></li>
                            <li><Link to="/projects">PROJECTS</Link></li>
                            <li><Link to="/media">MEDIA</Link></li>
                            <li><a href="#resources">RESOURCES</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Contact</h2>
                        <p>📍 BMSCE, Bangalore</p>
                        <p>📧 rocketry@bmsce.ac.in</p>
                    </div>
                    <div className="footer-col">
                        <h2>Connect</h2>
                        <div className="social-links">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    © 2026 BMSCE Rocketry Team
                </div>
            </footer>
        </div >
    );
}
