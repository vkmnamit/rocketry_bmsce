import React, { useEffect } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projectData = {
        ongoing: [
            { id: 'pardalote', name: 'Pardalote', year: '2024-2025', description: 'Our latest hybrid rocket aiming for the 30k ft COTS category.', image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800' }
        ],
        past: [
            { id: 'wattle', name: 'Wattle', year: '2023', description: 'Winner of the Spaceport America Cup 2023.', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800' },
            { id: 'rosella', name: 'Rosella', year: '2022', description: 'Innovation award winner at IREC.', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800' },
            { id: 'bluewren', name: 'Bluewren', year: '2021', description: 'Our first successful 10k ft launch.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' }
        ],
        upcoming: [
            { id: 'skyhawk', name: 'Skyhawk', year: '2026', description: 'Future deep space research vehicle.', image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=800' }
        ]
    };

    return (
        <div className="projects-page">
            <header className="projects-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <h1>Our Projects</h1>
                    <p>Engineering the history of BMSCE Rocketry.</p>
                </div>
            </header>

            <section className="projects-content section-padding">
                <div className="container">
                    <div className="project-category">
                        <h2 className="cat-title">Ongoing Projects</h2>
                        <div className="project-list">
                            {projectData.ongoing.map(p => (
                                <div key={p.id} className="project-card">
                                    <div className="p-img"><img src={p.image} alt={p.name} /></div>
                                    <div className="p-info">
                                        <span className="p-year">{p.year}</span>
                                        <h3>{p.name}</h3>
                                        <p>{p.description}</p>
                                        <Link to={`/projects/${p.id}`} className="view-btn">Full History</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="project-category">
                        <h2 className="cat-title">Past Projects</h2>
                        <div className="project-grid">
                            {projectData.past.map(p => (
                                <div key={p.id} className="project-small-card">
                                    <div className="p-img"><img src={p.image} alt={p.name} /></div>
                                    <div className="p-info">
                                        <h3>{p.name}</h3>
                                        <span className="p-year">{p.year}</span>
                                        <p>{p.description}</p>
                                        <Link to={`/projects/${p.id}`}>VIEW DETAILS</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="project-category">
                        <h2 className="cat-title">Upcoming Projects</h2>
                        <div className="project-list">
                            {projectData.upcoming.map(p => (
                                <div key={p.id} className="project-card upcoming">
                                    <div className="p-img"><img src={p.image} alt={p.name} /></div>
                                    <div className="p-info">
                                        <span className="p-year">{p.year}</span>
                                        <h3>{p.name}</h3>
                                        <p>{p.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
