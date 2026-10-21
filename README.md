# bubby landing

The waitlist page for Bubby, the pixel pet that logs your meals. It's a standalone React + Vite site, and it reuses the iOS app's own sprites, rooms, food pictures and font.

## art from the app

The art lives in the app repo. To copy it again after the app changes:

```sh
scripts/sync-app-art.sh            # uses ../bubby at origin/main
scripts/sync-app-art.sh ~/Developer/bubby main
```

## launch day

The page starts in "in App Review" mode, with waitlist forms. When the app is live, set `VITE_BUBBY_LAUNCH_STATUS=live` in Vercel and redeploy. The forms then become an App Store link.

## waitlist email setup

The waitlist form posts to `/api/waitlist`, a Vercel serverless function that emails each signup through Resend. Signups are not stored anywhere else.

1. Create a Resend API key.
2. In Vercel Project Settings -> Environment Variables, add `RESEND_API_KEY`.
3. Optionally add `WAITLIST_TO_EMAIL` and `WAITLIST_FROM_EMAIL`.
4. Test locally with:

```sh
npx vercel dev
```

5. Deploy by pushing to GitHub.

Use `.env.example` as the local reference. Do not commit real `.env` files or API keys.

## development

```sh
npm install
npm run dev
```

## checks

```sh
npm run lint
npm run build
```
