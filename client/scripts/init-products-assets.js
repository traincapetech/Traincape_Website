const fs = require('fs');
const path = require('path');

const dirs = [
  'src/assets/products/crm',
  'src/assets/products/hrms',
  'src/assets/products/payroll'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, '..', dir), { recursive: true });
});

// 1x1 transparent PNG base64 representation
const tinyPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');

const files = {
  'src/assets/products/crm/logo.png': tinyPng,
  'src/assets/products/crm/hero.png': tinyPng,
  'src/assets/products/crm/dashboard.png': tinyPng,

  'src/assets/products/hrms/logo.png': tinyPng,
  'src/assets/products/hrms/hero.png': tinyPng,
  'src/assets/products/hrms/dashboard.png': tinyPng,

  'src/assets/products/payroll/logo.png': tinyPng,
  'src/assets/products/payroll/hero.png': tinyPng,
  'src/assets/products/payroll/dashboard.png': tinyPng,
};

Object.entries(files).forEach(([file, content]) => {
  fs.writeFileSync(path.join(__dirname, '..', file), content);
});

console.log('Product showcase asset placeholders initialized successfully!');
