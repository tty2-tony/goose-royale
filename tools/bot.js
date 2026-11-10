// Balance bot: plays full runs with a simple greedy strategy using window.__game.simulate().
// Usage: MODE=0|1|2 (Chick|Goose|Swan) [RULE=tiny|rich|wild|giant|speedy|mirror] node tools/bot.js [runs]
const { open } = require('./harness');
const RUNS = +(process.argv[2] || 2);
(async () => {
  const { browser, page: p, errors } = await open();
  const summary = [];
  for (let run = 0; run < RUNS; run++) {
    await p.click('#newBtn');
    if (process.env.RULE) await p.evaluate(r => window.__game.pickRule(r), process.env.RULE); // Pond Rule: tiny|rich|wild|giant|speedy|mirror
    await p.click('.mode >> nth=' + (process.env.MODE || 1)); await p.waitForTimeout(200);
    let last = '';
    for (let i = 0; i < 30; i++) {
      await p.evaluate(() => {
        const g = window.__game;
        for (let k = 0; k < 12; k++) {
          const owned = t => g.units.filter(u => u.team === 'player' && u.type === t && u.level === 1).length;
          const opts = g.shop.map((s, i) => ({ s, i })).filter(o => !o.s.sold && g.TYPES[o.s.type].cost <= g.gold);
          if (!opts.length) { if (g.gold >= 4) { g.reroll(); continue; } break; }
          opts.sort((a, b) => (owned(b.s.type) - owned(a.s.type)) || (g.TYPES[b.s.type].cost - g.TYPES[a.s.type].cost));
          const before = g.gold; g.buy(opts[0].i); if (g.gold === before) break;
        }
      });
      const r = await p.evaluate(() => window.__game.simulate());
      last = `round ${r.round} wins ${r.wins} hearts ${r.hearts}`;
      const title = await p.textContent('#ovTitle');
      if (/Champion|Game over/.test(title)) { last += ' ' + title; break; }
      await p.click('#ovBtns button'); await p.waitForTimeout(80);
      if (await p.isVisible('#perkScreen')) await p.click('.perk >> nth=0');
    }
    summary.push(last); console.log('run', run, last);
    await p.evaluate(() => window.__game.showTitle());
  }
  console.log('errors', errors.slice(0, 5));
  await browser.close();
})();
