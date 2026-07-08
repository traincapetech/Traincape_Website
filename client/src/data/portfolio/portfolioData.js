// Imports of WebP and SVG assets to ensure Webpack compiles them correctly
import nkLuxeDesktop from "../../assets/portfolio/nk-luxe/desktop.png";
import nkLuxeMobile from "../../assets/portfolio/nk-luxe/mobile.png";
import nkLuxeLogo from "../../assets/portfolio/nk-luxe/logo.jpg";

import verdaExportsDesktop from "../../assets/portfolio/verda-exports/desktop.png";
import verdaExportsMobile from "../../assets/portfolio/verda-exports/mobile.png";
import verdaExportsLogo from "../../assets/portfolio/verda-exports/logo.png";

import crmDashboard from "../../assets/portfolio/crm/dashboard.png";
import crmLeads from "../../assets/portfolio/crm/leads.png";
import crmPayroll from "../../assets/portfolio/crm/payroll.png";
import crmAttendance from "../../assets/portfolio/crm/attendance.png";
import crmReports from "../../assets/portfolio/crm/reports.png";
import crmAnalytics from "../../assets/portfolio/crm/analytics.png";
import crmSettings from "../../assets/portfolio/crm/settings.png";
import crmLogo from "../../assets/portfolio/crm/logo.png";

import datingAppLogin from "../../assets/portfolio/dating-app/login.webp";
import datingAppDashboard from "../../assets/portfolio/dating-app/dashboard.webp";
import datingAppProfile from "../../assets/portfolio/dating-app/profile.webp";
import datingAppChat from "../../assets/portfolio/dating-app/chat.webp";
import datingAppLogo from "../../assets/portfolio/dating-app/logo.svg";

import traincapeDesktop from "../../assets/portfolio/traincape/desktop.png";
import traincapeMobile from "../../assets/portfolio/traincape/mobile.png";
import traincapeLogo from "../../assets/portfolio/traincape/logo.png";

import boldIndiaDesktop from "../../assets/portfolio/bold-india-group/desktop.png";
import boldIndiaMobile from "../../assets/portfolio/bold-india-group/mobile.png";
import boldIndiaLogo from "../../assets/portfolio/bold-india-group/logo.webp";

