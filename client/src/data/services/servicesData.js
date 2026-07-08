// Dynamic assets imports for initial 8 services
import customSoftwareIcon from "../../assets/services/custom-software-development/icon.png";
import customSoftwareHero from "../../assets/services/custom-software-development/hero.png";

import crmIcon from "../../assets/services/crm-development/icon.png";
import crmHero from "../../assets/services/crm-development/hero.png";

import webIcon from "../../assets/services/web-development/icon.png";
import webHero from "../../assets/services/web-development/hero.png";

import mobileIcon from "../../assets/services/mobile-app-development/icon.png";
import mobileHero from "../../assets/services/mobile-app-development/hero.png";

import uiuxIcon from "../../assets/services/ui-ux-design/icon.png";
import uiuxHero from "../../assets/services/ui-ux-design/hero.png";

import cloudIcon from "../../assets/services/cloud-services/icon.png";
import cloudHero from "../../assets/services/cloud-services/hero.png";

import aiIcon from "../../assets/services/ai-solutions/icon.png";
import aiHero from "../../assets/services/ai-solutions/hero.png";

import maintenanceIcon from "../../assets/services/maintenance-support/icon.png";
import maintenanceHero from "../../assets/services/maintenance-support/hero.png";

export const servicesData = [
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    title: "Bespoke Custom Software Development",
    shortDescription: "Design, engineer, and deploy high-performance custom application suites mapped precisely to your business operations.",
    longDescription: "We build secure, multi-tier software foundations matching your organization's exact parameters. Our engineering is built around data sovereignty and zero licensing markups.",
    icon: customSoftwareIcon,
    heroImage: customSoftwareHero,
    businessProblems: [
      "Rigid SaaS applications that fail to capture specific business logic.",
      "High annual subscription costs for features you never use.",
      "Fragmented software systems that do not sync data natively."
    ],
    solutions: [
      "Modular backend API clusters built with Express and PostgreSQL.",
      "Blistering fast single-page interfaces running on React 18.",
      "Comprehensive, customizable administrative dashboard panels."
    ],
    benefits: [
      "100% code ownership and host sovereignty.",
      "Unlimited scaling without user registration licensing penalties.",
      "Streamlined data synchronization across enterprise branches."
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS"],
    industries: ["Logistics & Supply Chain", "Manufacturing", "Finance", "Healthcare Systems"],
    portfolioReferences: ["crm", "verda-exports"],
    caseStudyReferences: ["crm", "verda"],
    faqs: [
      {
        q: "Who owns the software source code?",
        a: "Your organization owns 100% of the code and intellectual property. We hand over the complete Git repository upon deployment."
      },
      {
        q: "How do you ensure system scalability?",
        a: "We design connection pools, stateless API architectures, and containerized microservices that scale horizontally."
      }
    ],
    seo: {
      title: "Bespoke Custom Software Development Services | Traincape",
      description: "Get secure, high-performance custom enterprise software systems engineered on React and Node.js without license markup constraints.",
      keywords: "custom software development, enterprise database build, Node.js API, React frontend team"
    }
  },
  {
    id: "crm-development",
    slug: "crm-development",
    title: "Custom CRM & HRMS Engineering",
    shortDescription: "Automate sales pipelines, lead captures, communication threads, and HR administration via a unified corporate dashboard.",
    longDescription: "Consolidate customer data, automate lead assignments, log chat details, and manage employee directories through a secure panel.",
    icon: crmIcon,
    heroImage: crmHero,
    businessProblems: [
      "Lead status updates getting lost in fragmented sales spreadsheets.",
      "Sales representatives leaving, causing communication timeline gaps.",
      "Licensing costs escalating as team membership expands."
    ],
    solutions: [
      "Centralized sales CRM board with drag-and-drop deal pipelines.",
      "Synced email threads, call recordings, and WhatsApp chat history logs.",
      "SSO-secured employee directory databases."
    ],
    benefits: [
      "Faster deal closures and lead handoff cycles.",
      "Consolidated B2B communications in one single pane of glass.",
      "Zero scaling constraints - add unlimited customer records."
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Recharts"],
    industries: ["Corporate Services", "Real Estate Portals", "Trading & Logistics"],
    portfolioReferences: ["crm"],
    caseStudyReferences: ["crm"],
    faqs: [
      {
        q: "Can we integrate this with WhatsApp Business API?",
        a: "Yes. We configure webhooks to log incoming customer messages directly into customer logs."
      }
    ],
    seo: {
      title: "Custom CRM & HRMS Software Development | Traincape",
      description: "Automate deal pipelines and manage client interaction logs. Deploy a secure, custom CRM platform built for your sales methodology.",
      keywords: "custom CRM software, B2B lead capture tool, HRMS portal engineering"
    }
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "High-Performance Web Development",
    shortDescription: "Launch pre-rendered, crawlable corporate portals and luxury headless storefronts designed for sub-second speeds.",
    longDescription: "We build SEO-ready web applications using code-splitting, custom image loaders, pre-rendering engines, and HSL style variables.",
    icon: webIcon,
    heroImage: webHero,
    businessProblems: [
      "Slow loading pages causing catalog shopper drop-offs.",
      "Dynamically rendered elements missed by search engine bots.",
      "Lack of responsive brand consistency on mobile browsers."
    ],
    solutions: [
      "Preloaded asset architectures pre-rendered via react-snap.",
      "Stripe payment gateway and headless checkout integrations.",
      "Structured schema templates for optimized search visibility."
    ],
    benefits: [
      "Sub-second Largest Contentful Paint (LCP < 1.2s).",
      "100% crawlable index paths for all cert and detail routes.",
      "Fully responsive and WCAG AA contrast compliant screens."
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "Stripe API", "Helmet Async"],
    industries: ["Luxury Retail", "EdTech Providers", "Professional Services"],
    portfolioReferences: ["nk-luxe", "traincape", "bold-india-group"],
    caseStudyReferences: ["nk-luxe", "traincape"],
    faqs: [
      {
        q: "What is pre-rendering and why is it useful?",
        a: "Pre-rendering crawls client paths at build time, generating static HTML files. Search engines index these static files instantly."
      }
    ],
    seo: {
      title: "Enterprise Headless Storefronts & Web Development | Traincape",
      description: "Design stunning, sub-second corporate storefronts and luxury headless shops. Fully crawlable and optimized for organic ranks.",
      keywords: "web development services, React storefront build, SEO optimized web page, headless shop development"
    }
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "React Native Mobile App Development",
    shortDescription: "Deploy responsive cross-platform iOS and Android applications with low-latency syncing and optimized battery footprints.",
    longDescription: "We code mobile applications using React Native. Our apps run on highly optimized geolocation threads and real-time backend links.",
    icon: mobileIcon,
    heroImage: mobileHero,
    businessProblems: [
      "High battery drain caused by poorly structured background location loops.",
      "High latency on messaging chats, failing to sustain user interaction.",
      "High cost of maintaining separate iOS and Android code repositories."
    ],
    solutions: [
      "Single-source React Native builds that run natively on both OS platforms.",
      "Firestore database backplanes achieving real-time instant chat sync.",
      "Low-consumption background geolocation scan libraries."
    ],
    benefits: [
      "Halved development costs via unified source compilation.",
      "Blistering fast location matches and user connection maps.",
      "Smooth 60 FPS transitions and touch layouts."
    ],
    technologies: ["React Native", "Firebase Firestore", "AWS S3", "Node.js", "Tailwind CSS"],
    industries: ["Startups", "On-Demand Delivery", "Logistics Operations"],
    portfolioReferences: ["bold-india-group"],
    caseStudyReferences: ["dating-app"],
    faqs: [
      {
        q: "Do you assist with App Store and Google Play deployments?",
        a: "Yes. We coordinate the full deployment lifecycle, including preparing build logs, asset sizes, and privacy policy pages."
      }
    ],
    seo: {
      title: "React Native Mobile Application Development | Traincape",
      description: "Build premium, cross-platform mobile apps for iOS and Android with Firebase real-time messaging and battery-optimized geolocation.",
      keywords: "React Native app development, cross platform mobile engineer, Firebase Firestore chat app"
    }
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "Premium UI/UX Design System Architectures",
    shortDescription: "Formulate cohesive design languages, glassmorphic layout tokens, and robust B2B corporate interface systems.",
    longDescription: "We engineer UX design languages and HSL style guides. Our designs wow users immediately and maintain accessibility compliance.",
    icon: uiuxIcon,
    heroImage: uiuxHero,
    businessProblems: [
      "Disjointed styling variables causing visual brand confusion.",
      "Cluttered dashboard interfaces that increase user cognitive load.",
      "Lack of compliance with standard accessibility rules (WCAG)."
    ],
    solutions: [
      "Centralized design token systems mapping custom typography and HSL colors.",
      "Minimalist, typography-driven information hierarchies.",
      "Complete visual wireframing and prototyping."
    ],
    benefits: [
      "Polished, premium corporate branding.",
      "Reduced user onboarding friction and workflow overhead.",
      "Inherent compliance with accessibility guidelines."
    ],
    technologies: ["Framer Motion", "Tailwind CSS", "Figma Design System", "Google Fonts Outfit"],
    industries: ["Enterprise Software", "EdTech Systems", "FinTech Stores"],
    portfolioReferences: ["nk-luxe", "traincape"],
    caseStudyReferences: ["nk-luxe", "traincape"],
    faqs: [
      {
        q: "What guidelines do you follow for accessibility?",
        a: "We adhere strictly to Web Content Accessibility Guidelines (WCAG) AA standards, focusing on keyboard navigation and contrast ratios."
      }
    ],
    seo: {
      title: "Premium B2B UI/UX Design & System Architecture | Traincape",
      description: "Architect cohesive enterprise design systems, sleek dark layouts, and intuitive interface hierarchies with Traincape.",
      keywords: "UI UX design service, enterprise design tokens, HSL layout wireframing, figma design system"
    }
  },
  {
    id: "cloud-services",
    slug: "cloud-services",
    title: "Scalable Cloud Engineering & DevOps",
    shortDescription: "Deploy stateless API networks, auto-scaling databases, and serverless containers in secure VPC networks.",
    longDescription: "We build stateless backend infrastructures on AWS and GCP. Our cloud setups feature auto-scaling policies and automated CI/CD deployments.",
    icon: cloudIcon,
    heroImage: cloudHero,
    businessProblems: [
      "Server crashes during traffic spikes, causing expensive company downtime.",
      "Slow database responses under simultaneous query loads.",
      "Lack of automatic deployment pipelines causing release delays."
    ],
    solutions: [
      "Serverless container deployment using AWS Fargate and ECS.",
      "PostgreSQL database clustering and connection pooling.",
      "Secure Virtual Private Clouds (VPC) with restricted network access."
    ],
    benefits: [
      "Zero system downtime during database read spikes.",
      "Automated Git-triggered CI/CD testing and build paths.",
      "Highly secure system boundaries preventing credential leaks."
    ],
    technologies: ["AWS Fargate", "Docker Containers", "PostgreSQL", "GitHub Actions", "Nginx", "Redis"],
    industries: ["Financial Tech", "Large scale Logistics", "E-commerce Shops"],
    portfolioReferences: ["crm", "verda-exports"],
    caseStudyReferences: ["crm", "verda"],
    faqs: [
      {
        q: "Do you support serverless cloud infrastructure?",
        a: "Yes. We configure AWS Fargate or Google Cloud Run for container deployment, eliminating server maintenance tasks."
      }
    ],
    seo: {
      title: "AWS Cloud Engineering & DevOps Architecture | Traincape",
      description: "Deploy stateless, auto-scaling cloud databases and secure microservice clusters. Set up robust Git-triggered CI/CD pipelines.",
      keywords: "cloud engineering service, AWS fargate deploy, PostgreSQL database tuning, devops automation"
    }
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "Custom AI Integration & Data Intelligence",
    shortDescription: "Integrate large language models (LLMs) and predictive analytics to automate tasks and surface insights.",
    longDescription: "We build custom AI layers that process document archives, run predictive scoring systems, and automate customer support logs securely.",
    icon: aiIcon,
    heroImage: aiHero,
    businessProblems: [
      "Manually sorting massive document archives, wasting hours of work.",
      "Static customer databases that fail to predict client churn patterns.",
      "High support desk ticket volumes slowing client response times."
    ],
    solutions: [
      "Retrieval-Augmented Generation (RAG) engines parsing internal file vaults.",
      "Predictive machine learning algorithms analyzing transaction histories.",
      "Secure LLM API pipeline integrations."
    ],
    benefits: [
      "Immediate document lookups and automated classification.",
      "Proactive sales notifications identifying high-value customers.",
      "Decreased ticket queues via smart chatbot responses."
    ],
    technologies: ["Python", "Node.js", "LangChain Framework", "OpenAI API", "Pinecone Vector DB"],
    industries: ["Legal & Corporate", "EdTech Solutions", "Retail Sales"],
    portfolioReferences: ["crm"],
    caseStudyReferences: ["crm"],
    faqs: [
      {
        q: "Is our internal company data safe when using LLM models?",
        a: "Yes. We use enterprise API agreements and vector databases to ensure that your proprietary files are never used for model training."
      }
    ],
    seo: {
      title: "Custom AI & Machine Learning Integration Services | Traincape",
      description: "Integrate LLM API engines, predictive databases, and automated document RAG search layers to maximize data efficiency.",
      keywords: "AI solutions development, large language model integration, custom RAG database, vector search AI"
    }
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Enterprise Maintenance & Support SLA",
    shortDescription: "Secure consistent software performance, coordinate dependency updates, and audit crawls post-release.",
    longDescription: "We offer Service Level Agreement (SLA) software maintenance, providing regular security patches, library updates, and crawl audits.",
    icon: maintenanceIcon,
    heroImage: maintenanceHero,
    businessProblems: [
      "Outdated software libraries exposing databases to security vulnerabilities.",
      "Unnoticed sitemap crawl failures lowering organic Google ranks.",
      "Server resource memory leaks slowing system dashboards."
    ],
    solutions: [
      "Scheduled monthly database health audits and library patch runs.",
      "Automated sitemap monitoring and pre-rendering crawlers checks.",
      "Dedicated developer support hours with rapid response times."
    ],
    benefits: [
      "Consistently fast system performance with zero codebase lag.",
      "Secure databases aligned with current SOC 2 guidelines.",
      "Immediate resolution of production dashboard issues."
    ],
    technologies: ["React 18", "Node.js", "Docker", "Sitemap Auditing Tools", "GitHub Actions"],
    industries: ["All Enterprise Sectors", "Headless E-commerce", "Corporate Portals"],
    portfolioReferences: ["traincape", "bold-india-group"],
    caseStudyReferences: ["traincape"],
    faqs: [
      {
        q: "What response times do you guarantee under your support SLAs?",
        a: "Our standard SLAs guarantee support response times of under 4 hours for critical system issues."
      }
    ],
    seo: {
      title: "Enterprise Software Maintenance & Support SLAs | Traincape",
      description: "Ensure software security, library patches, and sitemap crawling success with Traincape scheduled SLA maintenance packages.",
      keywords: "software support SLA, web application maintenance, security patching service, sitemap crawl audit"
    }
  }
];
