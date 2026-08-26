import { useState, useEffect } from 'react';
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
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <a href="#" className="nav-logo">Crodify</a>
            <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span><span></span><span></span>
            </button>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                <li><button className="theme-btn" onClick={onToggle}>{theme === 'dark' ? '☀️' : '🌙'}</button></li>
            </ul>
        </nav>
    );
}
