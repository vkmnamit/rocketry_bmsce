import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Close menu on resize to PC
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const projectsList = [
        "Pardalote", "Wattle", "Rosella", "Bluewren", "Waratah", 
        "Tetratheca", "Silvereye", "Wedgetail", "Bronzewing", 
        "Callistemon", "Ironbark", "Firetail"
    ];

    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/">
                    <img 
                        src="https://res.cloudinary.com/dxynzodll/image/upload/v1774003970/Rocketry_Design_Kit_s5omlp.png" 
                        alt="BMSCE Rocketry Logo" 
                        className="nav-logo" 
                    />
                </Link>
            </div>

            <nav className="desktop-nav">
                <NavLink to="/team" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>TEAM</NavLink>
                <NavLink to="/partners" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>PARTNERS</NavLink>
                
                <div className="nav-dropdown-wrapper">
                    <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link dropdown-trigger active" : "nav-link dropdown-trigger"}>
                        PROJECTS <span className="arrow">▾</span>
                    </NavLink>
                    <div className="dropdown-menu">
                        {projectsList.map((project, idx) => (
                            <NavLink 
                                key={idx} 
                                to={`/projects/${project.toLowerCase()}`}
                                className="dropdown-item"
                            >
                                {project}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <NavLink to="/media" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>MEDIA</NavLink>
            </nav>

            <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <nav>
                    <NavLink to="/team" className={({isActive}) => isActive ? "active" : ""}>TEAM</NavLink>
                    <NavLink to="/partners" className={({isActive}) => isActive ? "active" : ""}>PARTNERS</NavLink>
                    <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>PROJECTS</NavLink>
                    <NavLink to="/media" className={({isActive}) => isActive ? "active" : ""}>MEDIA</NavLink>
                </nav>

                <div className="mobile-footer">
                    <div className="mobile-socials">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>
                    <p className="mobile-copyright">© 2026 BMSCE Rocketry</p>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
