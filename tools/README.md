# Dev tools (not part of the game)

`npm`-free: `node_modules` holds a local copy of three@0.160.0 (gitignored) so tests run offline. If it is missing, run `npm i --prefix tools three@0.160.0`.

- `node tools/smoke.js [screenshotDir]` - title, new game, 3 simulated rounds at desktop and phone size; exits 1 on page errors or horizontal overflow.
- `MODE=0|1|2 [RULE=tiny|rich|wild|giant|speedy|mirror] node tools/bot.js [runs]` - greedy bot plays full runs on Chick/Goose/Swan to check balance, optionally with a Pond Rule.

Both rely on the `window.__game` test hook in index.html (`simulate()`, `buy()`, `reroll()`, `showTitle()`, ...). Keep that hook working.
