# EL CROCO

Official one-page site for **EL CROCO** — a Miami luxury art brand that happens to release music. Built to feel like a private exhibition, not a musician's homepage.

Featured release: **ORO PURO** (2026).

## Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS** — museum-white palette, ~90% neutral / 10% accent (gold, diamond, emerald, croco purple)
- **Framer Motion** — restrained scroll reveals and a slow hero cross-fade
- Fonts: Cormorant Garamond (editorial serif) + Inter (signage sans)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build (static)

```bash
npm run build    # outputs static site to ./out (with .nojekyll for Pages)
```

## Deployment — GitHub Pages

The repo ships with `.github/workflows/deploy.yml`. On push to `main`:

1. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
2. Push to `main`. The site builds and deploys to
   `https://reubenitis.github.io/ElCroco/`.

The base path `/ElCroco` is set automatically for production builds in
`next.config.mjs`. If you rename the repo or move to a custom/apex domain,
set `NEXT_PUBLIC_BASE_PATH` accordingly (use `""` for a root domain).

## Things to finish

All marked with `REPLACE` in [`lib/data.js`](lib/data.js):

- **Streaming + social URLs** — Spotify, Apple Music, Instagram, inquiries email.
- **Croco Dice** photography is in place; swap in final retouched shots anytime.
- **Track titles** are inferred from artwork filenames — correct as needed.

## Content

All site content (album, collection, gallery, discography, links) lives in
[`lib/data.js`](lib/data.js). Optimized imagery lives in `public/img/`.
