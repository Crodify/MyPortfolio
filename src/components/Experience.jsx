import { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
    {
        period: 'Aug 2026',
        title: 'Weather Dashboard & Myntra Clone',
        org: 'Personal Projects',
        desc: 'Built a real-time weather app with API integration and PWA support. Cloned Myntra using React.'
    },
    {
        period: 'Aug 2026',
        title: 'Leads Tracker & Chrome Extension',
        org: 'Personal Projects',
        desc: 'Created a mobile-first leads app with Firebase and a Chrome tab manager extension.'
    },
    {
        period: 'Jul 2026',
        title: 'Blackjack Game & Password Generator',
        org: 'Personal Projects',
        desc: 'Built a full Blackjack card game with betting system and a secure password generator.'
    },
    {
        period: 'Jun 2026',
        title: 'Counter & Score Apps',
        org: 'Personal Projects',
        desc: 'Developed animated counter and basketball score counter components with JavaScript.'
    },
    {
        period: 'Mar 2026',
        title: 'Dream Place & Birthday Card',
        org: 'Personal Projects',
        desc: 'Created a tourist website with responsive design and an animated birthday greeting card.'
    },
    {
        period: 'Feb 2026',
        title: 'Started Learning Web Dev',
        org: 'Scrimba',
        desc: 'Began the Frontend Developer Career Path. Learned HTML, CSS, and JavaScript fundamentals. Built first projects: SpaceX clone, business card, and self-introduction page.'
    }
];

export default function Experience() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        const els = ref.current?.querySelectorAll('.reveal');
        els?.forEach(el => observer.observe(el));
        return () => els?.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <section className="experience-section" id="experience" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">My Journey</h2>
                <p className="section-subtitle reveal reveal-delay-1">The path that brought me to where I am today</p>
                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <div key={i} className={`timeline-item reveal reveal-delay-${(i % 3) + 1}`}>
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <span className="timeline-period">{exp.period}</span>
                                <h3>{exp.title}</h3>
                                <span className="timeline-org">{exp.org}</span>
                                <p>{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
