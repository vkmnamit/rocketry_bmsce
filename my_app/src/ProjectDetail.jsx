import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return <div className="not-found">Project not found.</div>;
    }

    return (
        <div className="project-detail-root">
            <div className="project-hero" style={{ backgroundImage: `url(${project.heroImage})` }}>
                <div className="hero-overlay"></div>
                <div className="container">
                    <span className="project-year-tag">{project.year}</span>
                    <h1>{project.name}</h1>
                    <p className="hero-desc">The {project.status} mission of BMSCE Rocketry.</p>
                </div>
            </div>

            <section className="project-overview section-padding">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-text">
                            <h2>Project Overview</h2>
                            <p className="main-desc">{project.overview}</p>
                            <div className="contribution-list">
                                <h3>Key Contributions</h3>
                                <ul>
                                    {project.contributions.map((c, i) => <li key={i}>{c}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="overview-visual">
                            <div className="video-container">
                                <iframe 
                                    src={project.videoUrl} 
                                    title={`${project.name} Video`}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-history" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div className="history-block">
                        <div className="history-text">
                            <h2>The History</h2>
                            <p>{project.history}</p>
                        </div>
                        <div className="rocket-stat-image">
                            <img src="https://res.cloudinary.com/dxynzodll/image/upload/v1774003970/Rocketry_Design_Kit_s5omlp.png" alt="Rocket stats" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="technical-leads section-padding">
                <div className="container">
                    <h2 className="section-title">Technical Leads</h2>
                    <div className="leads-grid">
                        {project.teamLeads.map((lead, i) => (
                            <div key={i} className="lead-card">
                                <div className="lead-img">
                                    <img src={lead.img} alt={lead.name} />
                                </div>
                                <div className="lead-info">
                                    <h3>{lead.name}</h3>
                                    <p>{lead.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="project-footer">
                <div className="container">
                    <Link to="/projects" className="back-link">← Back to All Projects</Link>
                </div>
            </footer>
        </div>
    );
};

export default ProjectDetail;
