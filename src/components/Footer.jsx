import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <a href="#" className="footer-logo">Crodify</a>
                    <p className="footer-text">Built with React + Vite</p>
                    <div className="footer-links">
                        <a href="mailto:singhbhatiaranveer@gmail.com">Email</a>
                        <a href="https://linkedin.com/in/crodify" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/Crodify" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                    <p className="footer-copy">© 2026 Ranveer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
