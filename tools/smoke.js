// Smoke test: title -> new game -> buy -> 3 simulated rounds, at desktop and phone size.
// Usage: node tools/smoke.js [outDirForScreenshots]
const { open } = require('./harness');
const out = process.argv[2];
(async () => {
  let failed = false;
  for (const [name, context] of [['desktop', { viewport: { width: 1280, height: 800 } }], ['phone', { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }]]) {
    const { browser, page: p, errors } = await open({ context });
    if (out) await p.screenshot({ path: `${out}/${name}-title.png` });
    await p.click('#newBtn'); await p.click('.mode >> nth=1'); await p.waitForTimeout(400);
    for (let r = 0; r < 3; r++) {
      await p.evaluate(() => { const g = window.__game; for (let i = 0; i < 5; i++) g.buy(i); });
      if (out && r === 1) { await p.waitForTimeout(600); await p.screenshot({ path: `${out}/${name}-setup.png` }); }
      await p.evaluate(() => window.__game.simulate());
      if (out && r === 0) await p.screenshot({ path: `${out}/${name}-result.png` });
      await p.click('#ovBtns button'); await p.waitForTimeout(150);
      if (await p.isVisible('#perkScreen')) await p.click('.perk >> nth=0');
    }
    const sw = await p.evaluate(() => document.documentElement.scrollWidth);
    const vw = await p.evaluate(() => innerWidth);
    console.log(name, 'round', await p.evaluate(() => window.__game.round), 'scrollWidth ok:', sw <= vw, 'errors:', errors);
    if (errors.length || sw > vw) failed = true;
    await browser.close();
  }
  process.exit(failed ? 1 : 0);
})();
