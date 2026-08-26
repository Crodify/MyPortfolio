const fs = require('fs');
const dir = 'src/components';

// ============ NAVBAR ============
fs.writeFileSync(`${dir}/Navbar.jsx`, `import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ theme, onToggle }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', h);
        return () => window.removeEventListener('scroll', h);
    }, []);

    return (
        <nav className={\`navbar \${scrolled ? 'scrolled' : ''}\`}>
            <a href="#" className="nav-logo">Crodify</a>
            <button className={\`menu-toggle \${menuOpen ? 'open' : ''}\`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span><span></span><span></span>
            </button>
            <ul className={\`nav-links \${menuOpen ? 'open' : ''}\`}>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                <li><button className="theme-btn" onClick={onToggle}>{theme === 'dark' ? '☀️' : '🌙'}</button></li>
            </ul>
        </nav>
    );
}`);

// ============ HERO ============
fs.writeFileSync(`${dir}/Hero.jsx`, `import { profile } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
    return (
        <section id="about" className="hero">
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
            </div>
            <div className="hero-content">
                <span className="hero-badge">{profile.status}</span>
                <h1 className="hero-title">
                    <span>{profile.headline.greeting}</span>
                    <span className="hero-name">{profile.headline.name}</span>
                    <span>{profile.headline.suffix}</span>
                </h1>
                <p className="hero-tagline">{profile.tagline}</p>
                <div className="hero-stats">
                    {profile.stats.map((s, i) => (
                        <div key={i} className="stat">
                            <span className="stat-value">{s.value}+</span>
                            <span className="stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
                <div className="hero-cta">
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#contact" className="btn-outline">Contact Me</a>
                    <a href={profile.github} target="_blank" rel="noopener" className="btn-outline">GitHub</a>
                </div>
            </div>
        </section>
    );
}`);

// ============ SKILLS ============
fs.writeFileSync(`${dir}/Skills.jsx`, `import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <p className="section-sub">Technologies I work with</p>
                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <div key={i} className="skill-card">
                            <div className="skill-header">
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-level">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: skill.level + '%' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}`);

// ============ PROJECTS ============
fs.writeFileSync(`${dir}/Projects.jsx`, `import { projects } from '../data/portfolio';
import './Projects.css';

export default function Projects() {
    const featured = projects.find(p => p.featured);
    const others = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-sub">Things I've built recently</p>

                {featured && (
                    <a href={featured.liveUrl} target="_blank" rel="noopener" className="featured-card">
                        <div className="featured-gradient" style={{ background: featured.gradient }}></div>
                        <div className="featured-badge">Featured</div>
                        <div className="featured-content">
                            <h3>{featured.title}</h3>
                            <p>{featured.description}</p>
                            <div className="tech-tags">
                                {featured.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                            </div>
                            <div className="project-links">
                                <span className="link-btn">Live Demo →</span>
                                <span className="link-btn">Source Code →</span>
                            </div>
                        </div>
                    </a>
                )}

                <div className="projects-grid">
                    {others.map(p => (
                        <a key={p.id} href={p.liveUrl} target="_blank" rel="noopener" className="project-card">
                            <div className="project-gradient" style={{ background: p.gradient }}></div>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className="tech-tags">
                                {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}`);

// ============ EXPERIENCE ============
fs.writeFileSync(`${dir}/Experience.jsx`, `import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <p className="section-sub">My learning journey</p>
                <div className="timeline">
                    {experience.map((exp, i) => (
                        <div key={i} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-period">{exp.period}</span>
                                <h3>{exp.role}</h3>
                                <h4>{exp.org}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}`);

// ============ CONTACT ============
fs.writeFileSync(`${dir}/Contact.jsx`, `import { useState } from 'react';
import { profile } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = u
