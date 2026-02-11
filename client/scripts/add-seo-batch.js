const fs = require('fs');
const path = require('path');

const base = path.join('d:', 'train cape career', 'Traincape_Website', 'client', 'src', 'pages', 'Comptia');

const pages = [
    { file: 'Specialist/ComptiaNetwork+.jsx', title: 'CompTIA Network+ Certification Training | Networking Fundamentals', desc: 'Get CompTIA Network+ certified. Master networking fundamentals, implementation, operations, and security. Exam N10-009.', route: 'comptia/specialist/network-plus', depth: '../../../' },
    { file: 'Specialist/ComptiaSecurity+.jsx', title: 'CompTIA Security+ Certification Training | Cybersecurity Fundamentals', desc: 'Get CompTIA Security+ certified. Master threats, vulnerabilities, security architecture, and operations. Exam SY0-701.', route: 'comptia/specialist/security-plus', depth: '../../../' },
    { file: 'Specialist/ComptiaSecureInfrastructure.jsx', title: 'CompTIA Secure Infrastructure Specialist | Stackable Certification', desc: 'Earn CompTIA Secure Infrastructure Specialist by completing A+, Network+, and Security+.', route: 'comptia/specialist/secure-infrastructure', depth: '../../../' },
    { file: 'Professional/ComptiaCYSA+.jsx', title: 'CompTIA CySA+ Certification Training | Cybersecurity Analyst', desc: 'Get CompTIA CySA+ certified. Master threat detection, vulnerability management, and incident response.', route: 'comptia/professional/cysa-plus', depth: '../../../' },
    { file: 'Professional/ComptiaPenTest.jsx', title: 'CompTIA PenTest+ Certification Training | Penetration Testing', desc: 'Get CompTIA PenTest+ certified. Master ethical hacking and vulnerability assessment.', route: 'comptia/professional/pentest-plus', depth: '../../../' },
    { file: 'Professional/ComptiaCloud+.jsx', title: 'CompTIA Cloud+ Certification Training | Cloud Infrastructure', desc: 'Get CompTIA Cloud+ certified. Master cloud computing, infrastructure, and security.', route: 'comptia/professional/cloud-plus', depth: '../../../' },
];

// Also PECB pages missing Helmet
const pecbBase = path.join('d:', 'train cape career', 'Traincape_Website', 'client', 'src', 'pages', 'PECB');
const pecbPages = [
    { file: 'Continuity_Resilience_Recovery/ContinuityResilienceRecovery.jsx', title: 'PECB Continuity, Resilience & Recovery Certifications', desc: 'Explore PECB certifications in business continuity (ISO 22301), crisis management, disaster recovery, and operational resilience.', route: 'pecb/continuity', depth: '../../../' },
    { file: 'Continuity_Resilience_Recovery/ISO_22301_Business_Continuity_Management_System.jsx', title: 'ISO 22301 Business Continuity Management System Training', desc: 'Get ISO 22301 certified. Master business continuity management system implementation and auditing.', route: 'pecb/continuity/iso-22301', depth: '../../../' },
    { file: 'Continuity_Resilience_Recovery/Crisis_Management.jsx', title: 'PECB Crisis Management Certification Training', desc: 'Get PECB Crisis Management certified. Master crisis management planning and response.', route: 'pecb/continuity/crisis-management', depth: '../../../' },
    { file: 'Continuity_Resilience_Recovery/Digital_Operational_Resilience_Act_(DORA).jsx', title: 'PECB DORA Certification Training | Digital Operational Resilience', desc: 'Get PECB DORA certified. Master the Digital Operational Resilience Act requirements.', route: 'pecb/continuity/dora', depth: '../../../' },
    { file: 'Continuity_Resilience_Recovery/Disaster_Recovery.jsx', title: 'PECB Disaster Recovery Certification Training', desc: 'Get PECB Disaster Recovery certified. Master disaster recovery planning and implementation.', route: 'pecb/continuity/disaster-recovery', depth: '../../../' },
    { file: 'Continuity_Resilience_Recovery/Operational_Resilience_Management.jsx', title: 'PECB Operational Resilience Management Training', desc: 'Get certified in Operational Resilience Management. Master organizational resilience strategies.', route: 'pecb/continuity/operational-resilience', depth: '../../../' },
    { file: 'CyberSecurity_Management/Cloud_Security.jsx', title: 'PECB Cloud Security Certification Training', desc: 'Get PECB Cloud Security certified. Master cloud security controls and best practices.', route: 'pecb/cybersecurity/cloud-security', depth: '../../../' },
    { file: 'CyberSecurity_Management/Computer_Forensics.jsx', title: 'PECB Computer Forensics Certification Training', desc: 'Get PECB Computer Forensics certified. Master digital forensics investigation techniques.', route: 'pecb/cybersecurity/computer-forensics', depth: '../../../' },
    { file: 'CyberSecurity_Management/Cybersecurity_Maturity_Model_Certification_(CMMC).jsx', title: 'PECB CMMC Certification Training | Cybersecurity Maturity Model', desc: 'Get PECB CMMC certified. Master the Cybersecurity Maturity Model Certification framework.', route: 'pecb/cybersecurity/cmmc', depth: '../../../' },
    { file: 'CyberSecurity_Management/Penetration_Testing_Professional.jsx', title: 'PECB Penetration Testing Professional Training', desc: 'Get certified as a PECB Penetration Testing Professional. Master penetration testing methodologies.', route: 'pecb/cybersecurity/penetration-testing', depth: '../../../' },
    { file: 'CyberSecurity_Management/SCADA_Security_Manager.jsx', title: 'PECB SCADA Security Manager Certification Training', desc: 'Get PECB SCADA Security Manager certified. Master industrial control system security.', route: 'pecb/cybersecurity/scada-security', depth: '../../../' },
    { file: 'Digital_Trasformation/Digital_Transformation.jsx', title: 'PECB Digital Transformation Certification Training', desc: 'Get PECB Digital Transformation certified. Master digital transformation strategies and implementation.', route: 'pecb/digital-transformation', depth: '../../../' },
];

function addSEO(basePath, items) {
    items.forEach(item => {
        const fp = path.join(basePath, item.file);
        if (!fs.existsSync(fp)) {
            console.log('NOT FOUND: ' + item.file);
            return;
        }
        let content = fs.readFileSync(fp, 'utf8');
        if (content.includes('SEOHead')) {
            console.log('SKIP (already has SEO): ' + item.file);
            return;
        }

        // Add import after last import line
        const lines = content.split('\n');
        let lastImportIdx = -1;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trimStart().startsWith('import ')) lastImportIdx = i;
        }

        if (lastImportIdx >= 0) {
            lines.splice(lastImportIdx + 1, 0, `import SEOHead from "${item.depth}components/SEOHead";`);
        }

        // Add SEOHead after the first opening div in return
        content = lines.join('\n');
        // Find return ( pattern then first <div
        const returnMatch = content.match(/return\s*\(\s*\n\s*(<[^>]+>)/);
        if (returnMatch) {
            const origDiv = returnMatch[1];
            content = content.replace(
                returnMatch[0],
                returnMatch[0] + `\n      <SEOHead\n        title="${item.title} - Traincape Technology"\n        description="${item.desc}"\n        canonical="https://www.traincapetech.in/${item.route}"\n      />`
            );
        }

        fs.writeFileSync(fp, content);
        console.log('DONE: ' + item.file);
    });
}

addSEO(base, pages);
addSEO(pecbBase, pecbPages);
console.log('\nAll pages processed!');
