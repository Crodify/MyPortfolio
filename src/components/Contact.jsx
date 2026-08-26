import { useState, useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const ref = useRef(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: '', email: '', message: '' });
    };

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
        <section className="contact-section" id="contact" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">Get In Touch</h2>
                <p className="section-subtitle reveal reveal-delay-1">Have a project in mind? Let's work together!</p>
                <div className="contact-grid">
                    <form className="contact-form reveal reveal-delay-2" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden" style={{display:'none'}}>
                            <label>Don't fill this out: <input name="bot-field" /></label>
                        </p>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className={`btn btn-submit ${submitted ? 'submitted' : ''}`}>
                            {submitted ? '✓ Message Sent!' : 'Send Message →'}
                        </button>
                    </form>
                    <div className="contact-info reveal reveal-delay-3">
                        <a href="mailto:singhbhatiaranveer@gmail.com" className="info-card">
                            <span className="info-icon">📧</span>
                            <div>
                                <h3>Email</h3>
                                <span>singhbhatiaranveer@gmail.com</span>
                            </div>
                            <span className="info-arrow">→</span>
                        </a>
                        <a href="https://linkedin.com/in/crodify" target="_blank" rel="noreferrer" className="info-card">
                            <span className="info-icon">💼</span>
                            <div>
                                <h3>LinkedIn</h3>
                                <span>linkedin.com/in/crodify</span>
                            </div>
                            <span className="info-arrow">→</span>
                        </a>
                        <a href="https://github.com/Crodify" target="_blank" rel="noreferrer" className="info-card">
                            <span className="info-icon">🐙</span>
                            <div>
                                <h3>GitHub</h3>
                                <span>github.com/Crodify</span>
                            </div>
                            <span className="info-arrow">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
