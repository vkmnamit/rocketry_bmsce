import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './TechnicalResources.css';

const TechnicalResources = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const resources = [
        {
            title: "Avionics Documentation",
            desc: "Explore our flight computer architectures, PCB designs, and telemetry communication software.",
            link: "#"
        },
        {
            title: "Propulsion Analysis",
            desc: "Detailed reports on solid motor performance, simulation data, and static fire test results.",
            link: "#"
        },
        {
            title: "Aerodynamics & Recovery",
            desc: "Parachute deployment algorithms, descent rate calculations, and fluid dynamics simulations.",
            link: "#"
        },
        {
            title: "Structural Integrity",
            desc: "FEA validation of airframes, material selection guides, and structural testing methods.",
            link: "#"
        }
    ];

    return (
        <div className="resources-page">
            <Navbar />

            <div className="resources-header">
                <h1>Technical Resources</h1>
                <p>An open repository of our engineering methodologies, design reviews, and research data.</p>
            </div>

            <main className="resources-main container">
                <div className="resources-grid">
                    {resources.map((resource, i) => (
                        <div className="resource-card" key={i}>
                            <h2>{resource.title}</h2>
                            <p>{resource.desc}</p>
                            <a href={resource.link} className="resource-btn">Read More</a>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="footer bg-dark">
                <div className="footer-content container">
                    <div className="footer-col">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/media">Media</Link></li>
                            <li><Link to="/resources">Resources</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Contact</h2>
                        <p>📍 BMSCE, Bangalore</p>
                        <p>📧 rocketry@bmsce.ac.in</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    © 2026 BMSCE Rocketry Team
                </div>
            </footer>
        </div>
    );
};

export default TechnicalResources;
