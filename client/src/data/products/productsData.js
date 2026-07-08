// Import of product showcase assets
import crmLogo from "../../assets/products/crm/logo.png";
import crmHero from "../../assets/products/crm/hero.png";
import crmDashboard from "../../assets/products/crm/dashboard.png";

import hrmsLogo from "../../assets/products/hrms/logo.png";
import hrmsHero from "../../assets/products/hrms/hero.png";
import hrmsDashboard from "../../assets/products/hrms/dashboard.png";

import payrollLogo from "../../assets/products/payroll/logo.png";
import payrollHero from "../../assets/products/payroll/hero.png";
import payrollDashboard from "../../assets/products/payroll/dashboard.png";

export const productsData = [
  {
    id: "crm",
    slug: "crm",
    name: "Traincape CRM",
    tagline: "Enterprise-grade Client Relationship Management System",
    logo: crmLogo,
    heroImage: crmHero,
    dashboardPreview: crmDashboard,
    shortDescription: "Consolidate leads, automate sales cycles, track conversations, and analyze deal progress through a secure cloud interface.",
    description: "Traincape CRM is engineered for mid-market and enterprise teams seeking to automate pipeline tracking, secure communications, and generate reports without workflow clutter.",
    stats: [
      { label: "Deal Closure Speed", value: "+32%" },
      { label: "Workflow Efficiency", value: "+45%" },
      { label: "Lead Conversion Rate", value: "+18%" }
    ],
    modules: [
      {
        id: "lead-mgmt",
        name: "Intelligent Lead Management",
        overview: "Capture, verify, and score incoming sales leads automatically using customizable logic trees.",
        features: ["Auto-routing rules", "Interactive lead card views", "Timeline event histories"],
        benefits: "Prevents pipeline leaks and ensures immediate sales representative handoff.",
        workflow: "Lead Ingestion -> Scoring Matrix -> Automated Assignment -> Representative Notification"
      },
      {
        id: "sales-pipeline",
        name: "Dynamic Sales Pipeline",
        overview: "A clean board showing real-time deal values, conversion probabilities, and team tasks.",
        features: ["Drag-and-drop pipeline stages", "Custom currency configurations", "Historical conversion analysis"],
        benefits: "Gives sales directors complete forecasting visibility.",
        workflow: "Deal Created -> Proposal Sent -> Negotiation -> Closed Won/Lost"
      },
      {
        id: "communications",
        name: "Omnichannel Communications",
        overview: "Integrate email clients, telephony channels, and direct WhatsApp contact logs under a single dashboard panel.",
        features: ["Automated interaction logs", "Template builder tools", "Call record playbacks"],
        benefits: "Allows teams to trace full client communication timelines.",
        workflow: "Message Received -> Thread Categorization -> Representative Reply -> History Logged"
      }
    ],
    technologyStack: ["React 18", "Tailwind CSS", "Node.js", "Express API", "PostgreSQL", "Socket.io", "Redis Cache"],
    architecture: {
      frontend: "React SPA / Tailwind CSS / Framer Motion",
      backend: "Node.js cluster / Express / REST APIs",
      database: "PostgreSQL with connection pooling",
      hosting: "AWS Auto-scaling ECS instances"
    },
    security: {
      compliance: "ISO 27001 / SOC 2 Type II Audited",
      encryption: "AES-256 at rest, TLS 1.3 in transit",
      access: "SAML 2.0 Single Sign-On (SSO) / Role-based Access Control (RBAC)"
    },
    integrations: [
      { name: "Google Workspace", type: "Email & Calendar" },
      { name: "Microsoft Outlook", type: "Email & Calendar" },
      { name: "Stripe", type: "Billing & Transactions" },
      { name: "Slack", type: "Team Notifications" }
    ],
    benefits: [
      "No per-user licensing markup - Unlimited scale",
      "Full ownership of database schemas and data sovereignty",
      "Headless integration hooks with legacy systems"
    ],
    industries: ["Logistics & Trade", "EdTech & Education", "Manufacturing", "Finance & Real Estate"],
    faqs: [
      {
        q: "Can we migrate data from Salesforce or HubSpot?",
        a: "Yes. Traincape CRM provides built-in CSV/JSON data migration wizards that map legacy fields automatically."
      },
      {
        q: "Is it hosted on Traincape servers or our local cloud?",
        a: "We support both. We can deploy a dedicated instance to your private AWS/Azure cloud, ensuring full data control."
      },
      {
        q: "Does it support custom API integrations?",
        a: "Absolutely. The system exposes complete, secure REST API endpoints with API token key managers."
      }
    ],
    seo: {
      title: "Traincape CRM | Custom Enterprise CRM Software Showcase",
      description: "Explore the features, architecture, security standards, and modules of the Traincape CRM system designed for mid-market B2B scaling.",
      keywords: "custom CRM software, enterprise CRM, sales pipeline tool, headless CRM dashboard"
    }
  },
  {
    id: "hrms",
    slug: "hrms",
    name: "Traincape HRMS",
    tagline: "Centralized Human Resource Management Platform",
    logo: hrmsLogo,
    heroImage: hrmsHero,
    dashboardPreview: hrmsDashboard,
    shortDescription: "Manage employee profiles, team structures, documentation checklists, and leave policies through an accessible dashboard.",
    description: "Traincape HRMS streamlines core employee operations, from recruitment onboarding workflows to policy compliance validation.",
    stats: [
      { label: "Onboarding Cycle Time", value: "-40%" },
      { label: "Admin overhead reduction", value: "+30%" }
    ],
    modules: [
      {
        id: "emp-profiles",
        name: "Unified Employee Directory",
        overview: "A singular directory of active workers, contract terms, document vaults, and reporting lines.",
        features: ["Document verification keys", "Interactive org charts", "Role updates timeline"],
        benefits: "Centralizes employee documentation, ensuring compliance audits succeed.",
        workflow: "Candidate Hired -> Profile Generated -> Documents Uploaded -> Directory Active"
      }
    ],
    technologyStack: ["React 18", "Tailwind CSS", "Node.js", "Express API", "MongoDB Atlas"],
    architecture: {
      frontend: "React SPA / Tailwind CSS",
      backend: "Node.js / Express microservices",
      database: "MongoDB document store",
      hosting: "AWS ECS container networks"
    },
    security: {
      compliance: "SOC 2 Type II Alignment / GDPR Ready",
      encryption: "AES-256 rest, SSL transit",
      access: "OAuth 2.0 / Multifactor Auth (MFA) enforcement"
    },
    integrations: [
      { name: "Google Workspace", type: "Directory Sync" },
      { name: "Microsoft Active Directory", type: "SSO Auth" }
    ],
    benefits: [
      "Simplified onboarding flows",
      "Centralized policy guidelines distribution",
      "Role-restricted document folders"
    ],
    industries: ["Enterprise Services", "Retail", "Logistics", "IT Providers"],
    faqs: [
      {
        q: "Does it connect to payroll calculators?",
        a: "Yes. Traincape HRMS integrates with Traincape Payroll to sync attendance and contract parameters automatically."
      }
    ],
    seo: {
      title: "Traincape HRMS | Custom Human Resource Management Software",
      description: "Discover Traincape HRMS. Centralize employee profiles, documentation lists, and policy distributions under a secure, accessible dashboard.",
      keywords: "HRMS portal development, employee directory, custom HR software, document vault"
    }
  },
  {
    id: "payroll",
    slug: "payroll",
    name: "Traincape Payroll",
    tagline: "Automated Pay & Tax Compliance Ecosystem",
    logo: payrollLogo,
    heroImage: payrollHero,
    dashboardPreview: payrollDashboard,
    shortDescription: "Calculate taxes, track banking transfers, generate dynamic payslips, and coordinate payouts without errors.",
    description: "Traincape Payroll automates bulk calculations, salary disbursements, and compliance filings, reducing processing cycle times.",
    stats: [
      { label: "Processing Speed", value: "Instant" },
      { label: "Calculation Error Rate", value: "0.00%" }
    ],
    modules: [
      {
        id: "tax-calc",
        name: "Tax Computation Engine",
        overview: "Local tax and deduction calculation algorithms that sync with government regulatory tables.",
        features: ["Dynamic tax tables updates", "Reimbursements approval logic", "One-click bulk payroll run"],
        benefits: "Ensures compliance and eliminates human mathematical errors.",
        workflow: "Attendance Synced -> Calculations run -> Manager Review -> Payout Disbursed"
      }
    ],
    technologyStack: ["React 18", "Tailwind CSS", "Node.js", "Express API", "PostgreSQL"],
    architecture: {
      frontend: "React SPA / Tailwind CSS",
      backend: "Node.js / Express API cluster",
      database: "PostgreSQL transactional DB",
      hosting: "AWS Fargate Serverless Containers"
    },
    security: {
      compliance: "SOC 2 Type II / Financial Standards Compliant",
      encryption: "AES-256 rest, SSL transit, TLS 1.3 keys",
      access: "SAML 2.0 / Multi-party authorization gates"
    },
    integrations: [
      { name: "Stripe", type: "Bank Transfers API" },
      { name: "QuickBooks", type: "Accounting Ledger Sync" }
    ],
    benefits: [
      "Mathematical processing accuracy",
      "Instant PDF payslip generation",
      "Historical accounting reports search"
    ],
    industries: ["Logistics", "Manufacturing", "Retail", "Corporate Services"],
    faqs: [
      {
        q: "Does it support local tax rules for India or the UK?",
        a: "Yes. Traincape Payroll has localized calculation modules for both region's standard tax deductions."
      }
    ],
    seo: {
      title: "Traincape Payroll | Custom Payroll Automation Software",
      description: "Automate payouts, salary calculations, tax filings, and payslip generations. Explore the Traincape Payroll system specifications.",
      keywords: "payroll automation, tax calculator API, custom accounting software, salary transfer tracker"
    }
  }
];
