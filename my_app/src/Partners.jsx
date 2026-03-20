import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Partners.css';

const Partners = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const platinumSponsors = [
        { name: "Pirtek", desc: "Pirtek is the market leader in providing customers with a diverse portfolio of fluid transfer solution products and services. Pirtek is supporting our team by subsidising component costs as well as providing valuable support, training, and technical advice for our hybrid engine.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Exp_realty_logo.svg/2560px-Exp_realty_logo.svg.png" },
        { name: "Coregas", desc: "As a Wesfarmers company, Coregas is the only Australian-owned industrial gases company. They are assisting us with our major research project, the development of a hybrid rocket engine, by supplying us with all our necessary gas supplies.", logo: "https://logos-world.net/wp-content/uploads/2021/08/Fortune-Magazine-Logo.png" },
        { name: "Sydney Composites", desc: "Sydney Composites are specialists in the design and manufacture of high quality carbon fibre and composite products. They have provided us with valuable support by manufacturing and shaping custom fins for our rockets, finishing our airframes, and offering ongoing technical guidance.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HGTV_Logo_2010.svg/2560px-HGTV_Logo_2010.svg.png" }
    ];

    return (
        <div className="partners-page" style={{ paddingTop: '80px' }}>

            <main className="partners-main">
                {/* Hero Section: Logo Grid Left, Text Right */}
                <section className="partners-hero">
                    <div className="container hero-split">
                        <div className="hero-logo-cloud">
                            <p className="cloud-subtitle">Proudly sponsored in 2024/2025 by:</p>
                            <div className="logo-grid-cloud">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HGTV_Logo_2010.svg/2560px-HGTV_Logo_2010.svg.png" alt="Sponsor" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Exp_realty_logo.svg/2560px-Exp_realty_logo.svg.png" alt="Sponsor" />
                                <img src="https://logos-world.net/wp-content/uploads/2021/08/Fortune-Magazine-Logo.png" alt="Sponsor" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HGTV_Logo_2010.svg/2560px-HGTV_Logo_2010.svg.png" alt="Sponsor" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Exp_realty_logo.svg/2560px-Exp_realty_logo.svg.png" alt="Sponsor" />
                                <img src="https://logos-world.net/wp-content/uploads/2021/08/Fortune-Magazine-Logo.png" alt="Sponsor" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HGTV_Logo_2010.svg/2560px-HGTV_Logo_2010.svg.png" alt="Sponsor" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Exp_realty_logo.svg/2560px-Exp_realty_logo.svg.png" alt="Sponsor" />
                                <img src="https://logos-world.net/wp-content/uploads/2021/08/Fortune-Magazine-Logo.png" alt="Sponsor" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HGTV_Logo_2010.svg/2560px-HGTV_Logo_2010.svg.png" alt="Sponsor" />
                            </div>
                        </div>
                        <div className="hero-text-side">
                            <h1>Our Work Is Made Possible by Our Sponsors</h1>
                            <p>BMSCE Rocketry Team would not have been able to achieve any of our major milestones without the help of our sponsors. We would like to thank all of our partners for their generous support. You have made every single one of our rocketry projects possible and have provided our team members with priceless learning experiences and opportunities.</p>
                        </div>
                    </div>
                </section>

                {/* Diamond Sponsor Section */}
                <section className="sponsor-category">
                    <div className="container category-split">
                        <div className="category-text">
                            <h2 className="cat-title">Diamond Sponsor</h2>
                            <h3 className="sponsor-name-highlight">BMS College of Engineering, Bangalore</h3>
                            <p>We are based in the heart of Bangalore, where the college has generously donated dedicated lab space for us to construct our rockets. The school also provides academic support and research opportunities through collaboration with ವಿವಿಧ ವಿಭಾಗಗಳ (various departments).</p>
                        </div>
                        <div className="category-visual">
                             <img src="https://res.cloudinary.com/dxynzodll/image/upload/v1774003970/Rocketry_Design_Kit_s5omlp.png" alt="Diamond Logo" className="large-sponsor-logo" />
                        </div>
                    </div>
                </section>

                {/* Platinum Sponsors Section */}
                <section className="sponsor-category platinum-bg">
                    <div className="container category-split">
                        <div className="category-text list-style">
                            <h2 className="cat-title">Platinum Sponsors</h2>
                            {platinumSponsors.map((s, i) => (
                                <div className="sponsor-item" key={i}>
                                    <h4 className="item-name">{s.name}</h4>
                                    <p className="item-desc">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="category-visual stack-logos">
                            {platinumSponsors.map((s, i) => (
                                <img src={s.logo} alt={s.name} key={i} className="stack-logo" />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer bg-dark">
                <div className="footer-content container">
                    <div className="footer-col">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/partners">Partners</Link></li>
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

export default Partners;
