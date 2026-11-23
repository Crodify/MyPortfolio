import jsPDF from 'jspdf';
import resumeData from '../data/resume';

export async function generateResume() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const W = 210, H = 297;
    const mL = 20, mR = 20, mT = 0;
    const cW = W - mL - mR;
    let y = 0;

    // Helpers
    const c = (r, g, b) => doc.setTextColor(r, g, b);
    const f = (sz, st) => { doc.setFont('helvetica', st || 'normal'); doc.setFontSize(sz); };
    const line = (x1, yy, x2) => { doc.setDrawColor(239, 68, 68); doc.setLineWidth(0.4); doc.line(x1, yy, x2, yy); };
    const checkPage = (need) => { if (y + need > H - 25) { addFooter(); doc.addPage(); y = 25; } };

    // === PAGE 1 SIDEBAR ===
    // Dark sidebar
    doc.setFillColor(15, 15, 15);
    doc.rect(0, 0, 72, H, 'F');

    // Red accent strip
    doc.setFillColor(239, 68, 68);
    doc.rect(72, 0, 2, H, 'F');

    let sy = 22;

    // Name on sidebar
    f(16, 'bold');
    c(255, 255, 255);
    doc.text('RANVEER', 14, sy);
    sy += 7;
    doc.text('SINGH BHATIA', 14, sy);
    sy += 10;

    // Title
    f(9);
    c(239, 68, 68);
    doc.text(resumeData.title || 'Frontend & Web3 Developer', 14, sy);
    sy += 14;

    // Contact Section
    f(7, 'bold');
    c(239, 68, 68);
    doc.text('CONTACT', 14, sy);
    sy += 2;
    line(14, sy, 56, sy);
    sy += 7;

    f(7);
    c(200, 200, 200);
    const contacts = [
        { icon: '✉', text: resumeData.email },
        { icon: '💼', text: resumeData.linkedin },
        { icon: '🐙', text: resumeData.github },
        { icon: '🌐', text: resumeData.website },
    ];
    contacts.forEach(ct => {
        f(7);
        c(239, 68, 68);
        doc.text(ct.icon, 14, sy);
        c(180, 180, 180);
        const lines = doc.splitTextToSize(ct.text, 48);
        doc.text(lines, 22, sy);
        sy += lines.length * 4 + 3;
    });
    sy += 6;

    // Skills on sidebar
    f(7, 'bold');
    c(239, 68, 68);
    doc.text('SKILLS', 14, sy);
    sy += 2;
    line(14, sy, 56, sy);
    sy += 7;

    Object.entries(resumeData.skills).forEach(([cat, skills]) => {
        f(7, 'bold');
        c(255, 255, 255);
        doc.text(cat.replace('_', ' / '), 14, sy);
        sy += 5;
        f(6.5);
        c(170, 170, 170);
        skills.forEach(sk => {
            doc.text('• ' + sk, 16, sy);
            sy += 4;
        });
        sy += 2;
    });
    sy += 4;

    // Languages on sidebar
    f(7, 'bold');
    c(239, 68, 68);
    doc.text('LANGUAGES', 14, sy);
    sy += 2;
    line(14, sy, 56, sy);
    sy += 7;
    f(7);
    c(180, 180, 180);
    doc.text('English — Fluent', 14, sy); sy += 5;
    doc.text('Hindi — Native', 14, sy); sy += 14;

    // === MAIN CONTENT (right side) ===
    let my = 22;

    // Summary
    f(10, 'bold');
    c(239, 68, 68);
    doc.text('PROFESSIONAL SUMMARY', 82, my);
    my += 2;
    line(82, my, 190, my);
    my += 6;
    f(7.5);
    c(50, 50, 50);
    const sumLines = doc.splitTextToSize(resumeData.summary, cW - 10);
    doc.text(sumLines, 82, my);
    my += sumLines.length * 3.8 + 6;

    // Work Experience
    if (resumeData.experience && resumeData.experience.length > 0) {
        f(10, 'bold');
        c(239, 68, 68);
        doc.text('WORK EXPERIENCE', 82, my);
        my += 2;
        line(82, my, 190, my);
        my += 6;

        resumeData.experience.forEach(exp => {
            f(8, 'bold');
            c(20, 20, 20);
            doc.text(exp.role, 88, my);
            f(7);
            c(120, 120, 120);
            doc.text(exp.period, 190, my, { align: 'right' });
            my += 4;

            f(7, 'bold');
            c(239, 68, 68);
            doc.text(exp.company, 88, my);
            my += 3.5;

            f(7);
            c(70, 70, 70);
            const expLines = doc.splitTextToSize(exp.details, cW - 10);
            doc.text(expLines, 88, my);
            my += expLines.length * 3.5 + 4;
        });
        my += 2;
    }

    // Projects
    f(10, 'bold');
    c(239, 68, 68);
    doc.text('KEY PROJECTS', 82, my);
    my += 2;
    line(82, my, 190, my);
    my += 6;

    resumeData.projects.slice(0, 5).forEach((proj) => {
        // Red bullet
        doc.setFillColor(239, 68, 68);
        doc.circle(84, my - 1.5, 1.1, 'F');

        f(7.5, 'bold');
        c(20, 20, 20);
        doc.text(proj.name, 88, my);
        my += 3.5;

        // Tech stack
        f(6.5);
        c(239, 68, 68);
        doc.text(proj.tech, 88, my);
        my += 3.5;

        // Description
        f(7);
        c(80, 80, 80);
        const dLines = doc.splitTextToSize(proj.desc, cW - 10);
        doc.text(dLines, 88, my);
        my += dLines.length * 3.3 + 3.5;
    });
    my += 2;

    // Education
    f(10, 'bold');
    c(239, 68, 68);
    doc.text('EDUCATION & CERTIFICATIONS', 82, my);
    my += 2;
    line(82, my, 190, my);
    my += 6;

    resumeData.education.forEach(edu => {
        f(7.5, 'bold');
        c(20, 20, 20);
        doc.text(edu.degree, 88, my);
        f(6.5);
        c(120, 120, 120);
        doc.text(edu.period, 190, my, { align: 'right' });
        my += 3.5;
        f(7);
        c(70, 70, 70);
        doc.text(edu.school, 88, my);
        my += 4;
    });

    addFooter();

    doc.save('Ranveer_Singh_Bhatia_CV.pdf');

    function addFooter() {
        doc.setFillColor(239, 68, 68);
        doc.rect(0, H - 8, W, 8, 'F');
        f(6);
        c(255, 255, 255);
        doc.text(
            'Ranveer Singh Bhatia  •  singhbhatiaranveer@gmail.com  •  ' + resumeData.website,
            W / 2, H - 3, { align: 'center' }
        );
    }
}
