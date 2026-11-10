# Gerald Royale

A small 3D goose auto-battler that runs in the browser. Lead Gerald and his flock against Captain Hiss.

## Play

Open `index.html` in a browser (Chrome, Edge, Firefox or Safari). Everything is in that one file; it loads Three.js from a CDN, so it needs an internet connection.

To host it: in the repository's GitHub settings, open **Pages**, choose "Deploy from a branch", and pick the branch with `index.html` and the `/ (root)` folder. The game is then at `https://<user>.github.io/goose-royale/`.

## How to play

1. Start a New Game from the title screen (or Continue a saved run).
2. Buy geese in the shop and drag them onto your blue half. The Flock counter shows how many can fight; extras wait on the bench. Reroll the shop for 1 gold.
3. Press **FIGHT!** (or Space) and watch the battle.
4. Buy 3 of the same goose to merge them into a stronger one (3 level 2s make a level 3).
5. Win 10 battles before you lose your 3 hearts. The 10th win is a final boss battle against Captain Hiss's Grand Armada. Round 5 is a boss battle too.

Choose a difficulty when you start: Chick (5 hearts, gentler rivals), Goose (normal) or Swan (hard). A first game shows short tips.

Flock bonuses: put 2 geese of the same kind in your fighting flock and that kind gets a bonus (for example 2 Brutes get +20% health). Rival flocks get bonuses too.

The Goose Book on the title screen collects every goose you have owned or met, with stars for the best level you reached.

Every 3 rounds Gerald finds a Golden Feather: pick one of three power-ups. Saving gold earns a bonus of +1 per 5 gold kept (up to +3). Progress saves automatically in the browser.

## Modes, badges and events

- **Pond events.** Between some rounds a quick choice card shows up: a lost gosling (free goose), the bread stall (pay gold for a heart), a mystery egg, a rival scout (the next rivals start hurt), the wise old heron (pay to level up a goose) or something shiny (gold, or a braver Gerald for one battle).
- **Pond Rules.** Once you have reached round 5, the difficulty screen also lets you pick a twist for the run: Tiny Flock, Rich Pond, Wild Shop, Giant Hiss, Speedy Pond or Mirror Match (or Classic). Champion wins are counted per difficulty and rule.
- **Endless.** After you become champion you can keep playing, and once any run is won the title screen has an Endless button. Rounds go on forever with a Golden Feather every 3 rounds (gifts once Gerald has every power-up), a boss every 5 rounds (beating one gives a heart back) and your best round saved.
- **Daily Pond.** One seeded run per day on Goose difficulty with a rule of the day: the same shop, rivals, feathers and events for everyone. The title screen shows today's best and your daily streak.
- **Badges and Gerald's Wardrobe.** 23 badges with goals that last across runs (win on each difficulty, own a level 3 goose, merge 10 times in one run, reach round 15 in Endless, ...). Each badge unlocks a hat, scarf, cape or honk ring color for Gerald. Open Wardrobe on the title screen to see the goals and dress him up.

Controls: drag geese to move them, tap or click a goose to see it and sell it, drag empty space (or use the arrow buttons, Q/E, arrow keys) to turn the camera, scroll to zoom. Works on phones in portrait and landscape.

## Geese

| Goose | Cost | Unlocks | Role |
|---|---|---|---|
| Gerald | hero | start | Melee leader. Mighty Honk hits all nearby enemies. Grows stronger each round. |
| Brute | 3 | round 1 | Tank with lots of HP. |
| Honker | 3 | round 1 | Ranged sound-wave attacks. |
| Sprinter | 2 | round 1 | Fast, quick pecks, low HP. |
| Nurse | 3 | round 1 | Heals the most hurt ally. |
| Golden Goose | 3 | round 2 | Weak fighter; gives bonus gold if she survives a battle. |
| Egg Bomber | 4 | round 3 | Lobs eggs that splash an area. |
| Ninja | 4 | round 4 | Leaps behind the enemy at the start; critical pecks. |
| Drummer | 4 | round 5 | Nearby allies attack faster. |

Sound effects and music are synthesized in the browser (no audio files). The mute button is in the top bar.
