-- Create storage bucket for paid lesson images
insert into storage.buckets (id, name, public)
values ('lesson-images', 'lesson-images', false)
on conflict (id) do nothing;

-- Storage policies for lesson-images bucket

-- Anyone can read images from free courses (course-1 folder)
create policy "Public read access for free course images"
  on storage.objects for select
  using (
    bucket_id = 'lesson-images'
    and (storage.foldername(name))[1] = 'course-1'
  );

-- Users who purchased can read images from paid courses
create policy "Purchased users can read paid course images"
  on storage.objects for select
  using (
    bucket_id = 'lesson-images'
    and (
      -- Check if user purchased the course based on folder name
      exists (
        select 1 from user_purchases up
        join courses c on c.id = up.course_id
        where up.user_id = auth.uid()
        and (
          ((storage.foldername(name))[1] = 'course-2' and c.part = 2)
          or ((storage.foldername(name))[1] = 'course-3' and c.part = 3)
        )
      )
    )
  );

-- Admins can read all images
create policy "Admins can read all images"
  on storage.objects for select
  using (
    bucket_id = 'lesson-images'
    and auth.jwt() ->> 'role' = 'admin'
  );

-- Only admins/service role can upload images
create policy "Admins can upload images"
  on storage.objects for insert
  with check (
    bucket_id = 'lesson-images'
    and auth.jwt() ->> 'role' = 'admin'
  );

-- Only admins/service role can update images
create policy "Admins can update images"
  on storage.objects for update
  using (
    bucket_id = 'lesson-images'
    and auth.jwt() ->> 'role' = 'admin'
  );

-- Only admins/service role can delete images
create policy "Admins can delete images"
  on storage.objects for delete
  using (
    bucket_id = 'lesson-images'
    and auth.jwt() ->> 'role' = 'admin'
  );
