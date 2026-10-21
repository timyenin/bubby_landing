# AGENTS.md — Bubby waitlist page

## Project goal
The public waitlist page for Bubby, a **separate Vite + React + TypeScript repo** from the iOS app (`timyenin/bubby`). It should look and behave like the app, so people meet the same Bubby they will download.

## Source of truth: the app
The page copies the app; it never redraws it.

- Sprites: the app's 64x64 frames in `ios/Bubby/Bubby/Assets.xcassets/bubby_*`, listed in `BubbyProductionSpriteManifest.swift`.
- Animation timing: `BubbyIdleAnimation.swift` (idle holds 3-7 s, then a 150-300 ms blink or glance) and `BubbySpriteAnimationCue.framesPerSecond` (12 fps for everything else). Ported in `src/data/bubbySprites.ts`.
- Colors: the ten fills in `BubbyColorOption.swift`, applied with the app's recolor rule (`BubbySpriteTint.swift`), ported in `src/lib/bubbyTint.ts`.
- Theme: the light pink and dark mint tokens in `BubbyTheme.swift`; Dogica is the pixel font.
- Rooms and food pictures: `scene_*` and `bubby_photo_*` in the app's asset catalog.
- Copy: the App Store screenshots and the app's own wording. Only claim features the app ships.

Run `scripts/sync-app-art.sh` to recopy the art from the app repo (defaults to `../bubby` at `origin/main`).

## Design rules (from the app)
- Flat colors and 2px borders. No gradients, drop shadows or glassmorphism.
- Pixel art always uses `image-rendering: pixelated`.
- Dogica for headings, labels and chat; the system font for paragraphs.
- Use public runtime paths such as `/assets/bubby/bubby_idle_neutral.png`, never `public/assets/...`.
- Respect `prefers-reduced-motion`: Bubby stays on its first frame.
- The page must work at phone width.

## Waitlist and launch
- The form posts to `/api/waitlist` (Vercel function), which emails each signup to `WAITLIST_TO_EMAIL` through Resend. See `README.md`.
- `VITE_BUBBY_LAUNCH_STATUS=live` swaps the waitlist forms for an App Store link and updates the status pill, nav button, FAQ and closing section.
- Pushing to GitHub deploys through Vercel; don't push unless a deploy is intended.

## Files

```txt
scripts/sync-app-art.sh     copies sprites, rooms, food pictures, font and icon from the app
src/
  App.tsx                   page order + shared Bubby color
  styles.css                all styles; tokens at the top
  components/               one file per section, plus BubbySprite, RoomScene, WaitlistForm, PixelArt
  data/bubbyContent.ts      all page copy
  data/bubbySprites.ts      frames + timing (mirrors the app)
  data/bubbyColors.ts       the ten Bubby colors
  lib/bubbyTint.ts          recolor port
  lib/launch.ts             in_review / live switch
```

## Required checks

```sh
npm run lint
npm run build
```
