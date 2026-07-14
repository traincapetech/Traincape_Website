// Asset imports
import nkLuxeDesktop from "../../assets/caseStudies/nk-luxe/desktop.png";
import nkLuxeMobile from "../../assets/caseStudies/nk-luxe/mobile.png";
import nkLuxeLogo from "../../assets/caseStudies/nk-luxe/logo.jpg";

import crmDashboard from "../../assets/caseStudies/crm/dashboard.png";
import crmLeads from "../../assets/caseStudies/crm/leads.png";
import crmLogo from "../../assets/caseStudies/crm/logo.png";

import verdaDesktop from "../../assets/caseStudies/verda/desktop.png";
import verdaMobile from "../../assets/caseStudies/verda/mobile.png";
import verdaLogo from "../../assets/caseStudies/verda/logo.png";

import datingAppLogin from "../../assets/caseStudies/dating-app/dashboard.png";
import datingAppDashboard from "../../assets/caseStudies/dating-app/mobile.jpeg";
import datingAppLogo from "../../assets/caseStudies/dating-app/logo.png";

import traincapeDesktop from "../../assets/caseStudies/traincape/desktop.png";
import traincapeMobile from "../../assets/caseStudies/traincape/mobile.png";
import traincapeLogo from "../../assets/caseStudies/traincape/logo.png";

