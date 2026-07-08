const fs = require('fs');
const path = require('path');

const dirs = [
  'src/assets/caseStudies/nk-luxe',
  'src/assets/caseStudies/crm',
  'src/assets/caseStudies/verda',
  'src/assets/caseStudies/dating-app',
  'src/assets/caseStudies/traincape'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, '..', dir), { recursive: true });
});

// 1x1 transparent PNG base64 representation
const tinyPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');

const files = {
  'src/assets/caseStudies/nk-luxe/desktop.png': tinyPng,
  'src/assets/caseStudies/nk-luxe/mobile.png': tinyPng,
  'src/assets/caseStudies/nk-luxe/logo.png': tinyPng,

  'src/assets/caseStudies/crm/dashboard.png': tinyPng,
  'src/assets/caseStudies/crm/leads.png': tinyPng,
  'src/assets/caseStudies/crm/logo.png': tinyPng,

  'src/assets/caseStudies/verda/desktop.png': tinyPng,
  'src/assets/caseStudies/verda/mobile.png': tinyPng,
  'src/assets/caseStudies/verda/logo.png': tinyPng,

  'src/assets/caseStudies/dating-app/login.png': tinyPng,
  'src/assets/caseStudies/dating-app/dashboard.png': tinyPng,
  'src/assets/caseStudies/dating-app/logo.png': tinyPng,

  'src/assets/caseStudies/traincape/desktop.png': tinyPng,
  'src/assets/caseStudies/traincape/mobile.png': tinyPng,
  'src/assets/caseStudies/traincape/logo.png': tinyPng,
};

Object.entries(files).forEach(([file, content]) => {
  fs.writeFileSync(path.join(__dirname, '..', file), content);
});

console.log('Case studies asset placeholders initialized successfully!');
