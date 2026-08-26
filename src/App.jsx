import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import './App.css';

function App() {
    const [theme, setTheme] = useState('dark');
    
    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'dark';
        setTheme(saved);
        document.documentElement.setAttribute('data-theme', saved);
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        localStorage.setItem('theme', next);
        document.documentElement.setAttribute('data-theme', next);
    };

    return (
        <div className="app">
            <ScrollProgress />
            <CursorGlow />
            <Navbar theme={theme} onToggle={toggleTheme} />
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
// Thu Aug 27 02:17:54 IST 2026
