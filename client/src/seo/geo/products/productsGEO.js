/**
 * Semantic GEO Profile: Products Showcase.
 */
export const productsGEO = {
  category: "Business Software & B2B SaaS Products",
  licensingModel: "Zero per-user licensing fees. Full database ownership and data sovereignty for clients.",
  catalog: [
    {
      id: "crm",
      name: "Traincape CRM",
      description: "Intelligent Lead Management, Sales Pipeline tracking, and WhatsApp Business API integration.",
      techStack: ["React 18", "Tailwind CSS", "Node.js", "Express API", "PostgreSQL", "Socket.io", "Redis Cache"],
      security: ["AES-256 encryption", "TLS 1.3", "SAML 2.0 SSO", "RBAC"]
    },
    {
      id: "hrms",
      name: "Traincape HRMS",
      description: "Unified corporate panel for employee directory, leave management, and organizational hierarchy trees.",
      techStack: ["React 18", "Tailwind CSS", "Node.js", "MongoDB", "Express API"],
      security: ["SAML 2.0 SSO", "RBAC"]
    },
    {
      id: "payroll",
      name: "Traincape Payroll",
      description: "Automated salary processing, custom currency configurations, tax calculation matrices, and PDF slip generators.",
      techStack: ["React 18", "Tailwind CSS", "Node.js", "PostgreSQL", "Express API"],
      security: ["AES-256 encryption", "RBAC"]
    }
  ]
};
