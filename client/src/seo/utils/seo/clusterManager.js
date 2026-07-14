const TOPICS = {
  crm: {
    title: "Client Relationship Management & HRMS",
    services: ["crm-development", "custom-software-development"],
    products: ["crm", "hrms", "payroll"],
    portfolio: ["crm"],
    caseStudies: ["crm", "traincape"],
    faqs: ["Are these courses free or paid?", "Can we migrate data from Salesforce or HubSpot?"],
    tags: ["CRM", "HRMS", "ERP", "Salesforce Alternative", "B2B SaaS"]
  },
  "web-development": {
    title: "Custom Web Application Engineering",
    services: ["web-development", "custom-software-development", "maintenance-support"],
    products: ["crm", "hrms"],
    portfolio: ["nk-luxe", "verda-exports", "crm"],
    caseStudies: ["nk-luxe", "verda", "crm"],
    faqs: ["Who owns the software source code?", "How do you ensure system scalability?"],
    tags: ["React 18", "Node.js", "Express API", "PostgreSQL", "Full Stack Development"]
  },
  "mobile-apps": {
    title: "Mobile App Design & Engineering",
    services: ["mobile-app-development", "ui-ux-design"],
    portfolio: ["traincape"],
    caseStudies: ["dating-app"],
    tags: ["Swift", "Android CLI", "iOS development", "React Native", "Cross-Platform Apps"]
  },
  cloud: {
    title: "Cloud Infrastructure & Devops Solutions",
    services: ["cloud-services", "custom-software-development"],
    portfolio: ["verda-exports", "crm"],
    caseStudies: ["verda", "crm"],
    faqs: ["Is it hosted on Traincape servers or our local cloud?"],
    tags: ["AWS ECS", "Amazon Web Services", "Microsoft Azure", "Cloud Migration", "Stateless API"]
  },
  ai: {
    title: "Artificial Intelligence & Emerging Tech Integration",
    services: ["ai-solutions"],
    products: ["crm"],
    caseStudies: ["dating-app"],
    tags: ["Generative AI", "Gemini API", "Machine Learning", "Data Analytics", "AI solutions"]
  },
  training: {
    title: "Professional IT Training & Global Certifications",
    services: [],
    products: [],
    portfolio: [],
    caseStudies: [],
    faqs: ["What certifications do you offer in Project Management?", "Do you provide exam vouchers?"],
    tags: ["IT training", "CompTIA training", "PECB training", "PMP training", "AWS training"]
  }
};

/**
 * Returns content cluster details for a specific key.
 * @param {string} topicKey
 * @returns {Object|null}
 */
export function getTopicCluster(topicKey) {
  const normalizedKey = topicKey ? topicKey.toLowerCase().trim() : "";
  
  // Direct match
  if (TOPICS[normalizedKey]) {
    return { key: normalizedKey, ...TOPICS[normalizedKey] };
  }
  
  // Fuzzy match
  for (const [key, cluster] of Object.entries(TOPICS)) {
    if (normalizedKey.includes(key) || key.includes(normalizedKey)) {
      return { key, ...cluster };
    }
  }
  
  return null;
}

/**
 * Find topics matching a description or list of keywords
 * @param {string} text 
 * @returns {Object[]}
 */
export function getRelatedClusters(text = "") {
  const lower = text.toLowerCase();
  const matched = [];
  for (const [key, cluster] of Object.entries(TOPICS)) {
    const matchesKeyword = cluster.tags.some(tag => lower.includes(tag.toLowerCase())) || lower.includes(key);
    if (matchesKeyword) {
      matched.push({ key, ...cluster });
    }
  }
  return matched;
}
