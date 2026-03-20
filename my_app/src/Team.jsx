import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './Team.css';

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const directors = [
        { name: "Executive Coordinator", role: "Management", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
        { name: "Technical Director", role: "Engineering", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
        { name: "Operations Lead", role: "Logistics", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" }
    ];

    const technicalTeams = [
        { name: "Propulsion Team", desc: "Engine Design & Testing", img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400" },
        { name: "Avionics Team", desc: "Flight Systems & Data", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" },
        { name: "Structures Team", desc: "Airframe & Recovery", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
        { name: "Payload Team", desc: "Scientific Research", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400" }
    ];

    return (
        <div className="team-page">
            <Navbar />
            {/* HERO SECTION */}
            <section className="team-hero">
                <div className="hero-mist-overlay"></div>
                <div className="container" style={{maxWidth: '100%', padding: '0'}}>
                    <div className="hero-text-box">
                        <h1>Engineering the Future of <br/> <span>High-Power Rocketry</span></h1>
                        <p>Guided by industry-standard engineering and a commitment to safety, we aim to drive Australia's growing space industry through innovation, hands-on learning, and STEM outreach.</p>
                    </div>
                </div>
            </section>

            {/* OUR TEAM SECTION */}
            <section className="our-team-section">
                <div className="container">
                    <h2 className="centered-title">Our Team</h2>
                    <div className="director-grid">
                        {directors.map((director, i) => (
                            <div className="director-card" key={i}>
                                <div className="card-image-wrapper">
                                    <img src={director.img} alt={director.name} />
                                    <div className="floating-info-box">
                                        <h3>{director.name}</h3>
                                        <p>{director.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNICAL TEAMS SECTION */}
            <section className="tech-teams-section">
                <div className="container">
                    <h2 className="centered-title">Technical Team</h2>
                    <p className="tech-intro">Behind every successful project is a team of highly dedicated and talented student engineers committed to precision, reliability, and continuous improvement.</p>
                    <div className="tech-grid">
                        {technicalTeams.map((team, i) => (
                            <div className="tech-team-card" key={i}>
                                <div className="tech-card-image">
                                    <img src={team.img} alt={team.name} />
                                </div>
                                <div className="tech-card-content">
                                    <h3>{team.name}</h3>
                                    <p>{team.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer bg-dark">
                <div className="footer-content container">
                    <div className="footer-col">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><Link to="/media">Media</Link></li>
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
        </div>
    );
};

export default Team;
