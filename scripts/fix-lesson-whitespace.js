const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function fixContent() {
  // Get all lessons
  const { data: lessons, error } = await supabase
    .from('lessons')
    .select('id, slug, content');

  if (error) {
    console.error('Error fetching:', error);
    return;
  }

  console.log('Found', lessons.length, 'lessons to fix');

  for (const lesson of lessons) {
    // Remove leading whitespace from each line, preserve intentional newlines
    const fixedContent = lesson.content
      .split('\n')
      .map(line => line.trimStart())
      .join('\n')
      .replace(/\n{3,}/g, '\n\n'); // Max 2 consecutive newlines

    if (fixedContent !== lesson.content) {
      const { error: updateError } = await supabase
        .from('lessons')
        .update({ content: fixedContent })
        .eq('id', lesson.id);

      if (updateError) {
        console.error('Error updating', lesson.slug, updateError);
      } else {
        console.log('Fixed:', lesson.slug);
      }
    } else {
      console.log('No change:', lesson.slug);
    }
  }

  console.log('Done!');
}

fixContent();
