// PECB Course Brochures Mapping
// This file maps PECB course names to their PDF brochure files
// All PDF files are located in public/PECB-Brochure-PDF/

const pecbBrochures = {
  // Information Security
  "PECB Certified ISO 27001 Foundation": "/PECB-Brochure-PDF/Information Security/iso-iec-27001-foundation-en.pdf",
  "ISO/IEC 27001:2022 Foundation": "/PECB-Brochure-PDF/Information Security/iso-iec-27001-foundation-en.pdf",
  "PECB Certified ISO 27001 Lead Implementer": "/PECB-Brochure-PDF/Information Security/iso-iec-27001-lead-implementer-en.pdf",
  "PECB Certified ISO/IEC 27001 Lead Implementer": "/PECB-Brochure-PDF/Information Security/iso-iec-27001-lead-implementer-en.pdf",
  "PECB Certified ISO 27001 Lead Auditor": "/PECB-Brochure-PDF/Information Security/iso-iec-27001-lead-auditor-en.pdf",
  "PECB Certified ISO/IEC 27001 Lead Auditor": "/PECB-Brochure-PDF/Information Security/iso-iec-27001-lead-auditor-en.pdf",
  "PECB Certified ISO/IEC 27001 Transition": "/PECB-Brochure-PDF/Information Security/iso-iec-27001-2022-transition_4p.pdf",
  "PECB Certified ISO 27002 Foundation": "/PECB-Brochure-PDF/Information Security/iso-iec-27002-foundation_1p.pdf",
  "PECB Certified ISO/IEC 27002 Foundation": "/PECB-Brochure-PDF/Information Security/iso-iec-27002-foundation_1p.pdf",
  "PECB Certified ISO 27002 Manager": "/PECB-Brochure-PDF/Information Security/iso-iec-27002-manager_4p.pdf",
  "PECB Certified ISO/IEC 27002 Manager": "/PECB-Brochure-PDF/Information Security/iso-iec-27002-manager_4p.pdf",
  "PECB Certified ISO 27002 Lead Manager": "/PECB-Brochure-PDF/Information Security/iso-iec-27002-lead-manager_4p.pdf",
  "PECB Certified ISO/IEC 27002 Lead Manager": "/PECB-Brochure-PDF/Information Security/iso-iec-27002-lead-manager_4p.pdf",
  "PECB Certified ISO 27005 Foundation": "/PECB-Brochure-PDF/Information Security/iso-iec-27005-foundation_1p.pdf",
  "PECB Certified ISO 27005 Risk Manager": "/PECB-Brochure-PDF/Information Security/iso-iec-27005-risk-manager-en.pdf",
  "PECB Certified ISO 27005 Lead Risk Manager": "/PECB-Brochure-PDF/Information Security/iso-iec-27005-lead-risk-manager_4p.pdf",
  "PECB Certified ISO 27034 Foundation": "/PECB-Brochure-PDF/Information Security/iso-iec-27034-foundation_1p.pdf",
  "PECB Certified ISO 27034 Lead Application Security Implementer": "/PECB-Brochure-PDF/Information Security/iso-iec-27034-lead-application-security-implementer_4p.pdf",
  "PECB Certified ISO 27034 Lead Application Security Auditor": "/PECB-Brochure-PDF/Information Security/iso-iec-27034-lead-application-security-auditor_4p.pdf",
  "PECB Certified ISO 27035 Foundation": "/PECB-Brochure-PDF/Information Security/iso-iec-27035-foundation_1p.pdf",
  "PECB Certified ISO 27035 Incident Manager": "/PECB-Brochure-PDF/Information Security/iso-iec-27035-incident-manager_4p.pdf",
  "PECB Certified ISO 27035 Lead Incident Manager": "/PECB-Brochure-PDF/Information Security/iso-iec-27035-lead-incident-manager_4p.pdf",
  "PECB Certified Chief Information Security Officer": "/PECB-Brochure-PDF/Information Security/chief-information-security-officer-4p.pdf",
  "PECB Chief Information Security Officer": "/PECB-Brochure-PDF/Information Security/chief-information-security-officer-4p.pdf",
  "PECB Certified eBIOS Risk Manager": "/PECB-Brochure-PDF/Information Security/ebios-risk-manager_4p.pdf",
  "EBIOS": "/PECB-Brochure-PDF/Information Security/ebios-risk-manager_4p.pdf",

  // Cybersecurity Management
  "PECB Certified Cybersecurity Foundation": "/PECB-Brochure-PDF/Cybersecurity Management/cybersecurity-foundation_1p.pdf",
  "PECB Cybersecurity Foundation": "/PECB-Brochure-PDF/Cybersecurity Management/cybersecurity-foundation_1p.pdf",
  "PECB Certified Lead Cybersecurity Manager": "/PECB-Brochure-PDF/Cybersecurity Management/lead-cybersecurity-manager_4p.pdf",
  "PECB Certified Lead Cloud Security Manager": "/PECB-Brochure-PDF/Cybersecurity Management/lead-cloud-security-manager_4p.pdf",
  "Certified Lead Cloud Security Manager": "/PECB-Brochure-PDF/Cybersecurity Management/lead-cloud-security-manager_4p.pdf",
  "PECB Certified Pen Test Professional": "/PECB-Brochure-PDF/Cybersecurity Management/iso-pen-test-professional_4p.pdf",
  "PECB Certified Lead Pen Test Professional": "/PECB-Brochure-PDF/Cybersecurity Management/iso-pen-test-professional_4p.pdf",
  "PECB Certified Lead SCADA Security Manager": "/PECB-Brochure-PDF/Cybersecurity Management/iso-lead-scada-security-manager_4p.pdf",
  "Certified Lead SCADA Security Manager": "/PECB-Brochure-PDF/Cybersecurity Management/iso-lead-scada-security-manager_4p.pdf",
  "PECB Certified ISO 27033 Lead Network Security Manager": "/PECB-Brochure-PDF/Cybersecurity Management/iso-iec-27033-lead-network-security-manager_4p.pdf",
  "PECB Certified ISO/IEC 27033 Lead Network Security Manager": "/PECB-Brochure-PDF/Cybersecurity Management/iso-iec-27033-lead-network-security-manager_4p.pdf",
  "PECB Certified Computer Forensics Foundation": "/PECB-Brochure-PDF/Cybersecurity Management/computer-forensics-foundation_1p.pdf",
  "PECB Certified Lead Computer Forensics Examiner": "/PECB-Brochure-PDF/Cybersecurity Management/lead-computer-forensics-examiner_4p.pdf",
  "PECB Certified Lead Forensics Examiner": "/PECB-Brochure-PDF/Cybersecurity Management/lead-computer-forensics-examiner_4p.pdf",
  "PECB Certified NIST Cybersecurity Consultant": "/PECB-Brochure-PDF/Cybersecurity Management/nist-cybersecurity-consultant_4p.pdf",
  "PECB Certified NIST Cybersecurity Professional": "/PECB-Brochure-PDF/Cybersecurity Management/nist-cybersecurity-consultant_4p.pdf",
  "PECB Certified Lead SOC2 Analyst": "/PECB-Brochure-PDF/Cybersecurity Management/lead-soc2-analyst_4p.pdf",
  "PECB Certified NIS 2 Directive Foundation": "/PECB-Brochure-PDF/Cybersecurity Management/nis-2-directive-foundation_1p.pdf",
  "PECB Certified NIS 2 Directive Lead Implementer": "/PECB-Brochure-PDF/Cybersecurity Management/nis-2-directive-lead-imple_4p.pdf",
  "PECB Certified CMMC Foundation": "/PECB-Brochure-PDF/Cybersecurity Management/cmmc-foundation-1p.pdf",
  "PECB Certified CMMC AB Certified Professional": "/PECB-Brochure-PDF/Cybersecurity Management/cmmc-ab-certified-professional-4p.pdf",

  // Technical Cybersecurity
  "PECB Certified Lead Ethical Hacker": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/lead-ethical-hacker_4p.pdf",
  "PECB Certified CCTA": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/ccta_4p.pdf",
  "PECB Certified Cyber Threat Analyst": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/ccta_4p.pdf",
  "PECB Certified CIR": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/cir_4p.pdf",
  "Certified Incident Responder": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/cir_4p.pdf",

  // Quality and Management
  "PECB Certified ISO 9001 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-9001-foundation_1p.pdf",
  "ISO 9001 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-9001-foundation_1p.pdf",
  "PECB Certified ISO 9001 Lead Implementer": "/PECB-Brochure-PDF/Quality and Management/iso-9001-lead-implementer_4p.pdf",
  "PECB Certified ISO 9001 Lead Auditor": "/PECB-Brochure-PDF/Quality and Management/iso-9001-lead-auditor-en.pdf",
  "PECB Certified ISO 21502 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-21502-foundation_1p.pdf",
  "PECB ISO 21502 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-21502-foundation_1p.pdf",
  "PECB Certified ISO 21502 Lead Project Manager": "/PECB-Brochure-PDF/Quality and Management/iso-21502-lead-project-manager_4p.pdf",
  "PECB Certified ISO 13485 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-13485-foundation_1p.pdf",
  "PECB Certified ISO 13485 Lead Implementer": "/PECB-Brochure-PDF/Quality and Management/iso-13485-lead-implementer_4p.pdf",
  "PECB Certified ISO 13485 Lead Auditor": "/PECB-Brochure-PDF/Quality and Management/iso-13485-lead-auditor_4p.pdf",
  "PECB Certified ISO 17025 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-iec-17025-foundation_1p.pdf",
  "PECB Certified ISO 17025 Lead Implementer": "/PECB-Brochure-PDF/Quality and Management/iso-iec-17025-lead-implementer_4p.pdf",
  "PECB Certified ISO 17025 Lead Assessor": "/PECB-Brochure-PDF/Quality and Management/iso-iec-17025-lead-assessor_4p.pdf",
  "PECB Certified ISO 20000 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-iec-20000-foundation_1p.pdf",
  "PECB Certified ISO 20000 Lead Implementer": "/PECB-Brochure-PDF/Quality and Management/iso-iec-20000-lead-implementer_4p.pdf",
  "PECB Certified ISO 20000 Lead Auditor": "/PECB-Brochure-PDF/Quality and Management/iso-iec-20000-lead-auditor_4p.pdf",
  "PECB Certified Six Sigma Yellow Belt": "/PECB-Brochure-PDF/Quality and Management/six-sigma-yellow-belt_1p.pdf",
  "PECB Certified Six Sigma Green Belt": "/PECB-Brochure-PDF/Quality and Management/six-sigma-green-belt_4p.pdf",
  "PECB Certified ISO 21001 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-21001-foundation_1p.pdf",
  "PECB Certified ISO 21001 Lead Implementer": "/PECB-Brochure-PDF/Quality and Management/iso-21001-lead-implementer_4p.pdf",
  "PECB Certified ISO 21001 Lead Auditor": "/PECB-Brochure-PDF/Quality and Management/iso-21001-lead-auditor_4p.pdf",
  "PECB Certified ISO 55001 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-55001-foundation_1p.pdf",
  "PECB Certified ISO 55001 Lead Implementer": "/PECB-Brochure-PDF/Quality and Management/iso-55001-lead-implementer_4p.pdf",
  "PECB Certified ISO 55001 Lead Auditor": "/PECB-Brochure-PDF/Quality and Management/iso-55001-lead-auditor_4p.pdf",
  "PECB Certified ISO 55001 Transition": "/PECB-Brochure-PDF/Quality and Management/iso-55001-transition_4p.pdf",
  "PECB Certified ISO 28000 Foundation": "/PECB-Brochure-PDF/Quality and Management/iso-28000-foundation_1p.pdf",
  "PECB Certified ISO 28000 Lead Auditor": "/PECB-Brochure-PDF/Quality and Management/iso-28000-lead-auditor_4p.pdf",

  // Governance, Risk, and Compliance
  "PECB Certified ISO 31000 Foundation": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-31000-foundation_1p.pdf",
  "ISO 31000 Foundation": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-31000-foundation_1p.pdf",
  "PECB Certified ISO 31000 Risk Manager": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-31000-risk-manager-en.pdf",
  "PECB Certified ISO 31000 Lead Risk Manager": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-31000-lead-risk-manager_4p.pdf",
  "PECB Certified ISO 37001 Foundation": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37001-foundation_1p.pdf",
  "ISO 37001 Foundation": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37001-foundation_1p.pdf",
  "PECB Certified ISO 37001 Lead Implementer": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37001-lead-Implementer_4p.pdf",
  "PECB Certified ISO 37001 Lead Auditor": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37001-lead-auditor-en.pdf",
  "PECB Certified ISO 37001 Transition": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37001-transition_4p.pdf",
  "PECB Certified ISO 37301 Introduction": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37301-introduction_1p.pdf",
  "ISO 37301 Introduction": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37301-introduction_1p.pdf",
  "PECB Certified ISO 37301 Foundation": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37301-foundation_1p.pdf",
  "PECB Certified ISO 37301 Lead Implementer": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37301-lead-implementer_4p.pdf",
  "PECB Certified ISO 37301 Lead Auditor": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37301-lead-audtior_4p.pdf",
  "PECB Certified ISO 38500 Foundation": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-iec-38500-foundation_1p.pdf",
  "PECB Certified ISO 38500 IT Governance Manager": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-iec-38500-it-governance-manager_4p.pdf",
  "PECB Certified ISO 38500 Lead IT Governance Manager": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-iec-38500-lead-it-governance-manager_4p.pdf",
  "PECB Certified CMSIA": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/cmsia-4p.pdf",
  "PECB Certified ISO 37000 Corporate Governance Manager": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso_37000_corporate_governance_manager_4p.pdf",
  "PECB Certified ISO 37000 Lead Manager": "/PECB-Brochure-PDF/Governance, Risk, and Compliance/iso-37000-lead-manager.pdf",

  // Continuity, Resilience, and Recovery
  "PECB Certified ISO 22301 Foundation": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/iso-22301-foundation_1p.pdf",
  "ISO 22301 Foundation": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/iso-22301-foundation_1p.pdf",
  "PECB Certified ISO 22301 Lead Implementer": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/iso-22301-lead-implementer-en.pdf",
  "PECB Certified ISO 22301 Lead Auditor": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/iso-22301-lead-auditor_4p.pdf",
  "PECB Certified Lead Crisis Manager": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/lead-crisis-manager_4p.pdf",
  "PECB Certified Lead Operational Resilience Manager": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/lead-operational-resilience-manager-4p.pdf",
  "PECB Certified Disaster Recovery Lead Manager": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/disaster-recovery-lead-manager_4p.pdf",
  "Lead Disaster Recovery Manager": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/disaster-recovery-lead-manager_4p.pdf",
  "PECB Certified DORA Foundation": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/dora-foundation_1p.pdf",
  "PECB Certified DORA Lead Manager": "/PECB-Brochure-PDF/Continuity, Resilience, and Recovery/dora-lead-manager_4p.pdf",

  // Health and Safety
  "PECB Certified ISO 45001 Foundation": "/PECB-Brochure-PDF/Health and Safety/iso-45001-foundation_1p.pdf",
  "PECB Certified ISO 45001 Lead Implementer": "/PECB-Brochure-PDF/Health and Safety/iso-45001-lead-implementer_4p.pdf",
  "PECB Certified ISO 45001 Lead Auditor": "/PECB-Brochure-PDF/Health and Safety/iso-45001-lead-auditor_4p.pdf",
  "PECB Certified ISO 22000 Foundation": "/PECB-Brochure-PDF/Health and Safety/iso-22000-foundation_1p.pdf",
  "PECB Certified ISO 22000 Lead Implementer": "/PECB-Brochure-PDF/Health and Safety/iso-22000-lead-implementer_4p.pdf",
  "PECB Certified ISO 22000 Lead Auditor": "/PECB-Brochure-PDF/Health and Safety/iso-22000-lead-auditor_4p.pdf",
  "PECB Certified ISO 18788 Foundation": "/PECB-Brochure-PDF/Health and Safety/iso-18788-foundation_1p.pdf",
  "PECB Certified ISO 18788 Lead Implementer": "/PECB-Brochure-PDF/Health and Safety/iso-18788-lead-implementer_4p.pdf",
  "PECB Certified ISO 18788 Lead Auditor": "/PECB-Brochure-PDF/Health and Safety/iso-18788-lead-auditor_4p.pdf",

  // Privacy and Data Protection
  "PECB Certified ISO 27701 Foundation": "/PECB-Brochure-PDF/Privacy and Data Protection/iso-iec-27701-foundation_1p.pdf",
  "ISO/IEC 27701 Foundation": "/PECB-Brochure-PDF/Privacy and Data Protection/iso-iec-27701-foundation_1p.pdf",
  "PECB Certified ISO 27701 Lead Implementer": "/PECB-Brochure-PDF/Privacy and Data Protection/iso-iec-27701-lead-implementer_4p.pdf",
  "PECB Certified ISO 27701 Lead Auditor": "/PECB-Brochure-PDF/Privacy and Data Protection/iso-iec-27701-lead-auditor_4p.pdf",
  "PECB Certified GDPR Foundation": "/PECB-Brochure-PDF/Privacy and Data Protection/gdpr-foundation_1p.pdf",
  "PECB Certified Data Protection Officer": "/PECB-Brochure-PDF/Privacy and Data Protection/data-protection-officer-en.pdf",
  "PECB Certified GDPR – Certified Data Protection Officer": "/PECB-Brochure-PDF/Privacy and Data Protection/data-protection-officer-en.pdf",

  // Artificial Intelligence
  "PECB Certified AI Risk Manager": "/PECB-Brochure-PDF/Artificial Intelligence/ai-risk-manager_4p.pdf",
  "PECB Certified ISO 42001 Foundation": "/PECB-Brochure-PDF/Artificial Intelligence/iso-iec-42001-foundation_1p.pdf",
  "ISO/IEC 42001 Foundation": "/PECB-Brochure-PDF/Artificial Intelligence/iso-iec-42001-foundation_1p.pdf",
  "PECB Certified ISO 42001 Lead Implementer": "/PECB-Brochure-PDF/Artificial Intelligence/iso-iec-42001-lead implementer-4p.pdf",
  "PECB Certified ISO 42001 Lead Auditor": "/PECB-Brochure-PDF/Artificial Intelligence/iso-iec-42001-lead-auditor-4p.pdf",
  "PECB Certified Artificial Intelligence Professional (CAIP)": "/PECB-Brochure-PDF/Artificial Intelligence/caip-4p.pdf",

  // Sustainability
  "PECB Certified ISO 50001 Foundation": "/PECB-Brochure-PDF/Sustainability/iso-50001-foundation_1p.pdf",
  "PECB Certified ISO 50001 Lead Implementer": "/PECB-Brochure-PDF/Sustainability/iso-50001-lead-implementer_4p.pdf",
  "PECB Certified ISO 50001 Lead Auditor": "/PECB-Brochure-PDF/Sustainability/iso-50001-lead-auditor_4p.pdf",
  "PECB Certified ISO 14001 Foundation": "/PECB-Brochure-PDF/Sustainability/iso-14001-foundation_1p.pdf",
  "PECB Certified ISO 14001 Lead Implementer": "/PECB-Brochure-PDF/Sustainability/iso-14001-lead-implementer_4p.pdf",
  "PECB Certified ISO 14001 Lead Auditor": "/PECB-Brochure-PDF/Sustainability/iso-14001-lead-auditor_4p.pdf",
  "PECB Certified ISO 37101 Foundation": "/PECB-Brochure-PDF/Sustainability/iso-37101-foundation_1p.pdf",
  "PECB Certified ISO 37101 Lead Implementer": "/PECB-Brochure-PDF/Sustainability/iso-37101-lead-Implementer_4p.pdf",
  "PECB Certified ISO 37101 Lead Auditor": "/PECB-Brochure-PDF/Sustainability/iso-37101-lead-auditor_4p.pdf",
  "PECB Certified ISO 26000 Foundation": "/PECB-Brochure-PDF/Sustainability/iso-26000-foundation_1p.pdf",
  "PECB Certified ISO 26000 Lead Manager": "/PECB-Brochure-PDF/Sustainability/iso-26000-lead-manager_4p.pdf",
  "PECB Certified ISO 20400 Lead Manager": "/PECB-Brochure-PDF/Sustainability/iso-20400-lead-manager-4p.pdf",

  // Special courses that might be referenced in your existing files
  "PECB Certified Go4WhatsApp": "/PECB-Brochure-PDF/Information Security/iso-iec-27001-foundation-en.pdf", // Fallback to general security
  "PECB Certified Security": "/PECB-Brochure-PDF/Information Security/iso-iec-27001-foundation-en.pdf", // Fallback to general security
  "PECB Certified Computer Forensics": "/PECB-Brochure-PDF/Cybersecurity Management/computer-forensics-foundation_1p.pdf",
  "PECB Certified Cybersecurity Audit": "/PECB-Brochure-PDF/Cybersecurity Management/cybersecurity-foundation_1p.pdf",
  "PECB Certified SCADA Security Manager": "/PECB-Brochure-PDF/Cybersecurity Management/iso-lead-scada-security-manager_4p.pdf",
};

// Function to get brochure path for a course
export const getPecbBrochurePath = (courseName) => {
  return pecbBrochures[courseName] || null;
};

// Function to check if brochure exists for a course
export const hasPecbBrochure = (courseName) => {
  return pecbBrochures[courseName] !== undefined;
};

// Function to get all available brochures
export const getAllPecbBrochures = () => {
  return Object.keys(pecbBrochures);
};

export default pecbBrochures;
