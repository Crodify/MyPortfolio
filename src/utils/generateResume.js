import jsPDF from 'jspdf';
import resumeData from '../data/resume';

export async function generateResume() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageW = 210;
    const margin = 20;
    const contentW = pageW - margin * 2;
    let y = 20;

    function setColor(r, g, b) { doc.setTextColor(r, g, b); }
    function setFont(size, style) { doc.setFont('helvetica', style || 'normal'); doc.setFontSize(size); }

    // Header background
    doc.setFillColor(15, 15, 15);
    doc.rect(0, 0, pageW, 45, 'F');
    doc.setFillColor(239, 68, 68);
    doc.rect(0, 45, pageW, 2, 'F');

    setFont(24, 'bold');
    setColor(255, 255, 255);
    doc.text(resumeData.name, margin, 20);

    setFont(12);
    setColor(239, 68, 68);
    doc.text(resumeData.title, margin, 28);

    setFont(8);
    setColor(180, 180, 180);
    const contact = resumeData.email + '  |  ' + resumeData.linkedin + '  |  ' + resumeData.github;
    doc.text(contact, margin, 36);

    y = 55;

    // Summary
    setFont(10, 'bold');
    setColor(239, 68, 68);
    doc.text('PROFESSIONAL SUMMARY', margin, y);
    y += 2;
    doc.setDrawColor(239, 68, 68);
    doc.setLineWidth(0.5);
    doc.line(margin, y, margin + 50, y);
    y += 6;
    setFont(9);
    setColor(50, 50, 50);
    const summaryLines = doc.splitTextToSize(resumeData.summary, contentW);
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 4.5 + 6;

    // Skills
    setFont(10, 'bold');
    setColor(239, 68, 68);
    doc.text('TECHNICAL SKILLS', margin, y);
    y += 2;
    doc.line(margin, y, margin + 45, y);
    y += 6;
    Object.entries(resumeData.skills).forEach(([category, skills]) => {
        setFont(9, 'bold');
        setColor(30, 30, 30);
        doc.text(category + ':', margin, y);
        setFont(9);
        setColor(80, 80, 80);
        doc.text(skills.join(', '), margin + 25, y);
        y += 5;
    });
    y += 4;

    // Projects
    setFont(10, 'bold');
    setColor(239, 68, 68);
    doc.text('PROJECTS', margin, y);
    y += 2;
    doc.line(margin, y, margin + 30, y);
    y += 6;
    resumeData.projects.forEach((proj) => {
        if (y > 260) { doc.addPage(); y = 20; }
        setFont(9, 'bold');
        setColor(30, 30, 30);
        doc.text(proj.name, margin, y);
        setFont(8);
        setColor(239, 68, 68);
        doc.text(proj.tech, margin + 55, y);
        y += 4;
        setFont(8);
        setColor(80, 80, 80);
        const descLines = doc.splitTextToSize(proj.desc, contentW);
        doc.text(descLines, margin + 3, y);
        y += descLines.length * 3.5 + 3;
    });
    y += 4;

    // Education
    setFont(10, 'bold');
    setColor(239, 68, 68);
    doc.text('EDUCATION', margin, y);
    y += 2;
    doc.line(margin, y, margin + 32, y);
    y += 6;
    resumeData.education.forEach((edu) => {
        setFont(9, 'bold');
        setColor(30, 30, 30);
        doc.text(edu.degree, margin, y);
        setFont(8);
        setColor(120, 120, 120);
        doc.text(edu.period, pageW - margin, y, { align: 'right' });
        y += 4;
        setFont(9);
        setColor(80, 80, 80);
        doc.text(edu.school, margin, y);
        y += 4;
        setFont(8);
        const eduLines = doc.splitTextToSize(edu.details, contentW);
        doc.text(eduLines, margin, y);
        y += eduLines.length * 3.5 + 4;
    });

    // Footer
    doc.setFillColor(239, 68, 68);
    doc.rect(0, 285, pageW, 12, 'F');
    setFont(7);
    setColor(255, 255, 255);
    doc.text('Ranveer Singh Bhatia  |  ' + resumeData.website, pageW / 2, 292, { align: 'center' });

    doc.save('Ranveer_Singh_Bhatia_CV.pdf');
}
