# GarnerGuitar — Online Guitar Course Platform

The course platform behind [garnerguitar.com](https://garnerguitar.com): structured guitar courses with video lessons, Stripe payments, and gated content — built for my own guitar teaching studio.

## Why it's interesting

This isn't a demo storefront — it's a real payments-to-content pipeline I run for actual students. A free course works with no account at all; paid courses are gated server-side (`getServerSideProps` checks a `user_purchases` table before rendering a lesson), purchases flow through Stripe Checkout with signature-verified webhooks, and videos are served through Cloudflare Stream with short-lived signed URLs so paid content can't be hotlinked. It also handles the messy real-world case: guest checkout, where someone buys before creating an account and their purchase is linked to the account they make later by email.

## Features

- **Course catalog** — categories (Beginner to Advanced, Jazz, Young Beginner) with per-course lesson menus and prev/next navigation
- **Free + paid tiers** — Guitar Basics is free with no auth; paid courses require login and a purchase record
- **Stripe Checkout** — server-created checkout sessions, webhook (`checkout.session.completed`) writes the purchase, duplicate-purchase guards on both ends
- **Guest checkout** — buy without an account; Stripe collects the email, and purchases are linked when an account with that email signs up (`/api/link-purchases`, `/api/create-account-from-purchase`)
- **Gated lessons** — access checked in `getServerSideProps`; unauthenticated users are redirected to login, unpurchased users to the purchase page
- **Protected video** — Cloudflare Stream with RS256-signed, expiring playback URLs
- **Markdown lesson content** — lessons stored in Supabase and rendered with `react-markdown` (+ GFM, raw HTML)
- **Auth** — Supabase Auth with SSR cookie sessions (`@supabase/ssr`) refreshed in Next.js middleware

## Tech Stack

- **Next.js 14** (Pages Router) + **TypeScript**
- **Supabase** — Postgres (courses, lessons, user_purchases), Auth, Storage, Row Level Security (see `supabase/migrations/`)
- **Stripe** — Checkout sessions + webhooks (raw-body signature verification via `micro`)
- **Cloudflare Stream** — video hosting with signed URLs
- **styled-components** + SCSS globals, custom theme
- Deployed on **Netlify**

## Architecture

```
Purchase flow
  purchase page → POST /api/checkout → Stripe Checkout (hosted)
    → webhook /api/webhooks/stripe (verifies signature, service-role client)
    → insert into user_purchases (user_id, or email-only for guests)
    → success page → course unlocked

Lesson access
  /courses/[category]/[course]/[lesson]
    → getServerSideProps: fetch lesson from Supabase
    → free course? render
    → paid: no session → /login, no purchase → /purchase
    → video IDs exchanged for signed Cloudflare Stream URLs
```

Key directories:

```
pages/courses/[category]/[course]/   # dynamic course/lesson/purchase/success routes
pages/api/                           # checkout, stripe webhook, purchase linking
lib/supabase/                        # browser/server/middleware clients + types
lib/stripe/                          # client + server Stripe instances
lib/cloudflare/                      # signed Stream URL generation
supabase/migrations/                 # schema + RLS policies
scripts/                             # content migration (TSX → Markdown in Supabase)
```

> The platform is mid-migration from an earlier static content system (`data/courseData.ts` + per-lesson TSX pages) to the Supabase-backed dynamic routes — both currently coexist in the codebase.

## Screenshots

<!-- TODO: capture and add screenshots
  - Homepage hero
  - Course catalog / courses index
  - A free lesson page (Guitar Basics) with sidebar menu
  - Purchase page for a paid course
  - Stripe Checkout hand-off
  - A gated video lesson playing
-->

_Screenshots coming soon._

## Getting Started

```bash
npm install
npm run dev      # localhost:3000 (with Node inspector)
npm run build
npm run start
```

Requires Supabase, Stripe, and Cloudflare Stream credentials — see `.env` (Supabase URL/keys, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, Cloudflare account + Stream signing keys). `PREVIEW_MODE=true` bypasses RLS to preview unpublished content locally.
