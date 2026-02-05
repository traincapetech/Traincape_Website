#!/usr/bin/env node
/**
 * Make CRA build idempotent for react-snap.
 * - Ensure build directory is cleaned before each build.
 */
const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");

function rmrf(target) {
  if (!fs.existsSync(target)) return;
  fs.rmSync(target, { recursive: true, force: true });
}

rmrf(buildDir);

console.log(`[prepare-build] Cleaned: ${buildDir}`);

