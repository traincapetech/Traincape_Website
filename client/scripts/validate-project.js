const fs = require('fs');
const path = require('path');

const srcFile = path.join('d:', 'train cape career', 'Traincape_Website', 'client', 'src', 'allRoute', 'AllRoute.jsx');
const pagesBase = path.join('d:', 'train cape career', 'Traincape_Website', 'client', 'src', 'pages');

const src = fs.readFileSync(srcFile, 'utf8');
const re = /import\(["']([^"']+)["']\)/g;
let m;
const missing = [];

while ((m = re.exec(src)) !== null) {
    const imp = m[1];
    if (!imp.startsWith('../pages')) continue;

    const relPath = imp.replace('../pages', pagesBase);
    const exts = ['.jsx', '.js', '/index.jsx', '/index.js', ''];
    let found = false;

    for (const ext of exts) {
        if (fs.existsSync(relPath + ext)) {
            found = true;
            break;
        }
    }

    if (!found) {
        missing.push(imp);
    }
}

if (missing.length === 0) {
    console.log('ALL IMPORTS OK - No missing files!');
} else {
    console.log('MISSING FILES (' + missing.length + '):');
    missing.forEach(m => console.log('  ' + m));
}

// Also check for pages that have Helmet
const pagesWithHelmet = [];
const pagesWithoutHelmet = [];
const pageFiles = [];

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory() && item !== 'node_modules' && item !== 'AdminPanel' && item !== 'Test' && item !== 'loadingPage') {
            walkDir(full);
        } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
            pageFiles.push(full);
        }
    }
}

walkDir(pagesBase);

for (const file of pageFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relName = path.relative(pagesBase, file);
    if (content.includes('Helmet') || content.includes('<title>')) {
        pagesWithHelmet.push(relName);
    } else {
        pagesWithoutHelmet.push(relName);
    }
}

console.log('\n\nPAGES WITHOUT HELMET/META TAGS (' + pagesWithoutHelmet.length + '):');
pagesWithoutHelmet.forEach(p => console.log('  ' + p));
