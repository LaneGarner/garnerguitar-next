/**
 * Migration script to extract lesson content from TSX files
 * and generate SQL for inserting into Supabase
 *
 * Usage: npx ts-node scripts/migrate-lessons.ts > lessons.sql
 */

import * as fs from 'fs';
import * as path from 'path';

// Course 2 lesson files and their order
const course2Lessons = [
  { file: 'index.tsx', slug: 'introduction', title: 'Introduction', sortOrder: 0 },
  { file: 'finger-combination-exercise.tsx', slug: 'finger-combination-exercise', title: 'Finger combination exercise', sortOrder: 1 },
  { file: 'string-crossing-exercise.tsx', slug: 'string-crossing-exercise', title: 'String crossing exercise', sortOrder: 2 },
  { file: 'pull-offs-and-hammer-ons.tsx', slug: 'pull-offs-and-hammer-ons', title: 'Pull-offs & hammer-ons', sortOrder: 3 },
  { file: 'subdivision-studies.tsx', slug: 'subdivision-studies', title: 'Subdivision studies', sortOrder: 4 },
  { file: 'upstroke-exercise.tsx', slug: 'upstroke-exercise', title: 'Upstroke exercise', sortOrder: 5 },
  { file: 'spider-exercises.tsx', slug: 'spider-exercises', title: 'Spider exercises', sortOrder: 6 },
  { file: 'rhythmic-hierarchy-exercise.tsx', slug: 'rhythmic-hierarchy-exercise', title: 'Rhythmic hierarchy exercise', sortOrder: 7 },
  { file: 'scales.tsx', slug: 'scales', title: 'Scales', sortOrder: 8 },
  { file: 'intro-to-standard-notation.tsx', slug: 'intro-to-standard-notation', title: 'Intro to standard notation', sortOrder: 9 },
  { file: 'notes-on-the-staff.tsx', slug: 'notes-on-the-staff', title: 'Notes on the staff', sortOrder: 10 },
  { file: 'open-strings.tsx', slug: 'open-strings', title: 'Open strings', sortOrder: 11 },
  { file: 'first-string.tsx', slug: 'first-string', title: 'First string', sortOrder: 12 },
  { file: 'second-string.tsx', slug: 'second-string', title: 'Second string', sortOrder: 13 },
  { file: 'third-string.tsx', slug: 'third-string', title: 'Third string', sortOrder: 14 },
  { file: 'fourth-string.tsx', slug: 'fourth-string', title: 'Fourth string', sortOrder: 15 },
  { file: 'fifth-string.tsx', slug: 'fifth-string', title: 'Fifth string', sortOrder: 16 },
  { file: 'sixth-string.tsx', slug: 'sixth-string', title: 'Sixth string', sortOrder: 17 },
  { file: 'tab-and-standard-notation.tsx', slug: 'tab-and-standard-notation', title: 'Tab and standard notation', sortOrder: 18 },
  { file: 'music-theory.tsx', slug: 'music-theory', title: 'Music theory', sortOrder: 19 },
  { file: 'guitar-geography.tsx', slug: 'guitar-geography', title: 'Guitar geography', sortOrder: 20 },
  { file: 'the-chromatic-scale.tsx', slug: 'the-chromatic-scale', title: 'The chromatic scale', sortOrder: 21 },
  { file: 'building-major-scales.tsx', slug: 'building-major-scales', title: 'Building major scales', sortOrder: 22 },
  { file: 'circle-of-4ths-and-5ths.tsx', slug: 'circle-of-4ths-and-5ths', title: 'Circle of 4ths & 5ths', sortOrder: 23 },
  { file: 'intervals.tsx', slug: 'intervals', title: 'Intervals', sortOrder: 24 },
  { file: 'intro-to-ear-training.tsx', slug: 'intro-to-ear-training', title: 'Intro to ear training', sortOrder: 25 },
  { file: 'building-triads.tsx', slug: 'building-triads', title: 'Building triads', sortOrder: 26 },
  { file: 'functional-harmony-and-progressions.tsx', slug: 'functional-harmony-and-progressions', title: 'Functional harmony & progressions', sortOrder: 27 },
];

