# GarnerGuitar Setup Guide

Complete setup instructions for the Supabase-powered course architecture.

---

## Prerequisites

- Node.js 18+
- npm or yarn
- A Stripe account
- A Supabase account (free tier works)
- (Optional) Cloudflare account for video hosting

---

## 1. Supabase Setup

### 1.1 Create Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `garnerguitar` (or your preference)
   - **Database Password**: Generate a strong password (save this!)
   - **Region**: Choose closest to your users
5. Click "Create new project" and wait for provisioning (~2 minutes)

### 1.2 Get API Keys

1. In your Supabase dashboard, go to **Settings → API**
2. Copy these values for your `.env.local`:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)

### 1.3 Run Database Migrations

Option A: **Using Supabase CLI** (recommended)

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project (get project ref from dashboard URL)
supabase link --project-ref YOUR_PROJECT_REF

# Run migrations
supabase db push
```

Option B: **Using SQL Editor**

1. Go to **SQL Editor** in Supabase dashboard
2. Copy contents of `supabase/migrations/001_initial_schema.sql`
3. Paste and click "Run"
4. Repeat for `supabase/migrations/002_storage_policies.sql`

### 1.4 Configure Auth

1. Go to **Authentication → Providers**
2. Ensure **Email** is enabled (should be by default)
3. Configure email settings:
   - Go to **Authentication → Email Templates**
   - Customize confirmation and password reset emails if desired
4. Go to **Authentication → URL Configuration**
   - Set **Site URL**: `http://localhost:3000` (for dev)
   - Add **Redirect URLs**:
     - `http://localhost:3000/**`
     - `https://your-production-domain.com/**`

### 1.5 Create Storage Bucket

1. Go to **Storage** in Supabase dashboard
2. Click "New bucket"
3. Enter:
   - **Name**: `lesson-images`
   - **Public bucket**: OFF (unchecked)
4. Click "Create bucket"

The RLS policies from the migration will handle access control.

---

## 2. Stripe Setup

### 2.1 Create Account & Get Keys

