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
    doc.text('Frontend Developer', 14, sy);
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
        // wrap long text
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
        doc.text(cat, 14, sy);
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
    let my = 25;

    // Summary
    f(10, 'bold');
    c(239, 68, 68);
    doc.text('PROFESSIONAL SUMMARY', 82, my);
    my += 2;
    line(82, my, 190, my);
    my += 7;
    f(8);
    c(50, 50, 50);
    const sumLines = doc.splitTextToSize(resumeData.summary, cW - 10);
    doc.text(sumLines, 82, my);
    my += sumLines.length * 4 + 8;

    // Experience / Projects
    f(10, 'bold');
    c(239, 68, 68);
    doc.text('PROJECTS', 82, my);
    my += 2;
    line(82, my, 190, my);
    my += 7;

    resumeData.projects.forEach((proj, idx) => {
        checkPage(20);
        // Red bullet
        doc.setFillColor(239, 68, 68);
        doc.circle(84, my - 1.5, 1.2, 'F');

        f(8, 'bold');
        c(20, 20, 20);
        doc.text(proj.name, 88, my);
        my += 4;

        // Tech stack
        f(6.5);
        c(239, 68, 68);
        doc.text(proj.tech, 88, my);
        my += 4;

        // Description
        f(7.5);
        c(80, 80, 80);
        const dLines = doc.splitTextToSize(proj.desc, cW - 10);
        doc.text(dLines, 88, my);
        my += dLines.length * 3.5 + 4;
    });
    my += 4;

    // Education
    checkPage(25);
    f(10, 'bold');
    c(239, 68, 68);
    doc.text('EDUCATION', 82, my);
    my += 2;
    line(82, my, 190, my);
    my += 7;

    resumeData.education.forEach(edu => {
        f(8, 'bold');
        c(20, 20, 20);
        doc.text(edu.degree, 88, my);
        f(7);
        c(120, 120, 120);
        doc.text(edu.period, 190, my, { align: 'right' });
        my += 4;
        f(7.5);
        c(80, 80, 80);
        doc.text(edu.school, 88, my);
        my += 4;
        const eLines = doc.splitTextToSize(edu.details, cW - 10);
        doc.text(eLines, 88, my);
        my += eLines.length * 3.5 + 4;
    });

    // Certifications
    checkPage(20);
    my += 4;
    f(10, 'bold');
    c(239, 68, 68);
    doc.text('CERTIFICATIONS', 82, my);
    my += 2;
    line(82, my, 190, my);
    my += 7;
    f(7.5);
    c(50, 50, 50);
    doc.text('• Frontend Developer Career Path — Scrimba', 88, my); my += 5;
    doc.text('• HTML & CSS — Scrimba', 88, my); my += 5;
    doc.text('• JavaScript — Scrimba', 88, my);

    addFooter();

    doc.save('Ranveer_Singh_Bhatia_CV.pdf');

    function addFooter() {
        doc.setFillColor(239, 68, 68);
        doc.rect(0, H - 10, W, 10, 'F');
        f(6);
        c(255, 255, 255);
        doc.text(
            'Ranveer Singh Bhatia  •  singhbhatiaranveer@gmail.com  •  ' + resumeData.website,
            W / 2, H - 4, { align: 'center' }
        );
    }
}
