/**
 * Script to add "Take Test" button to all CompTIA and PECB course detail pages.
 * Run: node scripts/add-take-test-button.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.join(__dirname, '..', 'src', 'pages');

// Course file mappings: filePath -> { course, subTopic }
const courseFiles = [
    // CompTIA Specialist
    { file: 'Comptia/Specialist/ComptiaA+.jsx', course: 'comptia', subTopic: 'CompTIAA+' },
    { file: 'Comptia/Specialist/ComptiaNetwork+.jsx', course: 'comptia', subTopic: 'CompTIANetwork+' },
    { file: 'Comptia/Specialist/ComptiaSecurity+.jsx', course: 'comptia', subTopic: 'CompTIASecurity+' },
    { file: 'Comptia/Specialist/ComptiaSecureInfrastructure.jsx', course: 'comptia', subTopic: 'CompTIASecureInfrastructure' },

    // CompTIA Professional
    { file: 'Comptia/Professional/ComptiaCYSA+.jsx', course: 'comptia', subTopic: 'CompTIACySA+' },
    { file: 'Comptia/Professional/ComptiaPenTest.jsx', course: 'comptia', subTopic: 'CompTIAPenTest+' },
    { file: 'Comptia/Professional/ComptiaCloud+.jsx', course: 'comptia', subTopic: 'CompTIACloud+' },
    { file: 'Comptia/Professional/ComptiaCNVP.jsx', course: 'comptia', subTopic: 'CompTIACNVP' },
    { file: 'Comptia/Professional/ComptiaNetworkSecurity.jsx', course: 'comptia', subTopic: 'CompTIANetworkSecurity' },
    { file: 'Comptia/Professional/ComptiaSecureCloud.jsx', course: 'comptia', subTopic: 'CompTIASecureCloud' },
    { file: 'Comptia/Professional/ComptiaSecurity+.jsx', course: 'comptia', subTopic: 'CompTIASecurityProfessional' },
    { file: 'Comptia/Professional/ComptiaSecurityAnalytics.jsx', course: 'comptia', subTopic: 'CompTIASecurityAnalytics' },

    // CompTIA Expert
    { file: 'Comptia/Expert/CASP+.jsx', course: 'comptia', subTopic: 'CompTIACASP+' },
    { file: 'Comptia/Expert/CSAE.jsx', course: 'comptia', subTopic: 'CompTIACSAE' },

    // PECB Information Security
    { file: 'PECB/Information_Security/ISO/IEC_27001_Information_Security_Management_System.jsx', course: 'PECB', subTopic: 'ISO27001InformationSecurity' },
    { file: 'PECB/Information_Security/ISO/IEC_27002_Information_Security_Controls.jsx', course: 'PECB', subTopic: 'ISO27002InformationSecurityControls' },
    { file: 'PECB/Information_Security/ISO/IEC_27005_Information _Security _Risk_Management.jsx', course: 'PECB', subTopic: 'ISO27005InformationSecurityRisk' },
    { file: 'PECB/Information_Security/ISO/IEC_27034_Application_Security.jsx', course: 'PECB', subTopic: 'ISO27034ApplicationSecurity' },
    { file: 'PECB/Information_Security/ISO/IEC_27035_Information_Security_Incident_Management.jsx', course: 'PECB', subTopic: 'ISO27035IncidentManagement' },
    { file: 'PECB/Information_Security/PECB_Chief_Information_Security_Officer.jsx', course: 'PECB', subTopic: 'PECBChiefInformationSecurityOfficer' },
    { file: 'PECB/Information_Security/EBIOS.jsx', course: 'PECB', subTopic: 'EBIOS' },

    // PECB Cybersecurity Management
    { file: 'PECB/CyberSecurity_Management/Penetration_Testing_Professional.jsx', course: 'PECB', subTopic: 'PenetrationTestingProfessional' },
    { file: 'PECB/CyberSecurity_Management/Cloud_Security.jsx', course: 'PECB', subTopic: 'CloudSecurity' },
    { file: 'PECB/CyberSecurity_Management/Computer_Forensics.jsx', course: 'PECB', subTopic: 'ComputerForensics' },
    { file: 'PECB/CyberSecurity_Management/Cybersecurity_Maturity_Model_Certification_(CMMC).jsx', course: 'PECB', subTopic: 'CMMC' },
    { file: 'PECB/CyberSecurity_Management/ISO/IEC_27033_Network_Security.jsx', course: 'PECB', subTopic: 'ISO27033NetworkSecurity' },
    { file: 'PECB/CyberSecurity_Management/SCADA_Security_Manager.jsx', course: 'PECB', subTopic: 'SCADASecurityManager' },

    // PECB Quality & Management
    { file: 'PECB/Quality&Management/ISO_9001_Quality_Management_System.jsx', course: 'PECB', subTopic: 'ISO9001QualityManagement' },
    { file: 'PECB/Quality&Management/ISO_55001_Asset_Management_System.jsx', course: 'PECB', subTopic: 'ISO55001AssetManagement' },
    { file: 'PECB/Quality&Management/ISO_13485_Medical_Devices_Quality_Management_System.jsx', course: 'PECB', subTopic: 'ISO13485MedicalDevices' },
    { file: 'PECB/Quality&Management/ISO_21001_Educational_Organizations_Management_System.jsx', course: 'PECB', subTopic: 'ISO21001EducationalOrganizations' },
    { file: 'PECB/Quality&Management/ISO_21502_Project_Management.jsx', course: 'PECB', subTopic: 'ISO21502ProjectManagement' },
    { file: 'PECB/Quality&Management/ISO_28000_Supply_Chain_Security_Management_System.jsx', course: 'PECB', subTopic: 'ISO28000SupplyChainSecurity' },
    { file: 'PECB/Quality&Management/Six_Sigma.jsx', course: 'PECB', subTopic: 'SixSigma' },
    { file: 'PECB/Quality&Management/ISO/IEC_17025_Laboratory_Management_System.jsx', course: 'PECB', subTopic: 'ISO17025LaboratoryManagement' },
    { file: 'PECB/Quality&Management/ISO/IEC_20000_IT_Service_Management_System.jsx', course: 'PECB', subTopic: 'ISO20000ITServiceManagement' },

    // PECB Governance Risk & Compliance
    { file: 'PECB/Governance_Risk&Compliance/ISO_31000_Risk_Management.jsx', course: 'PECB', subTopic: 'ISO31000RiskManagement' },
    { file: 'PECB/Governance_Risk&Compliance/ISO 37001_Anti-Bribery_Management_System.jsx', course: 'PECB', subTopic: 'ISO37001AntiBribery' },
    { file: 'PECB/Governance_Risk&Compliance/ISO_37000_Corporate_Governance.jsx', course: 'PECB', subTopic: 'ISO37000CorporateGovernance' },
    { file: 'PECB/Governance_Risk&Compliance/ISO_37301_Compliance_Management_System.jsx', course: 'PECB', subTopic: 'ISO37301ComplianceManagement' },
    { file: 'PECB/Governance_Risk&Compliance/ISO/IEC_38500_IT_Governance.jsx', course: 'PECB', subTopic: 'ISO38500ITGovernance' },
    { file: 'PECB/Governance_Risk&Compliance/Management_Systems_Internal_Auditor.jsx', course: 'PECB', subTopic: 'ManagementSystemsInternalAuditor' },
    { file: 'PECB/Governance_Risk&Compliance/Operational_Risk_Management_in_Financial_Institutions.jsx', course: 'PECB', subTopic: 'OperationalRiskManagement' },

    // PECB AI
    { file: 'PECB/Artificial_Intelligence/Artificial_Intelligence_Professional.jsx', course: 'PECB', subTopic: 'AIProfessional' },
    { file: 'PECB/Artificial_Intelligence/AI_Risk_Management.jsx', course: 'PECB', subTopic: 'AIRiskManagement' },
    { file: 'PECB/Artificial_Intelligence/ISO/IEC_42001_Artificial_Intelligence_Management_System.jsx', course: 'PECB', subTopic: 'ISO42001AIManagement' },

    // PECB Privacy & Data Protection
    { file: 'PECB/Privacy&Data_Protection/General_Data_Protection_Regulation_(GDPR).jsx', course: 'PECB', subTopic: 'GDPR' },
    { file: 'PECB/Privacy&Data_Protection/ISO/IEC_27701_Privacy_Information_Management_System.jsx', course: 'PECB', subTopic: 'ISO27701PrivacyInformationManagement' },

    // PECB Continuity Resilience Recovery
    { file: 'PECB/Continuity_Resilience_Recovery/ISO_22301_Business_Continuity_Management_System.jsx', course: 'PECB', subTopic: 'ISO22301BusinessContinuity' },
    { file: 'PECB/Continuity_Resilience_Recovery/Crisis_Management.jsx', course: 'PECB', subTopic: 'CrisisManagement' },
    { file: 'PECB/Continuity_Resilience_Recovery/Digital_Operational_Resilience_Act_(DORA).jsx', course: 'PECB', subTopic: 'DORA' },
    { file: 'PECB/Continuity_Resilience_Recovery/Disaster_Recovery.jsx', course: 'PECB', subTopic: 'DisasterRecovery' },
    { file: 'PECB/Continuity_Resilience_Recovery/Operational_Resilience_Management.jsx', course: 'PECB', subTopic: 'OperationalResilienceManagement' },

    // PECB Technical Cybersecurity
    { file: 'PECB/Technical_Cybersecurity/Ethical_Hacking.jsx', course: 'PECB', subTopic: 'EthicalHacking' },
    { file: 'PECB/Technical_Cybersecurity/Certified_Cyber_Threat_Analyst_(CCTA).jsx', course: 'PECB', subTopic: 'CertifiedCyberThreatAnalyst' },
    { file: 'PECB/Technical_Cybersecurity/Certified_Digital_Forensics_Examiner.jsx', course: 'PECB', subTopic: 'CertifiedDigitalForensicsExaminer' },
    { file: 'PECB/Technical_Cybersecurity/Incident_Response.jsx', course: 'PECB', subTopic: 'IncidentResponse' },

    // PECB Digital Transformation
    { file: 'PECB/Digital_Trasformation/Digital_Transformation.jsx', course: 'PECB', subTopic: 'DigitalTransformation' },
];

let successCount = 0;
let skipCount = 0;
let failCount = 0;

for (const { file, course, subTopic } of courseFiles) {
    const filePath = path.join(pagesDir, file);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️ SKIP (not found): ${file}`);
        skipCount++;
        continue;
    }

    let content = fs.readFileSync(filePath, 'utf-8');

    // Check if already has Take Test button
    if (content.includes('Take Test')) {
        console.log(`✓ SKIP (already has Take Test): ${file}`);
        skipCount++;
        continue;
    }

    let modified = false;

    // --- HERO SECTION ---
    // Pattern: after "Download Brochure" or "View All PECB Certs" or "View All CompTIA Certs" button  
    // Look for the closing </button> followed by </motion.div> in the hero
    // We insert the Take Test button before </motion.div>

    // Strategy: Find the first </motion.div> that closes a button group (flex flex-wrap gap-4)
    // Insert Take Test button before it

    const heroButtonGroupPattern = /(className="flex flex-wrap gap-4"[\s\S]*?)((\r?\n\s*)<\/motion\.div>)/;
    const heroMatch = content.match(heroButtonGroupPattern);

    if (heroMatch) {
        const newline = heroMatch[3]; // preserve indentation
        const takeTestHero = `${newline}  <button ${newline}    onClick={() => navigate("/test", { state: { course: "${course}", subTopic: "${subTopic}", level: "easy" } })}${newline}    className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"${newline}  >${newline}    Take Test${newline}  </button>`;

        content = content.replace(heroButtonGroupPattern, `$1${takeTestHero}$2`);
        modified = true;
    }

    // --- CTA SECTION (bottom) ---
    // Pattern: "Learn More" button followed by </div>
    // Insert Take Test before closing </div> of button container
    const ctaPattern = /(Learn More\s*\r?\n\s*<\/button>)((\s*\r?\n)(\s*)<\/div>)/;
    const ctaMatch = content.match(ctaPattern);

    if (ctaMatch) {
        const indent = ctaMatch[4]; // preserve indentation  
        const nl = ctaMatch[3];
        const takeTestCTA = `${nl}${indent}<button ${nl}${indent}  onClick={() => navigate("/test", { state: { course: "${course}", subTopic: "${subTopic}", level: "easy" } })}${nl}${indent}  className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition shadow-lg text-lg"${nl}${indent}>${nl}${indent}  Take Test${nl}${indent}</button>`;

        content = content.replace(ctaPattern, `$1${takeTestCTA}$2`);
        modified = true;
    }

    // Ensure useNavigate is imported if not already present
    if (modified && !content.includes('useNavigate')) {
        // Add useNavigate import
        if (content.includes('react-router-dom')) {
            content = content.replace(
                /import\s*{([^}]*)}\s*from\s*["']react-router-dom["']/,
                (match, imports) => {
                    return match.replace(imports, imports.trim() + ', useNavigate');
                }
            );
        } else {
            // Add new import after React import
            content = content.replace(
                /(import React.*?;\r?\n)/,
                `$1import { useNavigate } from "react-router-dom";\n`
            );
        }
    }

    // Ensure const navigate = useNavigate() exists if not already
    if (modified && !content.includes('const navigate') && !content.includes('navigate =')) {
        // Find component function and add navigate
        const compFuncPattern = /((?:const\s+\w+\s*=\s*\(\s*\)\s*=>|function\s+\w+\s*\(\s*\))\s*{(\r?\n))/;
        const compMatch = content.match(compFuncPattern);
        if (compMatch) {
            content = content.replace(compFuncPattern, `$1  const navigate = useNavigate();$2`);
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ UPDATED: ${file}`);
        successCount++;
    } else {
        console.log(`❌ FAIL (no pattern matched): ${file}`);
        failCount++;
    }
}

console.log(`\n--- Summary ---`);
console.log(`✅ Updated: ${successCount}`);
console.log(`⚠️ Skipped: ${skipCount}`);
console.log(`❌ Failed: ${failCount}`);
console.log(`Total: ${successCount + skipCount + failCount}`);