1. Go to [stripe.com](https://stripe.com) and create/login to account
2. Go to **Developers → API keys**
3. Copy for your `.env.local`:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

> **Note**: Use test keys (starting with `pk_test_` and `sk_test_`) for development.

### 2.2 Create Products

1. Go to **Products** in Stripe dashboard
2. Click "Add product" for each paid course:

**Course 2: Technique, Reading & Theory**
- Name: `Technique, Reading & Theory`
- Description: `Part 2 of Beginner to Advanced guitar course`
- Pricing: One-time, $49.99 (or your price)
- Click "Save product"
- Copy the **Price ID** (starts with `price_`)

**Course 3: Blues & CAGED System**
- Name: `Blues & CAGED System`
- Description: `Part 3 of Beginner to Advanced guitar course`
- Pricing: One-time, $49.99 (or your price)
- Click "Save product"
- Copy the **Price ID**

### 2.3 Set Up Webhook

1. Go to **Developers → Webhooks**
2. Click "Add endpoint"
3. Enter:
   - **Endpoint URL**: `https://your-domain.com/api/webhooks/stripe`
   - For local testing: Use [Stripe CLI](#local-webhook-testing) instead
4. Select events:
   - `checkout.session.completed`
5. Click "Add endpoint"
6. Copy **Signing secret** → `STRIPE_WEBHOOK_SECRET`

### 2.4 Local Webhook Testing

For local development, use Stripe CLI:

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Copy the webhook signing secret it prints
# Put in .env.local as STRIPE_WEBHOOK_SECRET
```

Keep this terminal running while testing purchases locally.

---

## 3. Cloudflare Stream Setup (Optional)

Skip this section if you're not hosting videos or using YouTube embeds instead.

### 3.1 Enable Stream

1. Log into [Cloudflare dashboard](https://dash.cloudflare.com)
2. Go to **Stream** in the sidebar
3. If not enabled, follow prompts to enable (requires billing)

### 3.2 Get API Credentials

1. Go to **My Profile → API Tokens**
2. Click "Create Token"
3. Use "Custom token" template:
   - **Token name**: `GarnerGuitar Stream`
   - **Permissions**: `Stream:Edit`
4. Click "Continue to summary" → "Create Token"
5. Copy token → `CLOUDFLARE_STREAM_API_TOKEN`

6. Get your Account ID:
   - Go to any domain in your Cloudflare account
   - Find "Account ID" in the right sidebar
   - Copy → `CLOUDFLARE_ACCOUNT_ID`

### 3.3 Create Signing Key (for signed URLs)

```bash
curl -X POST "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/stream/keys" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json"
```

Response contains:
- `id` → `CLOUDFLARE_STREAM_KEY_ID`
- `pem` → `CLOUDFLARE_STREAM_SIGNING_KEY` (the private key)

### 3.4 Upload Videos

```bash
# Upload a video
curl -X POST "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/stream" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -F "file=@/path/to/video.mp4"

# Or via URL
curl -X POST "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/stream/copy" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/video.mp4"}'
```

Save the returned video IDs for use in lesson content.

---

## 4. Environment Variables

### 4.1 Create `.env.local`

```bash
cp .env.example .env.local
```

### 4.2 Fill in Values

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Cloudflare Stream (optional)
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_STREAM_API_TOKEN=
CLOUDFLARE_STREAM_KEY_ID=
CLOUDFLARE_STREAM_SIGNING_KEY=

# Preview mode (set true for dev-preview branch)
PREVIEW_MODE=false
```

---

## 5. Seed Course Data

### 5.1 Add Courses to Database

Run this SQL in Supabase SQL Editor:

```sql
-- Insert courses
INSERT INTO courses (slug, category_slug, title, description, part, is_free, price_cents, stripe_price_id)
VALUES
  ('guitar-basics', 'beginner-to-advanced', 'Guitar Basics', 'Learn the fundamentals of guitar playing.', 1, true, NULL, NULL),
  ('technique-reading-theory', 'beginner-to-advanced', 'Technique, Reading & Theory', 'Build your technique and learn to read music.', 2, false, 4999, 'price_YOUR_PRICE_ID_HERE'),
  ('blues-caged-system', 'beginner-to-advanced', 'Blues & CAGED System', 'Master blues guitar and the CAGED system.', 3, false, 4999, 'price_YOUR_PRICE_ID_HERE');
```

**Replace** `price_YOUR_PRICE_ID_HERE` with your actual Stripe Price IDs from step 2.2.

### 5.2 Verify Data

```sql
SELECT * FROM courses;
```

---

## 6. Content Migration

### 6.1 Prepare Lesson Content

For each lesson, you need:
- **title**: Lesson name
- **slug**: URL-friendly identifier (e.g., `guitar-anatomy`)
- **content**: Markdown content
- **sort_order**: Display order (0, 1, 2, ...)

### 6.2 Insert Lessons

Example for Course 1 (Guitar Basics):

```sql
-- Get the course ID first
SELECT id FROM courses WHERE slug = 'guitar-basics';
-- Let's say it returns: 123e4567-e89b-12d3-a456-426614174000

-- Insert lessons
INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
VALUES
  ('123e4567-e89b-12d3-a456-426614174000', 'introduction', 'Introduction', '## Welcome to Guitar Basics

This course will teach you the fundamentals...', 0, true),

  ('123e4567-e89b-12d3-a456-426614174000', 'guitar-anatomy', 'Guitar Anatomy', '## Parts of the Guitar

Before we start playing, let''s learn the parts of the guitar...', 1, true);
```

### 6.3 Using the Migration Script

For bulk migration from existing TSX files:

```bash
# Edit the script with your source/dest paths
nano scripts/migrate-content.ts

# Run it
npx ts-node scripts/migrate-content.ts
```

### 6.4 Upload Paid Course Images

```bash
# Edit the script with your image paths
nano scripts/upload-images.ts

# Run it
npx ts-node scripts/upload-images.ts
```

---

## 7. Deploy to Production

### 7.1 Netlify Setup

1. Connect your GitHub repo to Netlify
2. Go to **Site settings → Environment variables**
3. Add all variables from `.env.local` (use production keys!)

### 7.2 Branch-Specific Config

In `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

# Production - normal RLS
[context.production.environment]
  PREVIEW_MODE = "false"

# Feature branches - also normal RLS
[context.branch-deploy.environment]
  PREVIEW_MODE = "false"

# Dev-preview branch - see all content
[context.dev-preview.environment]
  PREVIEW_MODE = "true"
```

For the `dev-preview` branch, also add `SUPABASE_SERVICE_ROLE_KEY` in Netlify dashboard.

### 7.3 Update Supabase Auth URLs

1. Go to Supabase **Authentication → URL Configuration**
2. Update **Site URL** to your production domain
3. Add production domain to **Redirect URLs**

### 7.4 Update Stripe Webhook

1. Go to Stripe **Developers → Webhooks**
2. Add production endpoint: `https://your-domain.com/api/webhooks/stripe`
3. Update `STRIPE_WEBHOOK_SECRET` in Netlify with production signing secret

---

## 8. Verification Checklist

Test each flow:

- [ ] **Free course**: Visit `/courses/beginner-to-advanced/guitar-basics` without auth → content loads
- [ ] **Paid course redirect**: Visit paid course without auth → redirects to login
- [ ] **Login flow**: Sign up, verify email, log in successfully
- [ ] **Purchase flow**: Log in → visit paid course → redirects to purchase page → complete Stripe checkout → access granted
- [ ] **Webhook**: After purchase, check `user_purchases` table has new record
- [ ] **Image protection**: Try direct Supabase Storage URL for paid image without auth → denied
- [ ] **Preview mode**: On `dev-preview` branch, unpublished content is visible

---

## Troubleshooting

### "Authentication required" on paid course
- Check cookies are being set correctly
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct

### Webhook not updating purchases
- Check Stripe CLI is forwarding (local) or webhook endpoint is correct (production)
- Check Netlify function logs for errors
- Verify `STRIPE_WEBHOOK_SECRET` matches

### Images not loading
- For free courses: Check images exist in `/public/images/`
- For paid courses: Check `lesson-images` bucket exists in Supabase Storage
- Verify storage policies were created correctly

### "Invalid API key" errors
- Double-check all environment variables
- Ensure no extra spaces or newlines in values
- Restart dev server after changing `.env.local`

---

## Quick Reference

| Service | Dashboard URL |
|---------|---------------|
| Supabase | https://app.supabase.com |
| Stripe | https://dashboard.stripe.com |
| Cloudflare | https://dash.cloudflare.com |
| Netlify | https://app.netlify.com |

| Local Command | Purpose |
|---------------|---------|
| `npm run dev` | Start dev server |
| `stripe listen --forward-to localhost:3000/api/webhooks/stripe` | Forward webhooks locally |
| `supabase db push` | Apply migrations |
