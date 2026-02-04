/**
 * Content Migration Script
 *
 * This script helps migrate lesson content from TSX files to Supabase.
 *
 * Usage:
 * 1. Set up your Supabase project and run the migrations in supabase/migrations/
 * 2. Set environment variables: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * 3. Run: npx ts-node scripts/migrate-content.ts
 *
 * The script will:
 * - Read the courseData.ts file for course/lesson structure
 * - Create course records in Supabase
 * - Parse lesson content from TSX files and convert to markdown
 * - Upload lesson content to Supabase
 *
 * NOTE: This script provides a template/guide. You'll need to manually review
 * and adjust the markdown output for each lesson since TSX → Markdown conversion
 * isn't perfect.
 */

import * as fs from "fs";
import * as path from "path";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../lib/supabase/types";

// Course data types (mirrors data/courseData.ts)
interface PagesInterface {
  title: string;
  component: string;
  headings: string[];
  text: string[];
  images: string[];
}

interface CourseInterface {
  part: number;
  title: string;
  img: string;
  imgPath: string;
  description: string;
  description2?: string;
  skills: string[];
  pages: PagesInterface[];
  url: string;
}

interface CoursesInterface {
  title: string;
  description: string;
  tagline: string;
  highlights: string[];
  img: string;
  shortName: string;
  isComingSoon?: boolean;
  courses: CourseInterface[];
}

