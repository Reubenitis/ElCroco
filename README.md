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

## Deployment — GitHub Pages + ElCroco.com

The repo ships with `.github/workflows/deploy.yml`. On push to `main` it builds
the static site and deploys it to GitHub Pages.

**First-time setup:**

1. Create the repo `ElCroco` under the `Reubenitis` account and push `main`.
2. **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. **Settings → Pages → Custom domain → `elcroco.com`** → Save. (The
   `public/CNAME` file already pins this on every deploy.)
4. Add the DNS records below at your domain registrar.
5. Once the cert provisions (can take up to an hour), tick **Enforce HTTPS**.

**DNS records for the apex domain `elcroco.com`:**

| Type  | Host  | Value |
| ----- | ----- | ----- |
| A     | `@`   | `185.199.108.153` |
| A     | `@`   | `185.199.109.153` |
| A     | `@`   | `185.199.110.153` |
| A     | `@`   | `185.199.111.153` |
| CNAME | `www` | `reubenitis.github.io.` |

(Optionally also add the four `AAAA` records for IPv6:
`2606:50c0:8000::153` … `:8003::153`.)

The site serves from the root path — `next.config.mjs` uses no `basePath`. If
you ever drop the custom domain and serve from `reubenitis.github.io/ElCroco`
instead, set `NEXT_PUBLIC_BASE_PATH=/ElCroco` for the build.

## Things to finish

All marked with `REPLACE` in [`lib/data.js`](lib/data.js):

- **Streaming + social URLs** — Spotify, Apple Music, Instagram, inquiries email.
- **CrocoDice** photography is in place; swap in final retouched shots anytime.
- **Track titles** are inferred from artwork filenames — correct as needed.

## Content

All site content (album, collection, gallery, discography, links) lives in
[`lib/data.js`](lib/data.js). Optimized imagery lives in `public/img/`.
