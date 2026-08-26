import { useEffect, useRef } from 'react';
import './Skills.css';

const skillGroups = [
    {
        title: 'Languages',
        icon: '💻',
        skills: [
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 },
            { name: 'JavaScript (ES6)', level: 80 },
            { name: 'React', level: 70 },
            { name: 'Python (Basic)', level: 55 },
            { name: 'Chrome API', level: 70 },
        ]
    },
    {
        title: 'Layout & Design',
        icon: '🎨',
        skills: [
            { name: 'Responsive Web Design', level: 90 },
            { name: 'Flexbox', level: 85 },
            { name: 'CSS Grid', level: 85 },
            { name: 'DOM Manipulation', level: 80 },
            { name: 'Web Accessibility', level: 70 },
        ]
    },
    {
        title: 'Backend',
        icon: '⚙️',
        skills: [
            { name: 'Node.js', level: 65 },
            { name: 'Express.js', level: 60 },
            { name: 'REST APIs', level: 70 },
            { name: 'Socket.io', level: 55 },
            { name: 'Authentication (JWT)', level: 60 },
        ]
    },
    {
        title: 'Tools & Databases',
        icon: '🛠️',
        skills: [
            { name: 'Git & GitHub', level: 80 },
            { name: 'VS Code', level: 90 },
            { name: 'Firebase Database', level: 65 },
            { name: 'MongoDB', level: 60 },
            { name: 'Netlify', level: 75 },
            { name: 'Render', level: 65 },
            { name: 'AI-Assisted Tools', level: 80 },
            { name: 'AI Agents', level: 60 },
        ]
    }
];

export default function Skills() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        const items = ref.current?.querySelectorAll('.reveal, .skill-bar-fill');
        items?.forEach(item => observer.observe(item));
        return () => items?.forEach(item => observer.unobserve(item));
    }, []);

    return (
        <section className="skills-section" id="skills" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">Skills & Technologies</h2>
                <p className="section-subtitle reveal reveal-delay-1">Technologies I work with to bring ideas to life</p>
                <div className="skills-grid">
                    {skillGroups.map((group, gi) => (
                        <div key={gi} className={`skill-card reveal reveal-delay-${gi + 1}`}>
                            <div className="skill-card-header">
                                <span className="skill-icon">{group.icon}</span>
                                <h3>{group.title}</h3>
                            </div>
                            <div className="skill-list">
                                {group.skills.map((skill, si) => (
                                    <div key={si} className="skill-item">
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span className="skill-pct">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill"
                                                style={{ '--level': `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