export const portfolioData = [
  {
    id: "nk-luxe",
    slug: "nk-luxe",
    title: "NK Luxe Luxury E-commerce",
    client: "NK Luxe Retail",
    industry: "Retail & E-commerce",
    country: "United Kingdom",
    description: "A premium luxury e-commerce platform built for high-end boutique shopping. Integrated with real-time inventory management, personalized recommendations, and a high-performance custom storefront.",
    challenge: "The client needed a digital flagship store that matches the luxury look and feel of their physical boutiques, requiring ultra-fast page speeds (LCP < 1.2s), immersive transitions, and secure checkout logic.",
    solution: "Developed a custom storefront powered by React 18 and dynamic Tailwind classes, utilizing optimized lazy loaded layouts, Framer Motion transitions, and fully responsive layouts.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion", "Stripe API"],
    features: [
      "Dynamic luxury-grade product catalogue",
      "Interactive 3D product previews",
      "Sleek filter parameters (size, style, collection)",
      "Secure Stripe elements multi-currency checkout",
      "Custom administrative dashboard for orders"
    ],
    duration: "2 Months",
    teamSize: "2 Members",
    images: {
      desktop: nkLuxeDesktop,
      mobile: nkLuxeMobile
    },
    logo: nkLuxeLogo,
    website: "https://www.nkluxedesign.com/",
    projectType: "Web Development",
    featured: true,
    seo: {
      title: "NK Luxe Case Study | Premium Luxury E-commerce Platform",
      description: "Discover how Traincape designed and built the flagship luxury storefront for NK Luxe. Achieving sub-second loads and premium aesthetics.",
      keywords: "luxury ecommerce, online storefront, custom React web app, stripe integration"
    }
  },
  {
    id: "verda-exports",
    slug: "verda-exports",
    title: "Verda Exports International Trade Portal",
    client: "Verda Exports Ltd",
    industry: "Logistics & Agriculture",
    country: "India",
    description: "A centralized supply chain tracking and B2B ordering portal for international agricultural trades, facilitating bulk contracting and shipment coordination.",
    challenge: "Managing international customs document tracking, volatile pricing changes, and complex shipping coordinates across multiple timezones without losing trade records.",
    solution: "Engineered a robust dashboard connecting B2B supply lines. Utilizes web socket notifications for order milestones, PDF invoicing generators, and schema metadata.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "AWS S3"],
    features: [
      "Real-time shipping coordinates & progress milestones",
      "B2B bulk contract bidding engine",
      "Automated export document PDF compilation",
      "Multi-language translation support",
      "Secure banking document verification modules"
    ],
    duration: "2 Months",
    teamSize: "3 Members",
    images: {
      desktop: verdaExportsDesktop,
      mobile: verdaExportsMobile
    },
    logo: verdaExportsLogo,
    website: "https://verdaexports.com",
    projectType: "Cloud Services",
    featured: true,
    seo: {
      title: "Verda Exports B2B Logistics Portal | Custom Software Development Case Study",
      description: "Read the case study of Verda Exports trade portal. How we streamlined international logistics, B2B contracting, and document tracking.",
      keywords: "logistics software, agriculture portal, B2B exports system, custom SaaS build"
    }
  },
  {
    id: "crm",
    slug: "crm",
    title: "Traincape Enterprise CRM & HRMS Suites",
    client: "Traincape Corporate Services",
    industry: "Enterprise Software",
    country: "United Kingdom",
    description: "An all-in-one customized enterprise management ecosystem integrating CRM, HRMS, Payroll administration, Attendance tracking, Inventory control, and a unified Employee Portal.",
    challenge: "Consolidating 6 separate departments' operations into a singular secure app workspace, maintaining strict role authorizations (ACL), and managing payroll without data errors.",
    solution: "Built a robust monorepo dashboard utilizing Tailwind styling rules. Implemented detailed graphs, visual analytics cards, and strict WCAG AA compliant navigation flow.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Recharts", "JSON-LD Schema"],
    features: [
      "Custom Lead scoring & CRM tracking pipelines",
      "Automated Tax and Payroll calculation algorithms",
      "Biometric-linked Attendance dashboard",
      "Dynamic Inventory tracking with threshold alerts",
      "Collaborative Employee Portal and notification hubs"
    ],
    duration: "9 Months",
    teamSize: "7 Members",
    images: {
      dashboard: crmDashboard,
      leads: crmLeads,
      payroll: crmPayroll,
      attendance: crmAttendance,
      reports: crmReports,
      analytics: crmAnalytics,
      settings: crmSettings
    },
    logo: crmLogo,
    website: "#",
    projectType: "Enterprise Software",
    featured: true,
    seo: {
      title: "Enterprise CRM & HRMS Custom Build | Traincape Technology",
      description: "An in-depth look at Traincape's custom enterprise software suites. How we integrated CRM, HRMS, and inventory into one cohesive platform.",
      keywords: "custom CRM, HRMS platform, automated payroll systems, enterprise SaaS software"
    }
  },
  {
    id: "traincape",
    slug: "traincape",
    title: "Traincape Technology Pvt Ltd",
    client: "Traincape Education & Software Services",
    industry: "Software Design & EdTech",
    country: "India",
    description: "Enterprise software design and development suite for Traincape. Builds custom scalable CRM, ERP, custom LMS, mobile apps, and real estate portals optimized for search engine ranks (SEO).",
    challenge: "Developing scalable internal administration suites (ERP, CRM) and modular LMS paths with pre-rendered SEO performance while maintaining brand alignment.",
    solution: "Engineered a fast frontend utilizing custom design tokens, responsive CSS grids, schema markups, and code split components to maximize organic visibility.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis Scroll", "React Helmet Async", "SEO Schema"],
    features: [
      "Dynamic CRM pipeline and lead monitoring",
      "Bespoke ERP and custom inventory controllers",
      "Mobile-friendly LMS course registration wizards",
      "Comprehensive Real Estate property listing schemas",
      "Search Engine Optimization (SEO) structured markups"
    ],
    duration: "3 Months",
    teamSize: "4 Members",
    images: {
      desktop: traincapeDesktop,
      mobile: traincapeMobile
    },
    logo: traincapeLogo,
    website: "https://traincapetech.in",
    projectType: "Web Development",
    featured: false,
    seo: {
      title: "Traincape Custom Software Development & SEO case study",
      description: "Explore how Traincape designs and develops enterprise CRM, ERP, custom LMS, real estate portals, mobile apps, and maximizes web SEO crawl scores.",
      keywords: "CRM developers, ERP custom software, LMS development, Real Estate portals, web development company India"
    }
  },
  {
    id: "bold-india-group",
    slug: "bold-india-group",
    title: "Bold India Group Digital Showcase Portal",
    client: "Bold India Group",
    industry: "Logistics & Manufacturing",
    country: "India",
    description: "A B2B industrial website and corporate digital showcase designed and developed for Bold India Group to highlight national shipping networks and manufacturing capacity.",
    challenge: "Presenting complex logistics networks and heavy industrial specs in a responsive, fast-loading storefront without losing performance.",
    solution: "Developed a premium React storefront with Tailwind utility classes, search engine optimized metadata structures, and fluid layout animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Helmet Async"],
    features: [
      "Interactive national logistics network visualizer",
      "SEO optimized corporate service catalogs",
      "Fluid, lightweight grid layout systems",
      "B2B lead generation & quote consulting wizard"
    ],
    duration: "2 Months",
    teamSize: "3 Members",
    images: {
      desktop: boldIndiaDesktop,
      mobile: boldIndiaMobile
    },
    logo: boldIndiaLogo,
    website: "https://www.boldindiagroup.com/",
    projectType: "Web Development",
    featured: false,
    seo: {
      title: "Bold India Group Web Portal Case Study | Traincape Technology",
      description: "How Traincape developed the high-performance B2B portal for Bold India Group, maximizing local SEO rankings and loading efficiency.",
      keywords: "Bold India Group B2B website, logistics portal developers, custom industrial web design India"
    }
  }
];
