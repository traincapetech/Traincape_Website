const fs = require('fs');
const path = require('path');

const dirs = [
  'src/assets/portfolio/nk-luxe',
  'src/assets/portfolio/verda-exports',
  'src/assets/portfolio/crm',
  'src/assets/portfolio/dating-app',
  'src/assets/portfolio/traincape'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, '..', dir), { recursive: true });
});

// 1x1 transparent WebP base64 representation
const tinyWebp = Buffer.from('UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4H', 'base64');

// Default SVG logo content representing a modern tech mark
const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" rx="20" fill="#1e293b"/>
  <circle cx="50" cy="50" r="30" fill="url(#grad)" />
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
  </defs>
</svg>`;

const files = {
  'src/assets/portfolio/nk-luxe/desktop.webp': tinyWebp,
  'src/assets/portfolio/nk-luxe/mobile.webp': tinyWebp,
  'src/assets/portfolio/nk-luxe/logo.svg': defaultSvg,

  'src/assets/portfolio/verda-exports/desktop.webp': tinyWebp,
  'src/assets/portfolio/verda-exports/mobile.webp': tinyWebp,
  'src/assets/portfolio/verda-exports/logo.svg': defaultSvg,

  'src/assets/portfolio/crm/dashboard.webp': tinyWebp,
  'src/assets/portfolio/crm/leads.webp': tinyWebp,
  'src/assets/portfolio/crm/payroll.webp': tinyWebp,
  'src/assets/portfolio/crm/attendance.webp': tinyWebp,
  'src/assets/portfolio/crm/reports.webp': tinyWebp,
  'src/assets/portfolio/crm/analytics.webp': tinyWebp,
  'src/assets/portfolio/crm/settings.webp': tinyWebp,
  'src/assets/portfolio/crm/logo.svg': defaultSvg,

  'src/assets/portfolio/dating-app/login.webp': tinyWebp,
  'src/assets/portfolio/dating-app/dashboard.webp': tinyWebp,
  'src/assets/portfolio/dating-app/profile.webp': tinyWebp,
  'src/assets/portfolio/dating-app/chat.webp': tinyWebp,
  'src/assets/portfolio/dating-app/logo.svg': defaultSvg,

  'src/assets/portfolio/traincape/desktop.webp': tinyWebp,
  'src/assets/portfolio/traincape/mobile.webp': tinyWebp,
  'src/assets/portfolio/traincape/logo.svg': defaultSvg,
};

Object.entries(files).forEach(([file, content]) => {
  fs.writeFileSync(path.join(__dirname, '..', file), content);
});

console.log('Portfolio assets initialized successfully!');
