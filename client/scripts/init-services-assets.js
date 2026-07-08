const fs = require('fs');
const path = require('path');

const dirs = [
  'src/assets/services/custom-software-development',
  'src/assets/services/crm-development',
  'src/assets/services/web-development',
  'src/assets/services/mobile-app-development',
  'src/assets/services/ui-ux-design',
  'src/assets/services/cloud-services',
  'src/assets/services/ai-solutions',
  'src/assets/services/maintenance-support'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, '..', dir), { recursive: true });
});

// 1x1 transparent PNG base64 representation
const tinyPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');

dirs.forEach(dir => {
  fs.writeFileSync(path.join(__dirname, '..', dir, 'icon.png'), tinyPng);
  fs.writeFileSync(path.join(__dirname, '..', dir, 'hero.png'), tinyPng);
});

console.log('Services assets placeholders initialized successfully!');
