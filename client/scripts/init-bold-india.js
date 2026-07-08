const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'src/assets/portfolio/bold-india-group');
fs.mkdirSync(targetDir, { recursive: true });

// 1x1 transparent PNG base64 representation
const tinyPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');

fs.writeFileSync(path.join(targetDir, 'desktop.png'), tinyPng);
fs.writeFileSync(path.join(targetDir, 'mobile.png'), tinyPng);
fs.writeFileSync(path.join(targetDir, 'logo.png'), tinyPng);

console.log('Bold India Group placeholders created!');
