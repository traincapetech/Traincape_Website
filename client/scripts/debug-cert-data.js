const fs = require('fs');
const path = require('path');

const menuPath = path.join(__dirname, '../src/data/gipmc-certifications-menu.json');
const menu = require(menuPath);

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

// Search for the problematic courses
const targetTitles = [
    "AI Automation Associate",
    "Cost Accounting Leader",
    "Professional Business Analysis Leader",
    "Applied AI Governance Professional"
];

const found = [];

menu.hierarchy.forEach(domain => {
    domain.groups.forEach(group => {
        const categorySlug = mapDomainToTopCategory(domain.domainTitle, group.groupTitle);

        if (group.courses) {
            group.courses.forEach(course => {
                let title = decodeHtmlEntities(course.title);
                const courseSlug = slugify(title);

                // Check if it matches any target (partial match)
                targetTitles.forEach(t => {
                    if (title.toLowerCase().includes(t.toLowerCase())) {
                        found.push({
                            title,
                            categorySlug,
                            courseSlug,
                            expectedUrl: `/certifications/${categorySlug}/${courseSlug}`
                        });
                    }
                });
            });
        }
    });
});

console.log('--- Found Courses ---');
found.forEach(f => {
    console.log(JSON.stringify(f, null, 2));
});

if (found.length === 0) {
    console.log('No matching courses found in the data file.');
}
