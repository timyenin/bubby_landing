# bubby landing

Standalone React + Vite landing page for Bubby, a stress-free meal planning companion.

## waitlist email setup

The waitlist form posts to `/api/waitlist`, a Vercel serverless function that sends a notification email through Resend.

1. Create a Resend API key.
2. In Vercel Project Settings -> Environment Variables, add `RESEND_API_KEY`.
3. Optionally add `WAITLIST_TO_EMAIL` and `WAITLIST_FROM_EMAIL`.
4. Test locally with:

```powershell
npx vercel dev
```

5. Deploy by pushing to GitHub.

Use `.env.example` as the local reference. Do not commit real `.env` files or API keys.

## development

```powershell
npm install
npm run dev
```

## checks

```powershell
npm run lint
npm run build
```
