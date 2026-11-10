// Shared test harness: opens index.html in headless Chromium with Three.js served locally.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const THREE_JS = fs.readFileSync(path.join(__dirname, 'node_modules/three/build/three.module.js'));
async function open(opts = {}) {
  const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const ctx = await browser.newContext(opts.context || { viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });
  await page.route('**/three.module.js', r => r.fulfill({ contentType: 'application/javascript', body: THREE_JS }));
  await page.route('**/fonts.googleapis.com/**', r => r.abort());
  await page.goto('file://' + path.join(ROOT, opts.file || 'index.html'));
  await page.waitForTimeout(1500);
  return { browser, page, errors };
}
module.exports = { open, ROOT };
