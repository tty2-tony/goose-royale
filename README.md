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

Flock bonuses: put 2 geese of the same role in your fighting flock and that role gets a bonus (for example 2 Tanks, any mix of Brutes and Guard Geese, get +20% health). 4 of a role give a stronger bonus (+45% health). Rival flocks get bonuses too.

Rival flocks: every round you meet a different flock with its own favorite geese, a dressed-up Captain Hiss and one simple battle rule, shown under the top bar (for example the Frost Flock makes your geese slower for the first 4 seconds, and 2 of the Reed Rascals hide behind your flock). Boss rounds and the final battle bring a giant Captain Hiss. After round 10 the rivals rotate and their flocks keep getting bigger and stronger.

The Goose Book on the title screen collects every goose you have owned or met, with stars for the best level you reached.

Every 3 rounds Gerald finds a Golden Feather: pick one of three power-ups. Saving gold earns a bonus of +1 per 5 gold kept (up to +3). Progress saves automatically in the browser.

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
| Guard Goose | 3 | round 2 | Tank. Takes part of the hits aimed at friends next to her; her shield blocks some of it. |
| Snow Goose | 3 | round 3 | Ranged. Snowballs make enemies move and attack slower for a moment. |
| Mother Goose | 4 | round 5 | Family. When first hurt below half health, goslings hatch and fight for that battle. |
| Trumpeter | 4 | round 6 | Loud. Every few seconds a blast makes nearby enemies dizzy (they stop for a moment). |
| Gobbler | 4 | round 8 | Hungry. Gets stronger and heals each time an enemy goose is knocked out. |

Sound effects and music are synthesized in the browser (no audio files). The mute button is in the top bar.
