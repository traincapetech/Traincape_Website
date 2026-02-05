import menu from "./gipmc-certifications-menu.json";
import meta from "./gipmc-certifications.json";
import { decodeHtmlEntities, slugify } from "../utils/slugify";

// User-requested top categories (fixed IA)
export const TOP_CATEGORIES = [
  { slug: "project-program-management", title: "Project & Program Management" },
  { slug: "agile-scrum-lean", title: "Agile, Scrum & Lean" },
  { slug: "cybersecurity-compliance", title: "Cybersecurity & Compliance" },
  { slug: "cloud-infrastructure-networking", title: "Cloud, Infrastructure & Networking" },
  { slug: "ai-data-emerging-tech", title: "AI, Data & Emerging Technologies" },
  { slug: "software-dev-testing", title: "Software Development & Testing" },
  { slug: "business-hr-management", title: "Business, HR & Management" },
  { slug: "digital-marketing-cx", title: "Digital Marketing & Customer Experience" },
];

function mapDomainToTopCategory(domainTitle = "", groupTitle = "") {
  const d = `${domainTitle} ${groupTitle}`.toLowerCase();

  if (/(project|program|portfolio|pmo|planning|scheduling|leadership|executive)/.test(d))
    return "project-program-management";
  if (/(agile|scrum|safe|kanban|lean|six sigma)/.test(d))
    return "agile-scrum-lean";
  if (/(cyber|security|risk|compliance|iso\/iec|governance|secure coding|privacy)/.test(d))
    return "cybersecurity-compliance";
  if (/(cloud|devops|infrastructure|network|data centre|wireless|it & network)/.test(d))
    return "cloud-infrastructure-networking";
  if (/(artificial intelligence|ai|data science|machine learning|automation|analytics)/.test(d))
    return "ai-data-emerging-tech";
  if (/(software testing|quality|automation testing|qa|development|web designing|python)/.test(d))
    return "software-dev-testing";
  if (/(business|management|hr|finance|accounting|supply chain|procurement|operations|leadership development)/.test(d))
    return "business-hr-management";
  if (/(sales|marketing|branding|customer experience|call centre|service operations|ux|ui|business analysis)/.test(d))
    return "digital-marketing-cx";

  return "business-hr-management";
}

function buildMetaMap() {
  const map = new Map();
  for (const c of meta?.courses || []) {
    map.set(c.sourceUrl, c);
    if (c.canonical) map.set(c.canonical, c);
  }
  return map;
}

const metaMap = buildMetaMap();

function defaultShortDescription(title, categoryTitle) {
  return `Build practical capability in ${categoryTitle.toLowerCase()} with “${title}”. Learn core concepts, frameworks, and real‑world best practices with a job‑focused curriculum.`;
}

function defaultLongDescription(title, categoryTitle) {
  return `The ${title} program is designed for professionals who want a clear, structured path to strengthen their ${categoryTitle.toLowerCase()} capabilities. You will learn practical frameworks, industry-aligned techniques, and the mindset needed to apply concepts confidently on real projects.\n\nThis course focuses on outcomes: how to plan, execute, measure, and improve work in your organization using proven practices. You will also build the ability to communicate decisions, manage stakeholders, and reduce delivery risk with repeatable methods.\n\nWhether you are upskilling for a new role, validating your expertise, or preparing for professional certification, this program provides a strong foundation and a clear next step.`;
}

export function getCertificationsCatalog() {
  const categoriesBySlug = new Map(TOP_CATEGORIES.map((c) => [c.slug, { ...c, groups: [] }]));

  // Flatten menu hierarchy into our categories → groups → courses
  for (const domain of menu?.hierarchy || []) {
    for (const group of domain?.groups || []) {
      const topSlug = mapDomainToTopCategory(domain.domainTitle, group.groupTitle);
      const category = categoriesBySlug.get(topSlug);
      if (!category) continue;

      const groupSlug = slugify(group.groupTitle || "general");
      let existingGroup = category.groups.find((g) => g.slug === groupSlug);
      if (!existingGroup) {
        existingGroup = {
          slug: groupSlug,
          title: decodeHtmlEntities(group.groupTitle || "General"),
          domainTitle: decodeHtmlEntities(domain.domainTitle || ""),
          courses: [],
        };
        category.groups.push(existingGroup);
      }

      for (const course of group.courses || []) {
        const title = decodeHtmlEntities(course.title);
        // Filter obvious junk placeholders from source menu
        if (!title || /^testing/i.test(title)) continue;

        const sourceUrl = course.url;
        const m = metaMap.get(sourceUrl);
        const shortDescription =
          (m?.metaDescription && decodeHtmlEntities(m.metaDescription)) ||
          defaultShortDescription(title, category.title);

        existingGroup.courses.push({
          id: slugify(`${title}-${sourceUrl}`),
          title,
          slug: slugify(title),
          sourceUrl,
          categorySlug: category.slug,
          categoryTitle: category.title,
          groupSlug: existingGroup.slug,
          groupTitle: existingGroup.title,
          domainTitle: existingGroup.domainTitle,
          shortDescription,
          longDescription: defaultLongDescription(title, category.title),
          learningOutcomes: [
            "Understand core concepts and terminology",
            "Apply frameworks to real project scenarios",
            "Improve planning, execution, and reporting discipline",
            "Identify risks and implement mitigation strategies",
            "Communicate effectively with stakeholders",
          ],
          whoShouldEnroll: [
            "Working professionals looking to upskill",
            "Managers and team leads improving delivery outcomes",
            "Students preparing for professional roles",
            "Anyone pursuing a structured learning path",
          ],
          careerBenefits: [
            "Stronger credibility for interviews and client engagements",
            "Improved performance on real projects and initiatives",
            "Clearer career direction with recognized skill validation",
          ],
          duration: "Flexible (self-paced) / 4–6 weeks (instructor-led)",
          deliveryMode: "Online (Live or Self-paced)",
        });
      }
    }
  }

  // Sort groups by size desc; courses alpha
  for (const cat of categoriesBySlug.values()) {
    cat.groups.forEach((g) => g.courses.sort((a, b) => a.title.localeCompare(b.title)));
    cat.groups.sort((a, b) => b.courses.length - a.courses.length);
  }

  const categories = TOP_CATEGORIES.map((c) => categoriesBySlug.get(c.slug)).filter(Boolean);
  const allCourses = categories.flatMap((c) => c.groups.flatMap((g) => g.courses));

  return { categories, allCourses };
}

