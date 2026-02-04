# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GarnerGuitar.com - An online guitar education platform built with Next.js, TypeScript, and styled-components. Features structured courses with lesson pages, video content, and educational materials.

## Commands

```bash
npm run dev      # Start dev server with Node inspector (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
```

## Architecture

### NEW: Supabase-Powered Content System

The codebase is transitioning to a Supabase-backed architecture for content:

**Database tables:**
- `courses` - Course metadata (slug, title, description, price, etc.)
- `lessons` - Lesson content in Markdown format
- `user_purchases` - Tracks which users have purchased which courses

**Content access rules:**
- Course 1 (Guitar Basics) - FREE, no auth required
- Course 2 & 3 - PAID, requires auth + purchase

**Key files:**
- `lib/supabase/` - Supabase client utilities and types
- `lib/stripe/` - Stripe client for payments
- `lib/cloudflare/` - Cloudflare Stream for video hosting
- `pages/courses/[category]/[course]/[lesson].tsx` - Dynamic lesson route
- `pages/api/webhooks/stripe.ts` - Handles Stripe purchase webhooks
- `supabase/migrations/` - Database schema and RLS policies

**Environment variables:**
- See `.env.example` for all required variables
- `PREVIEW_MODE=true` bypasses RLS to see unpublished content

### Legacy: Static Content System (data/courseData.ts)

> Note: This is being phased out in favor of Supabase.

All course content was defined in `data/courseData.ts`:
- `CoursesInterface[]` → Course categories (e.g., "Beginner to Advanced", "Jazz")
- Each category contains `CourseInterface[]` → Individual courses
- Each course contains `PagesInterface[]` → Lesson pages with title, headings, text, images

### Routing

**New dynamic routes:**
```
/courses/[category]/[course]/[lesson]  → Dynamic route fetching from Supabase
/courses/[category]/[course]/purchase  → Purchase page for paid courses
```

**Legacy static routes:**
```
/courses/beginner-to-advanced/guitar-basics/[lesson-slug]
```
Lesson pages live in `pages/courses/beginner-to-advanced/guitar-basics/`.

### Component Organization

- `components/courses/` - CourseContainer (page wrapper with nav), Menu (sidebar), CourseCard
- `components/home/` - Homepage sections (Hero, Cards, About, VideoLessons)
- `components/Header.tsx` - Fixed header with scroll-based resize animation
- `components/layout.tsx` - Main layout with meta tags

### CourseContainer Props

The prop naming is counterintuitive:
- `courseIndex` → Index of course *category* (0 = "Beginner to Advanced")
- `courseTypeIndex` → Index of *course* within category (0 = "Guitar Basics")

### Styling

**Theme** (`utils/styles/theme.ts`):
- Colors: `green`, `gold`, `navy`, `neutral[0-15]`
- Sizes: `xxs` through `xxl`, `header`, `headerSmall`
- Shadows: `theme.utils.shadows.light/primary/dark`

**Access in styled-components**: `${({ theme }) => theme.colors.green}`

**Global styles**: `utils/styles/global.scss` (CSS reset, `.heading-style` utility)

### Key Patterns

- **CourseContainer**: Wraps lesson pages, handles prev/next navigation using `courseData`
- **Menu**: Sidebar showing all lessons in current course with active state
- **Header**: Uses `lodash.debounce` for scroll listener, shrinks after 200px scroll
- Images stored in `/public/images/[course-path]/` matching `imgPath` in courseData

### Content Migration

Scripts in `scripts/` help migrate content from TSX files to Supabase:
- `migrate-content.ts` - Extract lesson content and convert to Markdown
- `upload-images.ts` - Upload paid course images to Supabase Storage

### Auth Flow

1. User signs up/logs in via `/login` or `/signup`
2. Paid course access checked in `getServerSideProps`
3. If no purchase, redirect to `/courses/[category]/[course]/purchase`
4. Stripe Checkout → Webhook updates `user_purchases`
5. User gains access to course content
