import { useState, useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const titles = ['Full Stack Developer', 'React Native Dev', 'UI Enthusiast', 'Problem Solver'];
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
                        <span className="stat-number">14+</span>
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
                <div className="hero-social reveal reveal-delay-3">
                    <a href="https://github.com/Crodify" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="https://linkedin.com/in/crodify" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="mailto:singhbhatiaranveer@gmail.com" className="social-link" title="Email">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </a>
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
