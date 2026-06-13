import React, { useEffect } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { projectsData } from './projectsData';

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Build project lists from centralized projectsData
    const projectData = {
        ongoing: [projectsData.pardalote],
        past: [projectsData['naf-2'], projectsData.wattle, projectsData.rosella],
        upcoming: []
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
                            {projectData.ongoing.map((p, idx) => (
                                <div key={p.name + idx} className="project-card">
                                    <div className="p-img"><img src={p.heroImage || p.image} alt={p.name} /></div>
                                    <div className="p-info">
                                        <span className="p-year">{p.year}</span>
                                        <h3>{p.name}</h3>
                                        <p>{p.overview || p.description}</p>
                                        <Link to={`/projects/${p.name.toLowerCase()}`} className="view-btn">Full History</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="project-category">
                        <h2 className="cat-title">Past Projects</h2>
                        <div className="project-grid">
                            {projectData.past.map((p, idx) => (
                                <div key={(p.name || '') + idx} className="project-small-card">
                                    <div className="p-img">
                                        <img src={p.missionPatch || p.heroImage || p.image} alt={p.name} />
                                    </div>
                                    <div className="p-info">
                                        <h3>{p.name}</h3>
                                        <span className="p-year">{p.year}</span>
                                        <p>{p.overview || p.description}</p>
                                        <Link to={`/projects/${(p.name || '').toLowerCase().replace(/\s+/g, '-')}`}>VIEW DETAILS</Link>
                                        <div className="hover-details">
                                            <strong>Mission Summary</strong>
                                            <p>{p.overview || p.missionConclusion || ''}</p>
                                        </div>
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
