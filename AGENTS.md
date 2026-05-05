# AGENTS.md — Bubby Landing Page

## Project goal
Build the Bubby landing page as a **separate Vite + React + TypeScript repo**. This is not the main Bubby app repo.

The final page should be a faithful working implementation of `public/assets/reference/landing-page-preview.png`, not a generic landing page.

## Product positioning
Bubby is a stress-free meal planning companion. The page must make this clear:

- Bubby helps users decide what to eat.
- Bubby reduces meal-planning stress and decision fatigue.
- Bubby supports easy check-ins and low-pressure consistency.
- Bubby is not just another habit tracker.
- The virtual pet layer exists to make healthy routines feel emotionally engaging and easy to return to.

## Visual target
Use these files as the source of truth:

- `public/assets/reference/landing-page-preview.png` — final visual concept target.
- `public/assets/reference/landing-page-section-map.png` — annotated section boundaries.
- `public/assets/reference/bubby-sprite-sheet-reference.png` — original Bubby sprite reference.
- `public/assets/sprites/bubby-animation-map.json` — sprite animation map.

Do not use the preview screenshot as a page background. Rebuild the design with semantic HTML, React components, CSS, and the provided assets.

## Implementation constraints
- Use the existing Vite React TypeScript project.
- Keep dependencies minimal.
- CSS-only animation is preferred.
- Use `image-rendering: pixelated` for Bubby sprites.
- Use public asset runtime paths such as `/assets/sprites/bubby_states/idle/idle_01.png`.
- Do not use `public/assets/...` in JSX/CSS runtime paths.
- Do not add a backend, auth, database, or real waitlist integration.
- Buttons may be placeholders, but they should look and behave like real UI.
- The page must be responsive.

## Expected file organization
Prefer this structure:

```txt
src/
  App.tsx
  main.tsx
  styles.css
  components/
    NavBar.tsx
    BubbySprite.tsx
    Hero.tsx
    ProblemCards.tsx
    FeatureCards.tsx
    MealDemo.tsx
    HowItWorks.tsx
    PersonalityShowcase.tsx
    FinalCTA.tsx
  data/
    bubbyContent.ts
    bubbySprites.ts
```

## Required checks
Before finishing, run:

```powershell
npm run build
```

If available and useful, also run:

```powershell
npm run dev
```

## Definition of done
- The app builds without TypeScript or Vite errors.
- The page visually follows the provided concept.
- The hero has a large pastel LCD/Tamagotchi-style panel with interactive Bubby buttons.
- Bubby sprite states animate or swap when buttons are pressed.
- The product message emphasizes stress-free meal planning and simple habits.
- The layout works on desktop and mobile.
- The final response includes:
  - What changed
  - Files modified
  - Checks run
  - Known risks or follow-up work
