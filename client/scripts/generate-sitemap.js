#!/usr/bin/env node
/**
 * Generate sitemap.xml from actual React Router routes (AllRoute.jsx),
 * plus expansions for dynamic routes:
 * - /certifications/:categorySlug (+ detail pages from gipmc-certifications.json)
 * - /training/:vendorSlug (aws/cisco/microsoft)
 * - /service-detail/:slug (from known services list)
 *
 * Output: public/sitemap.xml
 */
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.traincapetech.in";
const OUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");
const ROUTES_FILE = path.join(__dirname, "..", "src", "allRoute", "AllRoute.jsx");

const GIPMC_CERTS_FILE = path.join(__dirname, "..", "src", "data", "gipmc-certifications.json");

function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/&/g, "and")
    .replace(/&#160;|&nbsp;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function decodeHtmlEntities(input) {
  return String(input || "")
    .replace(/&#160;|&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

function readAllRoutePaths() {
  const src = fs.readFileSync(ROUTES_FILE, "utf8");
  const paths = [];
  const re = /<Route\\s+path=\\\"([^\\\"]+)\\\"/g;
  let m;
  while ((m = re.exec(src))) paths.push(m[1]);
  return paths;
}

function isPublicPath(p) {
  if (!p) return false;
  if (p.includes("*")) return false; // we only output concrete URLs
  // Exclude auth/admin/internal
  const denyPrefixes = [
    "/admin",
    "/admin-panel",
    "/login",
    "/signup",
    "/forgot-password",
    "/test",
    "/verifyCertificate",
    "/cer",
    "/review-page",
    "/internal-exams",
    "/employee",
    "/internship",
  ];
  if (denyPrefixes.some((x) => p === x || p.startsWith(`${x}/`))) return false;
  return true;
}

function buildUrls() {
  const routes = readAllRoutePaths();

  const staticPaths = routes
    .filter((p) => !p.includes(":"))
    .filter(isPublicPath);

  // Remove legacy duplicates/casing variants that we don't want indexed
  const legacyDeny = new Set([
    "/Courses-details",
    "/Career-details",
    "/Our-Policies",
    "/Our-Blogs",
    "/Terms-and-Conditions",
    "/CertificateLookup",
    "/partner-page",
    "/frequently-asked-questions",
  ]);

  const allowPaths = staticPaths.filter((p) => !legacyDeny.has(p));

  // Explicitly include main marketing pages (if present as aliases)
  const base = new Set(allowPaths);
  base.add("/");
  base.add("/our-services");
  base.add("/contact-us");
  base.add("/about-us");
  base.add("/courses");
  base.add("/training");
  base.add("/certifications");

  // Training vendor pages
  const trainingVendors = ["aws", "cisco", "microsoft"];
  for (const v of trainingVendors) base.add(`/training/${v}`);

  // Certifications category pages (fixed IA)
  const certCategories = [
    "project-program-management",
    "agile-scrum-lean",
    "cybersecurity-compliance",
    "cloud-infrastructure-networking",
    "ai-data-emerging-tech",
    "software-dev-testing",
    "business-hr-management",
    "digital-marketing-cx",
  ];
  for (const c of certCategories) base.add(`/certifications/${c}`);

  // Certification detail pages from harvested catalog (gipmc-certifications.json)
  if (fs.existsSync(GIPMC_CERTS_FILE)) {
    const data = JSON.parse(fs.readFileSync(GIPMC_CERTS_FILE, "utf8"));
    for (const course of data?.courses || []) {
      const title = decodeHtmlEntities(course.title);
      if (!title || /^object moved/i.test(title) || /^testing/i.test(title)) continue;
      const domain = course.domainTitle || "";
      const group = course.groupTitle || "";
      // mirror catalog mapping (best-effort, same heuristics)
      const d = `${domain} ${group}`.toLowerCase();
      let cat = "business-hr-management";
      if (/(project|program|portfolio|pmo|planning|scheduling|leadership|executive)/.test(d)) cat = "project-program-management";
      else if (/(agile|scrum|safe|kanban|lean|six sigma)/.test(d)) cat = "agile-scrum-lean";
      else if (/(cyber|security|risk|compliance|iso\/iec|governance|secure coding|privacy)/.test(d)) cat = "cybersecurity-compliance";
      else if (/(cloud|devops|infrastructure|network|data centre|wireless|it & network)/.test(d)) cat = "cloud-infrastructure-networking";
      else if (/(artificial intelligence|ai|data science|machine learning|automation|analytics)/.test(d)) cat = "ai-data-emerging-tech";
      else if (/(software testing|quality|automation testing|qa|development|web designing|python)/.test(d)) cat = "software-dev-testing";
      else if (/(business|management|hr|finance|accounting|supply chain|procurement|operations|leadership development)/.test(d)) cat = "business-hr-management";
      else if (/(sales|marketing|branding|customer experience|call centre|service operations|ux|ui|business analysis)/.test(d)) cat = "digital-marketing-cx";

      base.add(`/certifications/${cat}/${slugify(title)}`);
    }
  }

  // Service detail dynamic route expansions (based on existing dedicated service pages)
  // NOTE: /service-detail/:slug exists, but current site also has canonical /services/... pages.
  // We include only those canonical service URLs for sitemap.
  const servicePages = [
    "/services/cloud-services",
    "/services/web-development",
    "/services/digital-marketing",
    "/services/software-services",
  ];
  for (const s of servicePages) base.add(s);

  // Additional static pages
  const additionalPages = [
    "/career",
    "/faq",
    "/blogs",
    "/policies",
    "/terms-and-conditions",
    "/Gallery",
  ];
  for (const p of additionalPages) base.add(p);

  // CompTIA Certification Routes
  const comptiaPages = [
    "/comptia",
    "/comptia/specialist",
    "/comptia/professional",
    "/comptia/expert",
    // Specialist
    "/comptia/specialist/a-plus",
    "/comptia/specialist/network-plus",
    "/comptia/specialist/security-plus",
    "/comptia/specialist/secure-infrastructure",
    // Professional
    "/comptia/professional/cysa-plus",
    "/comptia/professional/pentest-plus",
    "/comptia/professional/cloud-plus",
    "/comptia/professional/cnvp",
    "/comptia/professional/network-security",
    "/comptia/professional/secure-cloud",
    "/comptia/professional/security-analytics",
    // Expert
    "/comptia/expert/casp-plus",
    "/comptia/expert/csae",
  ];
  for (const p of comptiaPages) base.add(p);

  // PECB Certification Routes
  const pecbPages = [
    "/PECB",
    // Information Security
    "/pecb/information-security",
    "/pecb/information-security/iso-27001",
    "/pecb/information-security/iso-27002",
    "/pecb/information-security/iso-27005",
    "/pecb/information-security/iso-27034",
    "/pecb/information-security/iso-27035",
    "/pecb/information-security/ciso",
    "/pecb/information-security/ebios",
    // Cybersecurity Management
    "/pecb/cybersecurity",
    "/pecb/cybersecurity/penetration-testing",
    "/pecb/cybersecurity/cloud-security",
    "/pecb/cybersecurity/computer-forensics",
    "/pecb/cybersecurity/cmmc",
    "/pecb/cybersecurity/network-security",
    "/pecb/cybersecurity/scada-security",
    // Quality & Management
    "/pecb/quality",
    "/pecb/quality/iso-9001",
    "/pecb/quality/iso-55001",
    "/pecb/quality/iso-13485",
    "/pecb/quality/iso-21001",
    "/pecb/quality/iso-21502",
    "/pecb/quality/iso-28000",
    "/pecb/quality/six-sigma",
    "/pecb/quality/iso-17025",
    "/pecb/quality/iso-20000",
    // Governance, Risk & Compliance
    "/pecb/governance",
    "/pecb/governance/iso-31000",
    "/pecb/governance/iso-37001",
    "/pecb/governance/iso-37000",
    "/pecb/governance/iso-37301",
    "/pecb/governance/iso-38500",
    "/pecb/governance/internal-auditor",
    "/pecb/governance/operational-risk",
    // Artificial Intelligence
    "/pecb/artificial-intelligence",
    "/pecb/artificial-intelligence/ai-professional",
    "/pecb/artificial-intelligence/ai-risk-management",
    "/pecb/artificial-intelligence/iso-42001",
    // Privacy & Data Protection
    "/pecb/privacy",
    "/pecb/privacy/gdpr",
    "/pecb/privacy/iso-27701",
    // Continuity, Resilience & Recovery
    "/pecb/continuity",
    "/pecb/continuity/iso-22301",
    "/pecb/continuity/crisis-management",
    "/pecb/continuity/dora",
    "/pecb/continuity/disaster-recovery",
    "/pecb/continuity/operational-resilience",
    // Technical Cybersecurity
    "/pecb/technical-cybersecurity",
    "/pecb/technical-cybersecurity/ethical-hacking",
    "/pecb/technical-cybersecurity/ccta",
    "/pecb/technical-cybersecurity/digital-forensics",
    "/pecb/technical-cybersecurity/incident-response",
    // Digital Transformation
    "/pecb/digital-transformation",
  ];
  for (const p of pecbPages) base.add(p);

  return Array.from(base).filter(isPublicPath).sort();
}

function toXml(urls) {
  const today = new Date().toISOString().slice(0, 10);
  const items = urls
    .map((p) => {
      const loc = `${BASE_URL}${p === "/" ? "" : p}`;
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${items}\n` +
    `</urlset>\n`;
}

function main() {
  const urls = buildUrls();
  const xml = toXml(urls);
  fs.writeFileSync(OUT_FILE, xml);
  console.log(`[generate-sitemap] Wrote ${urls.length} URLs -> ${OUT_FILE}`);
}

main();