export const caseStudiesData = [
  {
    id: "nk-luxe",
    slug: "nk-luxe",
    title: "Flagship Luxury E-commerce Storefront",
    client: "NK Luxe Retail Ltd",
    industry: "Retail & E-commerce",
    country: "United Kingdom",
    overview: "We designed and engineered a custom, high-speed luxury storefront for NK Luxe. The platform is built using React 18, optimizing image loaders and styling utilities to achieve premium glassmorphic layouts.",
    businessProblem: "NK Luxe's legacy platform suffered from slow load times (> 4.5s LCP), cart friction, and lack of visual brand consistency, failing to convert high-value luxury shoppers.",
    challenges: [
      "Optimizing massive, high-definition catalog images for mobile screens",
      "Securing complex international payment tokens without losing page speed",
      "Delivering smooth 60 FPS transitions on device browsers"
    ],
    research: "Conducted usability tests showing luxury consumers abandon carts if page response takes > 2 seconds. Evaluated server-side caching schemas to boost catalog speeds.",
    solution: "Engineered a headless storefront with custom image loaders, pre-rendering targets, Stripe tokenization, and HSL style variables to deliver sub-second loading states.",
    architecture: {
      frontend: "React 18 / CRACO / Tailwind CSS",
      backend: "Node.js / Express Microservices",
      database: "MongoDB Atlas Cluster",
      deployment: "AWS CloudFront CDN"
    },
    technologyStack: ["React", "Tailwind CSS", "Framer Motion", "Stripe API", "Node.js", "MongoDB"],
    features: [
      "Immersive luxury catalogue filters",
      "Stripe Elements secure multi-currency payment checkout",
      "Instant page transitions and preloaded hero images",
      "Dynamic stock levels admin console"
    ],
    timeline: "2 Months",
    team: [
      { name: "Saurav K.", role: "Lead Developer" },
      { name: "Akansha S.", role: "Product Designer" }
    ],
    gallery: {
      desktop: nkLuxeDesktop,
      mobile: nkLuxeMobile
    },
    logo: nkLuxeLogo,
    results: [
      "Sub-second Largest Contentful Paint (LCP < 1.2s)",
      "Zero downtime deployment structure",
      "Improved brand trustworthiness and design aesthetics",
      "Highly responsive mobile experience"
    ],
    testimonial: {
      quote: "Traincape converted our luxury branding into a blistering fast e-commerce portal. The performance gains were immediate.",
      author: "N. Khan",
      role: "Founder, NK Luxe",
      avatar: ""
    },
    seo: {
      title: "NK Luxe headles e-commerce web portal case study | Traincape",
      description: "How Traincape developed the high-performance headless luxury storefront for NK Luxe, achieving sub-second loads and premium aesthetics.",
      keywords: "headless ecommerce, retail portal, React web development, Stripe checkout integration"
    },
    relatedProjects: ["verda", "traincape"]
  },
  {
    id: "crm",
    slug: "crm",
    title: "Enterprise CRM & Unified HRMS Suite",
    client: "Traincape Corporate Services",
    industry: "Enterprise Software",
    country: "United Kingdom",
    overview: "A comprehensive custom enterprise workspace consolidating Client Relationship Management, Human Resource Management, Automated Payroll, Biometric Attendance, and Inventory Control.",
    businessProblem: "Operational data was fragmented across multiple third-party SaaS apps, causing payroll errors, document delays, and high licensing costs.",
    challenges: [
      "Consolidating 6 department workflows under a single Access Control List (ACL)",
      "Syncing high-frequency biometric attendance records without data loss",
      "Building accessible, complex data dashboards compliant with WCAG standards"
    ],
    research: "Mapped out department touchpoints to understand payroll calculation parameters. Designed database models with optimized index lookups.",
    solution: "Developed a single-page monorepo administration dashboard with modular tabs, detailed graph visualizations (Recharts), and strict role authorization keys.",
    architecture: {
      frontend: "React / Tailwind / Recharts",
      backend: "Node.js API Services",
      database: "MongoDB Enterprise",
      security: "JWT Auth / Role-based ACL"
    },
    technologyStack: ["React", "Tailwind CSS", "Recharts", "Node.js", "Express", "MongoDB"],
    features: [
      "Visual lead-scoring pipeline tracking",
      "Automated Tax and Payroll calculation algorithms",
      "Biometric Attendance logs processor",
      "Real-time Inventory alerts and levels tracker"
    ],
    timeline: "9 Months",
    team: [
      { name: "Ritik S.", role: "Fullstack Engineer" },
      { name: "Sandeep Y.", role: "Database Architect" },
      { name: "Vikas M.", role: "Frontend Lead" }
    ],
    gallery: {
      desktop: crmDashboard,
      mobile: crmLeads
    },
    logo: crmLogo,
    results: [
      "Streamlined workflows across 6 departments",
      "Eliminated redundant third-party license expenses",
      "Highly secure, role-restricted dashboard layout",
      "Accessible charts with proper screen reader tags"
    ],
    testimonial: {
      quote: "The unified dashboard brought all our operations under one single pane of glass. Workflow overhead is down drastically.",
      author: "P. Parichay",
      role: "Operations Director",
      avatar: ""
    },
    seo: {
      title: "Enterprise CRM & HRMS Custom Software Case Study | Traincape",
      description: "How Traincape developed a bespoke, accessible corporate CRM & HRMS dashboard, consolidating operations and reducing overhead.",
      keywords: "custom CRM system, HRMS software build, automated payroll calculator, accessible dashboard"
    },
    relatedProjects: ["nk-luxe", "verda"]
  },
  {
    id: "verda",
    slug: "verda",
    title: "International Trade & Supply Chain Portal",
    client: "Verda Exports Ltd",
    industry: "Logistics & Agriculture",
    country: "India",
    overview: "A customized B2B trade tracking portal and contract bidding engine facilitating agricultural supply chains and document handshakes for global buyers.",
    businessProblem: "Buyers had no real-time shipping tracking, contract invoicing was handled via slow email threads, and customs documents got misaligned.",
    challenges: [
      "Integrating web socket events for logistics milestone status updates",
      "Generating automated, multi-language trade agreement PDF documents",
      "Maintaining highly responsive layouts for field users with poor bandwidth"
    ],
    research: "Analyzed supply line milestone workflows and designed database schema to store document tracking states.",
    solution: "Created a B2B tracking portal with websocket channels, dynamic document generators, and pre-rendered layout optimization.",
    architecture: {
      frontend: "React / Tailwind CSS",
      backend: "Node.js / WebSockets",
      database: "PostgreSQL",
      storage: "AWS S3 Document Vault"
    },
    technologyStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS S3", "Tailwind CSS"],
    features: [
      "Live logistics milestone status pipelines",
      "B2B bulk contract bidding engine",
      "Automated document PDF compilation",
      "Offline layout fallback configurations"
    ],
    timeline: "2 Months",
    team: [
      { name: "Kartikey S.", role: "Backend Developer" },
      { name: "Akshay P.", role: "UX Designer" }
    ],
    gallery: {
      desktop: verdaDesktop,
      mobile: verdaMobile
    },
    logo: verdaLogo,
    results: [
      "Improved supply chain visibility for international clients",
      "Modern, responsive B2B ordering interface",
      "Secure document storage and verification flow",
      "Highly optimized page assets for low-bandwidth regions"
    ],
    testimonial: {
      quote: "Verda's trade portal solved the logistics tracking headache. Our clients can now check contract states instantly.",
      author: "H. Patel",
      role: "Logistics Manager",
      avatar: ""
    },
    seo: {
      title: "Verda Exports International Trade Portal Case Study | Traincape",
      description: "How Traincape developed a custom B2B agricultural logistics and supply chain portal with live tracking and document automation.",
      keywords: "supply chain portal, trade contract bidding, websocket logistics tracker, custom B2B software"
    },
    relatedProjects: ["nk-luxe", "traincape"]
  },
  {
    id: "dating-app",
    slug: "dating-app",
    title: "Premium Geo-Connection & Match Platform",
    client: "Aura Connections LLC",
    industry: "Startups & Social",
    country: "United States",
    overview: "A premium, cross-platform mobile application engineered with React Native. Integrates geolocation queries, real-time message sync, and encrypted user data streams.",
    businessProblem: "Third-party connection platforms had poor real-time messaging latency and massive battery drain during location checks.",
    challenges: [
      "Optimizing database polling to decrease geo-query latency to under 300ms",
      "Minimizing background location battery usage on iOS and Android devices",
      "Securing user chat logs with end-to-end token verification rules"
    ],
    research: "Audited background thread execution loops on React Native and configured high-performance location hooks.",
    solution: "Designed the app with a Firebase Firestore backplane for real-time messaging, paired with custom background location controllers.",
    architecture: {
      frontend: "React Native / Tailwind CSS",
      backend: "Node.js API services",
      database: "Firebase Firestore / MongoDB",
      payments: "Apple Pay / Google Pay"
    },
    technologyStack: ["React Native", "Firebase Firestore", "AWS S3", "Node.js", "Tailwind CSS"],
    features: [
      "Real-time instant peer chat sync",
      "Background geo-location proximity scanning",
      "Premium profile verification and security tokens",
      "In-app Apple Pay subscription purchase flows"
    ],
    timeline: "5 Months",
    team: [
      { name: "Prachiy S.", role: "Mobile Developer" },
      { name: "Eshita K.", role: "UI Designer" }
    ],
    gallery: {
      desktop: datingAppLogin,
      mobile: datingAppDashboard
    },
    logo: datingAppLogo,
    results: [
      "Low-latency real-time peer messaging experience",
      "Clean, modern mobile app layouts with smooth transitions",
      "Scalable infrastructure capable of high simultaneous connections",
      "Highly secure, verified profile directory"
    ],
    testimonial: {
      quote: "The messaging speed on Aura is incredible. The background location services run smoothly without draining the phone.",
      author: "J. Mercer",
      role: "Product Owner, Aura",
      avatar: ""
    },
    seo: {
      title: "Aura React Native Mobile App Case Study | Traincape",
      description: "How Traincape developed the high-performance geo-connection mobile application with Firebase messaging and battery-optimized location services.",
      keywords: "React Native app, firebase dating app, background geolocation development, mobile chat backend"
    },
    relatedProjects: ["nk-luxe", "traincape"]
  },
  {
    id: "traincape",
    slug: "traincape",
    title: "Traincape Corporate Portal & LMS Suite",
    client: "Traincape Technology Pvt Ltd",
    industry: "Software Design & EdTech",
    country: "India",
    overview: "Redesigned Traincape's corporate storefront, custom LMS portals, and dynamic certificate directories. Built using HSL system tokens and pre-rendered crawling configurations.",
    businessProblem: "The legacy education portal had disjointed layouts, poor mobile rendering, and lacked structured SEO optimization, missing organic certification searches.",
    challenges: [
      "Mapping 24 nested certification directories without losing URL ranks",
      "Implementing multi-language translations (EN, HI, NL, FR) dynamically",
      "Integrating a secure, tamper-proof online certification lookup tool"
    ],
    research: "Conducted crawl audits showing Google Search bots missed dynamically rendered client-side paths. Programmed pre-rendering crawler scripts.",
    solution: "Built a fully responsive layout with global HSL variables, localized page blocks, schema structures, and static pre-rendering crawler targets.",
    architecture: {
      frontend: "React 18 / Tailwind CSS / Helmet Async",
      routing: "React Router / Code-splitting",
      prerender: "React-Snap crawler configuration",
      data: "Localized JSON Translation schemas"
    },
    technologyStack: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "React Helmet Async"],
    features: [
      "Dynamic certification validation database search",
      "Multilingual translation integration (EN, HI, NL, FR)",
      "100% crawlable page layouts and preloaded assets",
      "Responsive, accessible navigation headers and footers"
    ],
    timeline: "3 Months",
    team: [
      { name: "Madhulika D.", role: "UX Designer" },
      { name: "Vikas M.", role: "Lead Frontend Engineer" }
    ],
    gallery: {
      desktop: traincapeDesktop,
      mobile: traincapeMobile
    },
    logo: traincapeLogo,
    results: [
      "100% crawlable static certification paths",
      "SEO readiness with breadcrumbs and schema integration",
      "Streamlined certificate verification process",
      "Premium dark corporate design alignment"
    ],
    testimonial: {
      quote: "Our new platform represents our engineering capability. Page speeds are up and crawlers index our routes perfectly.",
      author: "P. Parichay",
      role: "CEO, Traincape",
      avatar: ""
    },
    seo: {
      title: "Traincape Corporate Portal & LMS Case Study | Traincape",
      description: "How Traincape developed its own optimized corporate storefront, multi-language translation bindings, and secure certificate directories.",
      keywords: "LMS website design, certificate validation portal, multi-language React, SEO web development"
    },
    relatedProjects: ["crm", "nk-luxe"]
  }
];
