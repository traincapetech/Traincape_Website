const fs = require('fs');
const path = require('path');

// Paths
const sitemapPath = path.join(__dirname, '../public/sitemap-certifications.xml');
const menuPath = path.join(__dirname, '../src/data/gipmc-certifications-menu.json');

// 1. Slugify Helper
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

// 2. Load Valid Data
console.log('Loading certification data... (Strict Mode)');
if (!fs.existsSync(menuPath)) {
    console.error('Error: Menu file not found at', menuPath);
    process.exit(1);
}
const menu = require(menuPath);

// Helper to determine category (copied logic from client/src/data/certificationsCatalog.js)
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


const validCoursePaths = new Set();
const validCategories = new Set([
    "project-program-management",
    "agile-scrum-lean",
    "cybersecurity-compliance",
    "cloud-infrastructure-networking",
    "ai-data-emerging-tech",
    "software-dev-testing",
    "business-hr-management",
    "digital-marketing-cx"
]);

// Extract valid slugs
menu.hierarchy.forEach(domain => {
    domain.groups.forEach(group => {
        // Determine the category this group belongs to
        const categorySlug = mapDomainToTopCategory(domain.domainTitle, group.groupTitle);

        if (group.courses) {
            group.courses.forEach(course => {
                let title = decodeHtmlEntities(course.title);
                if (!title || /^testing/i.test(title)) return; // logic from certificationsCatalog.js

                const courseSlug = slugify(title);
                // Store the VALID full path keys
                validCoursePaths.add(`${categorySlug}/${courseSlug}`);
            });
        }
    });
});

console.log(`Found ${validCoursePaths.size} valid course paths.`);

// 3. Process Sitemap
console.log('Reading sitemap.xml...');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Regex to find <url>...</url> blocks
const urlBlockRegex = /<url>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?<\/url>/gi;

let removedCount = 0;
let keptCount = 0;

const newSitemapContent = sitemapContent.replace(urlBlockRegex, (match, loc) => {
    const url = new URL(loc);
    const pathParts = url.pathname.split('/').filter(Boolean); // e.g. ['certifications', 'category-slug', 'course-slug']

    // Filter only /certifications/...
    if (pathParts[0] === 'certifications') {

        // /certifications (Index) - KEEP
        if (pathParts.length === 1) {
            keptCount++;
            return match;
        }

        // /certifications/:category
        if (pathParts.length === 2) {
            const categorySlug = pathParts[1];
            if (validCategories.has(categorySlug)) {
                keptCount++;
                return match;
            } else {
                console.log(`[REMOVE] Invalid Category: ${loc}`);
                removedCount++;
                return '';
            }
        }

        // /certifications/:category/:course
        if (pathParts.length >= 3) {
            const categorySlug = pathParts[1];
            const courseSlug = pathParts[2];
            const fullPathKey = `${categorySlug}/${courseSlug}`;

            // STRICT CHECK: path must match exactly what the app thinks it is
            if (validCoursePaths.has(fullPathKey)) {
                keptCount++;
                return match;
            } else {
                console.log(`[REMOVE] Invalid Course Path: ${loc}`);
                removedCount++;
                return ''; // Remove the block
            }
        }
    }

    // Keep other URLs (training, services, etc)
    keptCount++;
    return match;
});

// 4. Save
if (removedCount > 0) {
    fs.writeFileSync(sitemapPath, newSitemapContent, 'utf8');
    // Simple cleanup of empty lines
    const cleanedLines = fs.readFileSync(sitemapPath, 'utf8').replace(/^\s*[\r\n]/gm, '');
    fs.writeFileSync(sitemapPath, cleanedLines, 'utf8');

    console.log(`\nSuccess! Removed ${removedCount} invalid URLs. Kept ${keptCount} URLs.`);
} else {
    console.log('\nNo invalid URLs found to remove.');
}
