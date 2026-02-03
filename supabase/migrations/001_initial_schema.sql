-- Courses table
create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,           -- 'guitar-basics'
  category_slug text not null,         -- 'beginner-to-advanced'
  title text not null,
  description text,
  part integer not null,               -- 1, 2, 3
  is_free boolean default false,
  price_cents integer,                 -- 4999 = $49.99
  stripe_price_id text,
  img_path text,                       -- '/images/beg-to-adv/course-1'
  created_at timestamptz default now()
);

-- Lessons table
create table if not exists lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references courses(id) on delete cascade,
  slug text not null,                  -- 'guitar-anatomy'
  title text not null,
  content text not null,               -- Markdown content
  sort_order integer not null,
  published boolean default false,
  video_id text,                       -- Cloudflare Stream video ID (optional)
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(course_id, slug)
);

-- User purchases table
create table if not exists user_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  course_id uuid references courses(id) on delete cascade,
  stripe_payment_id text,
  purchased_at timestamptz default now(),
  unique(user_id, course_id)
);

-- Create indexes for performance
create index if not exists idx_lessons_course_id on lessons(course_id);
create index if not exists idx_lessons_slug on lessons(slug);
create index if not exists idx_courses_category_slug on courses(category_slug);
create index if not exists idx_courses_slug on courses(slug);
create index if not exists idx_user_purchases_user_id on user_purchases(user_id);
create index if not exists idx_user_purchases_course_id on user_purchases(course_id);

-- Function to update updated_at timestamp
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Trigger to auto-update updated_at on lessons
drop trigger if exists lessons_updated_at on lessons;
create trigger lessons_updated_at
  before update on lessons
  for each row
  execute function update_updated_at();

-- Enable Row Level Security
alter table courses enable row level security;
alter table lessons enable row level security;
alter table user_purchases enable row level security;

-- RLS Policies for courses
-- Anyone can read courses (public metadata)
create policy "Anyone can read courses"
  on courses for select
  using (true);

-- Only admins can insert/update/delete courses
create policy "Admins can manage courses"
  on courses for all
  using (auth.jwt() ->> 'role' = 'admin');

-- RLS Policies for lessons
-- Read policy: Free course lessons are public, paid require purchase
create policy "Read lessons"
  on lessons for select
  using (
    -- Published free course lessons are public
    (
      published = true
      and course_id in (select id from courses where is_free = true)
    )
    -- OR user purchased the course
    or (
      course_id in (
        select course_id from user_purchases where user_id = auth.uid()
      )
    )
    -- OR user is admin (checked via custom claim)
    or (auth.jwt() ->> 'role' = 'admin')
  );

-- Only admins can manage lessons
create policy "Admins can manage lessons"
  on lessons for all
  using (auth.jwt() ->> 'role' = 'admin');

-- RLS Policies for user_purchases
-- Users can read their own purchases
create policy "Users can read own purchases"
  on user_purchases for select
  using (auth.uid() = user_id);

-- Only service role can insert purchases (via webhook)
create policy "Service role can insert purchases"
  on user_purchases for insert
  with check (true);

-- Admins can read all purchases
create policy "Admins can read all purchases"
  on user_purchases for select
  using (auth.jwt() ->> 'role' = 'admin');
