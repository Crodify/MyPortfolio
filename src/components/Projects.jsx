import { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const filters = ['all', 'JavaScript', 'HTML5', 'CSS3'];
    const ref = useRef(null);

    const filtered = filter === 'all'
        ? projects
        : projects.filter(p => p.tech.includes(filter));

    const featured = projects.find(p => p.featured);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.05 }
        );
        const els = ref.current?.querySelectorAll('.reveal');
        els?.forEach(el => observer.observe(el));
        return () => els?.forEach(el => observer.unobserve(el));
    }, [filtered]);

    return (
        <section className="projects-section" id="projects" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">Projects</h2>
                <p className="section-subtitle reveal reveal-delay-1">A collection of projects I've built while learning</p>

                {featured && (
                    <div className="featured-card reveal">
                        <div className="featured-glow" />
                        <div className="featured-badge">⭐ Featured</div>
                        <div className="featured-content">
                            <span className="featured-icon">{featured.icon}</span>
                            <h3>{featured.title}</h3>
                            <p>{featured.description}</p>
                            <div className="tech-tags">
                                {featured.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {featured.live && <a href={featured.live} target="_blank" rel="noreferrer" className="btn-live">Live Demo →</a>}
                                {featured.github && <a href={featured.github} target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="filter-bar reveal">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f === 'all' ? 'All' : f}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filtered.filter(p => !p.featured).map((project, i) => (
                        <div key={project.id} className={`project-card reveal reveal-delay-${(i % 3) + 1}`}>
                            <div className="project-header">
                                <span className="project-icon">{project.icon}</span>
                                <h3>{project.title}</h3>
                            </div>
                            <p className="project-desc">{project.description}</p>
                            <div className="tech-tags">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live →</a>}
                                {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub →</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