// Course 3 lesson files and their order
const course3Lessons = [
  { file: 'index.tsx', slug: 'introduction', title: 'Introduction', sortOrder: 0 },
  { file: '12-bar-blues.tsx', slug: '12-bar-blues', title: '12 bar blues', sortOrder: 1 },
  { file: 'blues-shuffle-etudes.tsx', slug: 'blues-shuffle-etudes', title: 'Blues shuffle etudes', sortOrder: 2 },
  { file: 'dominant-seventh-chords.tsx', slug: 'dominant-seventh-chords', title: 'Dominant seventh chords', sortOrder: 3 },
  { file: 'minor-blues-scales.tsx', slug: 'minor-blues-scales', title: 'Minor blues scales', sortOrder: 4 },
  { file: 'blues-licks.tsx', slug: 'blues-licks', title: 'Blues licks', sortOrder: 5 },
  { file: 'blues-etudes.tsx', slug: 'blues-etudes', title: 'Blues etudes', sortOrder: 6 },
  { file: 'blues-songs.tsx', slug: 'blues-songs', title: 'Blues songs', sortOrder: 7 },
  { file: 'the-caged-system.tsx', slug: 'the-caged-system', title: 'The CAGED system', sortOrder: 8 },
  { file: 'caged-in-12-keys.tsx', slug: 'caged-in-12-keys', title: 'CAGED in 12 keys', sortOrder: 9 },
  { file: 'caged-chord-tones.tsx', slug: 'caged-chord-tones', title: 'CAGED chord tones', sortOrder: 10 },
  { file: 'caged-common-progressions.tsx', slug: 'caged-common-progressions', title: 'CAGED common progressions', sortOrder: 11 },
  { file: 'minor-pentatonic-positions.tsx', slug: 'minor-pentatonic-positions', title: 'Minor pentatonic positions', sortOrder: 12 },
  { file: 'pentatonic-puzzle-pieces.tsx', slug: 'pentatonic-puzzle-pieces', title: 'Pentatonic puzzle pieces', sortOrder: 13 },
  { file: 'pentatonic-shifting.tsx', slug: 'pentatonic-shifting', title: 'Pentatonic shifting', sortOrder: 14 },
  { file: 'minor-blues-scale-positions.tsx', slug: 'minor-blues-scale-positions', title: 'Minor blues scale positions', sortOrder: 15 },
  { file: 'major-pentatonic-positions.tsx', slug: 'major-pentatonic-positions', title: 'Major pentatonic positions', sortOrder: 16 },
  { file: 'major-blues-scale-positions.tsx', slug: 'major-blues-scale-positions', title: 'Major blues scale positions', sortOrder: 17 },
  { file: 'pentatonics-and-caged-shapes.tsx', slug: 'pentatonics-and-caged-shapes', title: 'Pentatonics & CAGED shapes', sortOrder: 18 },
];

function extractContent(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return '';
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Find content between styled component tags
  // Look for content after <SomethingStyled> and before </SomethingStyled>
  const styledMatch = content.match(/<(\w+Styled)>([\s\S]*?)<\/\1>/);
  if (!styledMatch) {
    // Try alternate pattern - content inside CourseContainer
    const containerMatch = content.match(/<CourseContainer[^>]*>([\s\S]*?)<\/CourseContainer>/);
    if (containerMatch) {
      return convertJsxToMarkdown(containerMatch[1]);
    }
    return '';
  }

  return convertJsxToMarkdown(styledMatch[2]);
}

function convertJsxToMarkdown(jsx: string): string {
  let md = jsx;

  // Remove styled component wrappers
  md = md.replace(/<\w+Styled>/g, '');
  md = md.replace(/<\/\w+Styled>/g, '');

  // Convert Image components to markdown
  // Pattern: <Image src={`${course.imgPath}/filename.jpg`} ... alt="Alt text" />
  md = md.replace(/<Image\s+src=\{`\$\{course\.imgPath\}\/([^`]+)`\}\s+[^>]*alt="([^"]*)"[^>]*\/>/g, '![$2]($1)');
  md = md.replace(/<Image\s+[^>]*alt="([^"]*)"[^>]*src=\{`\$\{course\.imgPath\}\/([^`]+)`\}[^>]*\/>/g, '![$1]($2)');

  // Convert headings
  md = md.replace(/<h2>([^<]*)<\/h2>/g, '\n## $1\n');
  md = md.replace(/<h3>([^<]*)<\/h3>/g, '\n### $1\n');

  // Convert paragraphs
  md = md.replace(/<p>/g, '\n');
  md = md.replace(/<\/p>/g, '\n');

  // Convert emphasis
  md = md.replace(/<em>/g, '*');
  md = md.replace(/<\/em>/g, '*');
  md = md.replace(/<strong>/g, '**');
  md = md.replace(/<\/strong>/g, '**');

  // Convert lists
  md = md.replace(/<ul>/g, '\n');
  md = md.replace(/<\/ul>/g, '\n');
  md = md.replace(/<li>/g, '- ');
  md = md.replace(/<\/li>/g, '\n');

  // Clean up JSX expressions and extra whitespace
  md = md.replace(/\{[^}]*\}/g, ''); // Remove remaining JSX expressions
  md = md.replace(/\n{3,}/g, '\n\n'); // Max 2 newlines
  md = md.trim();

  return md;
}

function escapeSql(str: string): string {
  return str.replace(/'/g, "''");
}

function generateSql() {
  const course2Path = path.join(__dirname, '../pages/courses/beginner-to-advanced/technique-reading-theory');
  const course3Path = path.join(__dirname, '../pages/courses/beginner-to-advanced/blues-caged-pentatonics');

  console.log('-- Migration SQL for Courses 2 & 3');
  console.log('-- Generated on', new Date().toISOString());
  console.log('');
  console.log('-- Course 2: Technique, Reading & Theory');

  for (const lesson of course2Lessons) {
    const filePath = path.join(course2Path, lesson.file);
    const content = extractContent(filePath);

    if (content) {
      console.log(`
INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, '${lesson.slug}', '${escapeSql(lesson.title)}', '${escapeSql(content)}', ${lesson.sortOrder}, true
FROM courses WHERE slug = 'technique-reading-theory';
`);
    } else {
      console.log(`-- WARNING: No content extracted for ${lesson.file}`);
    }
  }

  console.log('');
  console.log('-- Course 3: Blues, CAGED & Pentatonics');

  for (const lesson of course3Lessons) {
    const filePath = path.join(course3Path, lesson.file);
    const content = extractContent(filePath);

    if (content) {
      console.log(`
INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, '${lesson.slug}', '${escapeSql(lesson.title)}', '${escapeSql(content)}', ${lesson.sortOrder}, true
FROM courses WHERE slug = 'blues-caged-pentatonics';
`);
    } else {
      console.log(`-- WARNING: No content extracted for ${lesson.file}`);
    }
  }
}

generateSql();
