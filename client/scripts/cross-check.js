const fs = require('fs');
const path = require('path');

const base = path.join('d:', 'train cape career', 'Traincape_Website', 'client');
const xml = fs.readFileSync(path.join(base, 'public', 'sitemap.xml'), 'utf8');
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace('https://www.traincapetech.in', ''));

const route = fs.readFileSync(path.join(base, 'src', 'allRoute', 'AllRoute.jsx'), 'utf8');
const routePaths = [...route.matchAll(/path=["']([^"']+)["']/g)].map(m => m[1]);
const staticRoutes = routePaths.filter(r => !r.includes(':') && r !== '*');

console.log('Sitemap URLs:', locs.length);
console.log('Static Routes in AllRoute:', staticRoutes.length);

// Dynamic route patterns
const dynamicPatterns = ['/certifications/', '/training/'];

const inSitemapNotRoute = locs.filter(l => {
    if (staticRoutes.includes(l)) return false;
    // Check dynamic patterns
    for (const p of dynamicPatterns) {
        if (l.startsWith(p)) return false;
    }
    return true;
});

console.log('\nIn SITEMAP but NOT matching any route (' + inSitemapNotRoute.length + '):');
inSitemapNotRoute.forEach(u => console.log('  ' + u));

// Private pages that shouldn't be in sitemap
const privatePrefixes = ['/admin', '/test', '/login', '/signup', '/forgot', '/employee', '/cer', '/home', '/verify', '/Certificate', '/internal'];
const inRouteNotSitemap = staticRoutes.filter(r => {
    if (locs.includes(r)) return false;
    for (const p of privatePrefixes) {
        if (r.startsWith(p) || r === p) return false;
    }
    return true;
});

console.log('\nPublic ROUTES missing from sitemap (' + inRouteNotSitemap.length + '):');
inRouteNotSitemap.forEach(u => console.log('  ' + u));

// Pages that use SEOHead/Helmet/title
console.log('\n--- SEO TAG CHECK (public pages) ---');
const pagesDir = path.join(base, 'src', 'pages');

function checkSEO(file) {
    const content = fs.readFileSync(file, 'utf8');
    const hasHelmet = content.includes('Helmet') || content.includes('SEOHead') || content.includes('SEOHeader');
    const hasCanonical = content.includes('canonical');
    return { hasHelmet, hasCanonical };
}

// Check popular public pages
const publicPages = [
    'AboutUS.jsx', 'ContactUs.jsx', 'FAQ.jsx', 'Courses.jsx',
    'Comptia/ComptiaLevels.jsx', 'Comptia/ComptiaExpert.jsx',
    'Comptia/Specialist/ComptiaA+.jsx', 'Comptia/Professional/ComptiaCYSA+.jsx',
    'PECB.jsx', 'Certifications/CertificationsIndex.jsx',
    'Certifications/CertificationDetail.jsx',
];

publicPages.forEach(p => {
    const full = path.join(pagesDir, p);
    if (fs.existsSync(full)) {
        const { hasHelmet, hasCanonical } = checkSEO(full);
        const status = hasHelmet ? '✅' : '❌';
        const canon = hasCanonical ? '✅' : '❌';
        console.log(`  ${status} SEO | ${canon} Canonical | ${p}`);
    }
});
