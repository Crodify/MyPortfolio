import { useState, useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const titles = ['Frontend Developer', 'React Developer', 'UI Enthusiast', 'Problem Solver'];
    const [typingSpeed, setTypingSpeed] = useState(150);
    const heroRef = useRef(null);

    useEffect(() => {
        const handle = setInterval(() => {
            const i = loopNum % titles.length;
            const fullText = titles[i];
            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );
            setTypingSpeed(isDeleting ? 75 : 150);
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        }, typingSpeed);
        return () => clearInterval(handle);
    }, [text, isDeleting, loopNum, typingSpeed, titles]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) e.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        const els = heroRef.current?.querySelectorAll('.reveal');
        els?.forEach(el => observer.observe(el));
        return () => els?.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <section className="hero" id="about" ref={heroRef}>
            <div className="hero-bg">
                <div className="hero-gradient-orb orb-1" />
                <div className="hero-gradient-orb orb-2" />
                <div className="hero-gradient-orb orb-3" />
                <div className="hero-grid" />
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="hero-dot" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                        opacity: 0.1 + Math.random() * 0.3,
                        width: `${2 + Math.random() * 3}px`,
                        height: `${2 + Math.random() * 3}px`,
                    }} />
                ))}
            </div>
            <div className="hero-content">
                <div className="hero-badge reveal">
                    <span className="badge-dot" />
                    Open to opportunities
                </div>
                <h1 className="reveal reveal-delay-1">
                    Hi, I'm <span className="highlight">Ranveer</span>
                </h1>
                <h2 className="typing-text reveal reveal-delay-2">
                    {text}<span className="cursor">|</span>
                </h2>
                <p className="hero-desc reveal reveal-delay-2">
                    I craft responsive, user-friendly web experiences with clean code
                    and modern technologies. Currently building projects through Scrimba.
                </p>
                <div className="hero-stats reveal reveal-delay-3">
                    <div className="stat">
                        <span className="stat-number">12+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Skills</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Passion</span>
                    </div>
                </div>
                <div className="hero-cta reveal reveal-delay-3">
                    <a href="#projects" className="btn btn-primary">
                        <span>View My Work</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
        </section>
    );
}
