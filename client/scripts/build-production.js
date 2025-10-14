#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting production build process...');

// Step 1: Clean previous build
console.log('🧹 Cleaning previous build...');
try {
  if (fs.existsSync('build')) {
    fs.rmSync('build', { recursive: true, force: true });
  }
} catch (error) {
  console.warn('Warning: Could not clean build directory:', error.message);
}

// Step 2: Set production environment
process.env.NODE_ENV = 'production';
process.env.GENERATE_SOURCEMAP = 'false';

// Step 3: Build the application
console.log('🔨 Building application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 4: Verify build integrity
console.log('🔍 Verifying build integrity...');
const buildPath = path.join(__dirname, '..', 'build');
const staticPath = path.join(buildPath, 'static');

if (!fs.existsSync(buildPath)) {
  console.error('❌ Build directory not found!');
  process.exit(1);
}

if (!fs.existsSync(staticPath)) {
  console.error('❌ Static directory not found!');
  process.exit(1);
}

// Check for main files
const requiredFiles = [
  'index.html',
  'static/js',
  'static/css'
];

for (const file of requiredFiles) {
  const filePath = path.join(buildPath, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Required file/directory missing: ${file}`);
    process.exit(1);
  }
}

// Step 5: Check for chunk files
const jsPath = path.join(staticPath, 'js');
const cssPath = path.join(staticPath, 'css');

if (fs.existsSync(jsPath)) {
  const jsFiles = fs.readdirSync(jsPath);
  const chunkFiles = jsFiles.filter(file => file.includes('chunk'));
  
  if (chunkFiles.length === 0) {
    console.warn('⚠️  No chunk files found - this might indicate a build issue');
  } else {
    console.log(`✅ Found ${chunkFiles.length} chunk files`);
  }
}

// Step 6: Generate build report
console.log('📊 Generating build report...');
const buildReport = {
  timestamp: new Date().toISOString(),
  buildSize: getDirectorySize(buildPath),
  files: {
    js: fs.existsSync(jsPath) ? fs.readdirSync(jsPath).length : 0,
    css: fs.existsSync(cssPath) ? fs.readdirSync(cssPath).length : 0
  }
};

fs.writeFileSync(
  path.join(buildPath, 'build-report.json'),
  JSON.stringify(buildReport, null, 2)
);

console.log('✅ Build verification completed!');
console.log('📁 Build size:', formatBytes(buildReport.buildSize));
console.log('📄 Build report saved to build-report.json');

function getDirectorySize(dirPath) {
  let size = 0;
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      size += getDirectorySize(filePath);
    } else {
      size += stats.size;
    }
  }
  
  return size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
