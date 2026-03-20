import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './Media.css';

const Media = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mediaList = [
        {
            subtitle: "BMSCE Rocketry Team Public Media",
            title: "Where rockets come alive through real-world storytelling",
            desc: "We don't just build rockets – we document the people, ideas and late-night tests behind them. Our media team captures launch footage, build diaries and competition recaps that showcase what student engineers can achieve. Explore our photos, videos and articles to experience the BMSCE Rocketry Team from the workshop to the edge of the sky.",
            type: "image",
            visual: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "BMSCE – IREC 2025: Pushing New Horizons",
            desc: "BMSCE marked our inaugural venture into high-power propulsion, representing a bold step forward in what our team can achieve. Over the span of two years, more than 100 dedicated student engineers collaborated tirelessly to design, manufacture and test this rocket. The team's efforts culminated in a historic victory—securing a top spot at the International Rocket Engineering Competition (IREC).",
            type: "video",
            visual: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1000",
            italic: true
        },
        {
            title: "Capturing the Edge of Space",
            desc: "Our onboard cameras provide a perspective few get to see. From the vibration of ignition to the silence of apogee, we bring the flight experience down to Earth for everyone to witness. Our data-driven media approach combines telemetry with high-definition cinematography.",
            type: "image",
            visual: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="media-page">
            <Navbar />

            <main className="media-main">
                {mediaList.map((item, i) => (
                    <section className="media-section" key={i}>
                        <div className="container split-wrapper">
                            <div className="media-text">
                                {item.subtitle && <p className="media-subtitle">{item.subtitle}</p>}
                                <h1>{item.title}</h1>
                                <p className={item.italic ? "media-description-alt" : "media-description"}>
                                    {item.italic ? <i>{item.desc}</i> : item.desc}
                                </p>
                            </div>
                            <div className="media-visual">
                                {item.type === "video" ? (
                                    <div className="video-placeholder">
                                        <img src={item.visual} alt={item.title} />
                                        <div className="play-button">
                                            <div className="play-icon"></div>
                                        </div>
                                    </div>
                                ) : (
                                    <img src={item.visual} alt={item.title} className="portrait-img" />
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            <footer className="footer bg-dark">
                <div className="footer-content container">
                    <div className="footer-col">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/">Projects</Link></li>
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

export default Media;