// Helper to convert title to slug
function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Parse TSX file content to extract text (basic extraction)
function extractContentFromTsx(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return "";
  }

  const content = fs.readFileSync(filePath, "utf-8");

  // Extract JSX content between CourseContainer tags
  const jsxMatch = content.match(/<CourseContainer[^>]*>([\s\S]*?)<\/CourseContainer>/);
  if (!jsxMatch) {
    return "";
  }

  let jsxContent = jsxMatch[1];

  // Remove styled component wrapper (e.g., <IntroductionStyled>)
  jsxContent = jsxContent.replace(/<\w+Styled>/g, "").replace(/<\/\w+Styled>/g, "");

  // Convert JSX to Markdown
  let markdown = jsxContent
    // Convert headings
    .replace(/<h2>(.*?)<\/h2>/g, "\n## $1\n")
    .replace(/<h3>(.*?)<\/h3>/g, "\n### $1\n")
    .replace(/<h4>(.*?)<\/h4>/g, "\n#### $1\n")

    // Convert paragraphs
    .replace(/<p>([\s\S]*?)<\/p>/g, (match, content) => {
      return "\n" + content.trim() + "\n";
    })

    // Convert lists
    .replace(/<ul>/g, "")
    .replace(/<\/ul>/g, "")
    .replace(/<ol>/g, "")
    .replace(/<\/ol>/g, "")
    .replace(/<li><strong>(.*?)<\/strong>([\s\S]*?)<\/li>/g, "- **$1**$2")
    .replace(/<li>([\s\S]*?)<\/li>/g, "- $1")

    // Convert strong/em
    .replace(/<strong>(.*?)<\/strong>/g, "**$1**")
    .replace(/<em>(.*?)<\/em>/g, "*$1*")

    // Convert images (Next.js Image component)
    .replace(/<Image\s+src=\{`\$\{course\.imgPath\}\/(.*?)`\}[^>]*alt="(.*?)"[^>]*\/>/g,
      (match, src, alt) => `\n![${alt}](${src})\n`)
    .replace(/<Image\s+src="(.*?)"[^>]*alt="(.*?)"[^>]*\/>/g,
      (match, src, alt) => `\n![${alt}](${src})\n`)

    // Remove remaining JSX
    .replace(/<[^>]+>/g, "")

    // Clean up template literals and JS expressions
    .replace(/\{`[^`]*`\}/g, "")
    .replace(/\{[^}]*\}/g, "")

    // Clean up whitespace
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return markdown;
}

// Main migration function
async function migrate() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing environment variables:");
    console.error("- NEXT_PUBLIC_SUPABASE_URL");
    console.error("- SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  // Import course data
  const courseDataPath = path.join(__dirname, "../data/courseData.ts");
  console.log("Reading course data from:", courseDataPath);

  // Since we can't directly import TS, let's parse the course structure
  // In practice, you'd want to compile this or use a different approach
  console.log("\n⚠️  This script provides a template for migration.");
  console.log("You'll need to:");
  console.log("1. Export course data to JSON format");
  console.log("2. Manually review and adjust extracted markdown content");
  console.log("3. Upload images to Supabase Storage for paid courses\n");

  // Example course data structure for migration
  const coursesToMigrate = [
    {
      slug: "guitar-basics",
      categorySlug: "beginner-to-advanced",
      title: "Free Guitar Basics Course",
      description: "This intro course is designed to teach the basics of guitar if you've never taken a lesson or even played before.",
      part: 1,
      isFree: true,
      priceCents: null,
      stripePriceId: null,
      imgPath: "/images/beg-to-adv/course-1",
      lessons: [
        { title: "Introduction", slug: "introduction" },
        { title: "Guitar anatomy", slug: "guitar-anatomy" },
        { title: "Guitar accessories", slug: "guitar-accessories" },
        { title: "Practicing", slug: "practicing" },
        { title: "Repertoire", slug: "repertoire" },
        { title: "Listening", slug: "listening" },
        { title: "Beginning music theory", slug: "beginning-music-theory" },
        { title: "Tuning", slug: "tuning" },
        { title: "Finger names", slug: "finger-names" },
        { title: "Hand position", slug: "hand-position" },
        { title: "Notation", slug: "notation" },
        { title: "Chords to get you started", slug: "chords-to-get-you-started" },
        { title: "Tablature", slug: "tablature" },
        { title: "Power chords", slug: "power-chords" },
        { title: "Chord transitions", slug: "chord-transitions" },
        { title: "Easy songs to learn", slug: "easy-songs-to-learn" },
        { title: "Rhythmic notation", slug: "rhythmic-notation" },
        { title: "The blues shuffle", slug: "the-blues-shuffle" },
        { title: "Intro to pentatonics", slug: "intro-to-pentatonics" },
        { title: "Open chords", slug: "open-chords" },
        { title: "Intro to barre chords", slug: "intro-to-barre-chords" },
      ],
    },
    {
      slug: "technique-reading-theory",
      categorySlug: "beginner-to-advanced",
      title: "Technique, Reading & Theory",
      description: "Building upon the foundational concepts taught in the guitar basics course, you will learn technique exercises, reading standard notation, and music theory.",
      part: 2,
      isFree: false,
      priceCents: 4999, // $49.99
      stripePriceId: null, // Set after creating Stripe product
      imgPath: "/images/beg-to-adv/course-2",
      lessons: [
        // Add all lessons for course 2...
      ],
    },
    {
      slug: "blues-caged-pentatonics",
      categorySlug: "beginner-to-advanced",
      title: "Blues, CAGED & Pentatonics",
      description: "This course introduces the blues, one of the most influential styles in American music. You will learn the CAGED system for navigating the fretboard and dive deep into pentatonic and blues scales.",
      part: 3,
      isFree: false,
      priceCents: 4999, // $49.99
      stripePriceId: null, // Set after creating Stripe product
      imgPath: "/images/beg-to-adv/course-3",
      lessons: [
        // Add all lessons for course 3...
      ],
    },
  ];

  console.log("=== MIGRATION PREVIEW ===\n");

  for (const course of coursesToMigrate) {
    console.log(`📚 Course: ${course.title}`);
    console.log(`   Slug: ${course.slug}`);
    console.log(`   Category: ${course.categorySlug}`);
    console.log(`   Free: ${course.isFree}`);
    console.log(`   Price: ${course.priceCents ? `$${(course.priceCents / 100).toFixed(2)}` : "Free"}`);
    console.log(`   Lessons: ${course.lessons.length}`);

    // Try to extract content from first lesson as example
    if (course.lessons.length > 0) {
      const firstLesson = course.lessons[0];
      const lessonPath = path.join(
        __dirname,
        `../pages/courses/${course.categorySlug}/${course.slug}`,
        firstLesson.slug === "introduction" ? "index.tsx" : `${firstLesson.slug}.tsx`
      );

      console.log(`\n   Sample content extraction from: ${lessonPath}`);
      const content = extractContentFromTsx(lessonPath);
      if (content) {
        console.log("   Preview (first 500 chars):");
        console.log("   " + content.substring(0, 500).replace(/\n/g, "\n   ") + "...\n");
      }
    }

    console.log("");
  }

  console.log("=== NEXT STEPS ===\n");
  console.log("1. Review the extracted content previews above");
  console.log("2. Create courses in Supabase:");
  console.log(`
   INSERT INTO courses (slug, category_slug, title, description, part, is_free, price_cents, stripe_price_id, img_path)
   VALUES
     ('guitar-basics', 'beginner-to-advanced', 'Free Guitar Basics Course', '...', 1, true, NULL, NULL, '/images/beg-to-adv/course-1'),
     ('technique-reading-theory', 'beginner-to-advanced', 'Technique, Reading & Theory', '...', 2, false, 4999, 'price_xxx', '/images/beg-to-adv/course-2'),
     ('blues-caged-pentatonics', 'beginner-to-advanced', 'Blues, CAGED & Pentatonics', '...', 3, false, 4999, 'price_xxx', '/images/beg-to-adv/course-3');
  `);

  console.log("3. For each lesson, manually review and create content:");
  console.log(`
   INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
   VALUES
     ('course-uuid', 'introduction', 'Introduction', 'Your markdown content here...', 0, true);
  `);

  console.log("4. Upload images for paid courses to Supabase Storage bucket 'lesson-images'");
  console.log("   - course-2/image-name.jpg");
  console.log("   - course-3/image-name.jpg");

  console.log("\n5. Create Stripe products and update stripe_price_id in courses table");
}

migrate().catch(console.error);
