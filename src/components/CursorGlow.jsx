import { useState, useEffect } from 'react';
import './CursorGlow.css';

export default function CursorGlow() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [clicking, setClicking] = useState(false);

    useEffect(() => {
        const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        const handleDown = () => setClicking(true);
        const handleUp = () => setClicking(false);

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mousedown', handleDown);
        window.addEventListener('mouseup', handleUp);
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mousedown', handleDown);
            window.removeEventListener('mouseup', handleUp);
        };
    }, []);

    return (
        <>
            <div
                className={`cursor-glow ${clicking ? 'clicking' : ''}`}
                style={{ left: pos.x, top: pos.y }}
            />
            <div
                className={`cursor-ring ${clicking ? 'clicking' : ''}`}
                style={{ left: pos.x, top: pos.y }}
            />
        </>
    );
}
