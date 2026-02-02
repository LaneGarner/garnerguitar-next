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

### Data-Driven Content

All course content is defined in `data/courseData.ts`:
- `CoursesInterface[]` → Course categories (e.g., "Beginner to Advanced", "Jazz")
- Each category contains `CourseInterface[]` → Individual courses
- Each course contains `PagesInterface[]` → Lesson pages with title, headings, text, images

Adding new lessons: Update the `pages` array in the relevant course within `courseData.ts`. The page title is converted to a URL slug via `toKebabCase()` (e.g., "Intro to barre chords" → `intro-to-barre-chords`).

### Routing

Next.js filesystem routing mirrors course structure:
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
