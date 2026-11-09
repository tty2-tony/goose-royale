# Gerald Royale

A small 3D goose auto-battler that runs in the browser. Lead Gerald and his flock against Captain Hiss.

## Play

Open `index.html` in a browser (Chrome, Edge, Firefox or Safari). Everything is in that one file; it loads Three.js from a CDN, so it needs an internet connection.

To host it: in the repository's GitHub settings, open **Pages**, choose "Deploy from a branch", and pick the branch with `index.html` and the `/ (root)` folder. The game is then at `https://<user>.github.io/goose-royale/`.

## How to play

1. Buy geese from the shop (you start with 10 gold).
2. Drag them around on your (blue) half of the board. Right-click a goose to sell it back.
3. Press **FIGHT!** and watch the battle. Right-drag to turn the camera, scroll to zoom.

## Geese

| Goose | Cost | Role |
|---|---|---|
| Gerald | hero | Melee leader. Mighty Honk hits all nearby enemies every few seconds. |
| Brute | 3 | Tank with lots of HP. |
| Honker | 3 | Ranged sound-wave attacks. |
| Sprinter | 2 | Fast, quick pecks, low HP. |
| Nurse | 3 | Heals the most hurt ally. |

## Roadmap

- Step 1 (done): board, goose types, shop, drag-to-place, auto-battle against a simple AI team.
- Step 2: rounds, gold income, shop rerolls, merging copies of a goose to level it up, harder AI teams.
- Step 3: polish, sound, title screen.
