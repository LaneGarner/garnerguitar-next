/**
 * Image Upload Script
 *
 * Uploads paid course images to Supabase Storage.
 *
 * Usage:
 * 1. Set environment variables: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * 2. Run: npx ts-node scripts/upload-images.ts
 *
 * This script uploads images from:
 * - public/images/beg-to-adv/course-2/ → Storage: lesson-images/course-2/
 * - public/images/beg-to-adv/course-3/ → Storage: lesson-images/course-3/
 *
 * Note: Course 1 images stay in /public as they're free content.
 */

import * as fs from "fs";
import * as path from "path";
import { createClient } from "@supabase/supabase-js";

const BUCKET_NAME = "lesson-images";

// Course folders to upload (paid courses only)
const COURSE_FOLDERS = [
  { source: "public/images/beg-to-adv/course-2", dest: "course-2" },
  { source: "public/images/beg-to-adv/course-3", dest: "course-3" },
];

// Supported image extensions
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

async function uploadImages() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing environment variables:");
    console.error("- NEXT_PUBLIC_SUPABASE_URL");
    console.error("- SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Check if bucket exists
  const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
  if (bucketsError) {
    console.error("Error listing buckets:", bucketsError);
    process.exit(1);
  }

  const bucketExists = buckets.some((b) => b.name === BUCKET_NAME);
  if (!bucketExists) {
    console.log(`Creating bucket: ${BUCKET_NAME}`);
    const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: false, // Private bucket, access controlled by RLS
    });
    if (createError) {
      console.error("Error creating bucket:", createError);
      process.exit(1);
    }
  }

  // Upload images from each folder
  for (const folder of COURSE_FOLDERS) {
    const sourcePath = path.join(__dirname, "..", folder.source);

    if (!fs.existsSync(sourcePath)) {
      console.warn(`Source folder not found: ${sourcePath}`);
      continue;
    }

    console.log(`\n📁 Processing: ${folder.source}`);

    const files = fs.readdirSync(sourcePath);
    const imageFiles = files.filter((f) =>
      IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase())
    );

    console.log(`   Found ${imageFiles.length} images`);

    let uploaded = 0;
    let skipped = 0;
    let errors = 0;

    for (const file of imageFiles) {
      const filePath = path.join(sourcePath, file);
      const storagePath = `${folder.dest}/${file}`;

      // Check if file already exists
      const { data: existing } = await supabase.storage
        .from(BUCKET_NAME)
        .list(folder.dest, { search: file });

      if (existing && existing.length > 0) {
        console.log(`   ⏭️  Skipping (exists): ${storagePath}`);
        skipped++;
        continue;
      }

      // Read file and upload
      const fileBuffer = fs.readFileSync(filePath);
      const contentType = getContentType(file);

      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(storagePath, fileBuffer, {
          contentType,
          upsert: false,
        });

      if (uploadError) {
        console.error(`   ❌ Error uploading ${storagePath}:`, uploadError.message);
        errors++;
      } else {
        console.log(`   ✅ Uploaded: ${storagePath}`);
        uploaded++;
      }
    }

    console.log(`   Summary: ${uploaded} uploaded, ${skipped} skipped, ${errors} errors`);
  }

  console.log("\n✅ Image upload complete!");
}

function getContentType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const types: Record<string, string> = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
  };
  return types[ext] || "application/octet-stream";
}

uploadImages().catch(console.error);
