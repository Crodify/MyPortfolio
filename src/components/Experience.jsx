import { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
    {
        period: 'Nov 2026 — Present',
        title: 'Web Development Intern',
        org: 'Nexxoury Solutions',
        desc: 'Building responsive web interfaces, optimizing UI performance, and developing client-facing web applications using modern frontend frameworks and clean design systems.'
    },
    {
        period: 'Oct 2026 — Present',
        title: 'Open Source Software Contributor',
        org: 'GoodDollar, Algorand & Tenstorrent',
        desc: 'Authored and merged 3 production security & architectural audit PRs on GoodDollar (antseed-integration) approved by founder @sirpy: EIP-712 signature verification (#41), GraphQL keyset pagination (#40), and 6-decimal configs (#36). Contributed 5+ SDK PRs to Algorand.'
    },
    {
        period: 'Aug 2026',
        title: 'BerserkLifts — Workout & Habit Tracker',
        org: 'Full Stack Project',
        desc: 'Built a complete React Native app with Supabase auth, cloud sync, XP system, leaderboards, and drag-and-drop routines.'
    },
    {
        period: 'Jul 2026 — Aug 2026',
        title: 'Full-Stack Web Development Intern',
        org: 'Elevance Skills',
        desc: 'Completed a certified project-based curriculum covering React Native, Expo, and backend API integration. Built and shipped the Myntra Clone.'
    },
    {
        period: 'Jul 2026',
        title: 'Leads Tracker & Chrome Extension',
        org: 'Personal Projects',
        desc: 'Created a mobile-first leads app with Firebase and a Chrome tab manager extension.'
    },
    {
        period: 'Feb 2026 — Aug 2026',
        title: 'Frontend Developer Career Path',
        org: 'Scrimba',
        desc: 'Completed comprehensive course covering HTML5, CSS3, JavaScript, React, Responsive Design, and Web Accessibility. Built 12+ production projects.'
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
                <p className="section-subtitle reveal reveal-delay-1">The path of real-world projects and engineering growth</p>
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
