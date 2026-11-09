# Gerald Royale

A small 3D goose auto-battler that runs in the browser. Lead Gerald and his flock against Captain Hiss.

## Play

Open `index.html` in a browser (Chrome, Edge, Firefox or Safari). Everything is in that one file; it loads Three.js from a CDN, so it needs an internet connection.

To host it: in the repository's GitHub settings, open **Pages**, choose "Deploy from a branch", and pick the branch with `index.html` and the `/ (root)` folder. The game is then at `https://<user>.github.io/goose-royale/`.

## How to play

1. Buy geese from the shop (you start with 10 gold). Reroll the shop for 1 gold.
2. Drag them onto your (blue) half of the board. The Flock counter shows how many geese can fight this round; extras wait on the bench. Tap or click a goose to see it and sell it (right-click also sells).
3. Press **FIGHT!** and watch the battle.
4. Buy 3 of the same goose and they merge into a stronger level 2 (3 level 2s make a level 3).
5. Win 10 battles before you lose your 3 hearts. Each round gives gold, a bigger flock limit and a tougher rival flock.

Turn the camera with the arrow buttons, Q/E, the arrow keys, or by dragging empty space. Scroll to zoom.

On phones and tablets: tap a goose to see it (and sell it), drag a goose to move it, swipe empty space to turn the camera, and tap ? for help. Works in portrait and landscape.

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
- Step 2 (done): rounds, hearts, gold income, shop rerolls, flock limit and bench, merging 3 copies to level up, role icons, camera turning, rival flocks that grow each round.
- Mobile support (done): touch controls and a compact phone layout.
- Step 3: polish, sound, title screen.
