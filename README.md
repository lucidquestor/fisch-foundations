# Fisch Foundations

Marketing site for [Fisch Foundations](https://fischfoundations.com) — a licensed general contractor serving the NY · NJ · CT tri-state area.

Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, optimized for deployment on **Vercel**.

## Project structure

```
src/
├── app/              # Next.js App Router (pages, layout, API routes)
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections (Hero, Services, Contact, etc.)
│   └── ui/           # Reusable UI primitives
├── content/          # All site copy and data (single source of truth)
└── lib/              # Utilities
```

All marketing copy lives in `src/content/site.ts` — update text there without touching components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra config needed.
4. Add your custom domain (`fischfoundations.com`) in Project Settings → Domains.

### Contact form (Resend)

The form posts to `/api/contact` and sends email via [Resend](https://resend.com).

1. Create a free account at [resend.com](https://resend.com) and get an API key.
2. In Vercel → **Project Settings → Environment Variables**, add:

| Variable | Value |
|----------|-------|
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_EMAIL` | `Quote@FischFoundations.com` |
| `RESEND_FROM_EMAIL` | `Fisch Foundations <onboarding@resend.dev>` (testing) or `Fisch Foundations <quote@fischfoundations.com>` after verifying your domain in Resend |

3. Redeploy after adding env vars.

For local testing, copy `.env.example` to `.env.local` and fill in the values.

## Scripts

| Command       | Description          |
|---------------|----------------------|
| `npm run dev` | Local dev server     |
| `npm run build` | Production build   |
| `npm run start` | Start production   |
| `npm run lint`  | ESLint             |
