create table if not exists public.course_access_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  granted_by uuid references auth.users(id) on delete set null,
  reason text,
  granted_at timestamptz not null default now(),
  revoked_at timestamptz,
  revoked_by uuid references auth.users(id) on delete set null,
  unique (user_id, course_id)
);

create index if not exists idx_course_access_grants_user_course
  on public.course_access_grants(user_id, course_id)
  where revoked_at is null;

alter table public.course_access_grants enable row level security;

revoke all on table public.course_access_grants from anon;
revoke all on table public.course_access_grants from authenticated;
grant select on table public.course_access_grants to authenticated;
grant select, insert, update, delete on table public.course_access_grants to service_role;

drop policy if exists "Users can read own active course grants" on public.course_access_grants;
create policy "Users can read own active course grants"
  on public.course_access_grants for select
  to authenticated
  using ((select auth.uid()) = user_id and revoked_at is null);

drop policy if exists "Read lessons" on public.lessons;
create policy "Read lessons"
  on public.lessons for select
  using (
    (published = true and course_id in (select id from public.courses where is_free = true))
    or course_id in (select course_id from public.user_purchases where user_id = (select auth.uid()))
    or course_id in (
      select course_id from public.course_access_grants
      where user_id = (select auth.uid()) and revoked_at is null
    )
    or ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin')
  );

drop policy if exists "Admins can manage courses" on public.courses;
create policy "Admins can manage courses"
  on public.courses for all
  using ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin')
  with check ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin');

drop policy if exists "Admins can manage lessons" on public.lessons;
create policy "Admins can manage lessons"
  on public.lessons for all
  using ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin')
  with check ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin');

drop policy if exists "Admins can read all purchases" on public.user_purchases;
create policy "Admins can read all purchases"
  on public.user_purchases for select
  using ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin');

drop policy if exists "Purchased users can read paid course images" on storage.objects;
create policy "Purchased users can read paid course images"
  on storage.objects for select
  using (
    bucket_id = 'lesson-images'
    and exists (
      select 1 from public.courses c
      where (
        ((storage.foldername(name))[1] = 'course-2' and c.part = 2)
        or ((storage.foldername(name))[1] = 'course-3' and c.part = 3)
      )
      and (
        exists (select 1 from public.user_purchases up where up.user_id = (select auth.uid()) and up.course_id = c.id)
        or exists (
          select 1 from public.course_access_grants cag
          where cag.user_id = (select auth.uid()) and cag.course_id = c.id and cag.revoked_at is null
        )
      )
    )
  );

drop policy if exists "Admins can read all images" on storage.objects;
create policy "Admins can read all images"
  on storage.objects for select
  using (bucket_id = 'lesson-images' and ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin'));

drop policy if exists "Admins can upload images" on storage.objects;
create policy "Admins can upload images"
  on storage.objects for insert
  with check (bucket_id = 'lesson-images' and ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin'));

drop policy if exists "Admins can update images" on storage.objects;
create policy "Admins can update images"
  on storage.objects for update
  using (bucket_id = 'lesson-images' and ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin'))
  with check (bucket_id = 'lesson-images' and ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin'));

drop policy if exists "Admins can delete images" on storage.objects;
create policy "Admins can delete images"
  on storage.objects for delete
  using (bucket_id = 'lesson-images' and ((select auth.jwt()) -> 'app_metadata' ->> 'role' = 'admin'));

-- Service-role requests bypass RLS; clients should never be allowed to mint purchases.
drop policy if exists "Service role can insert purchases" on public.user_purchases;
revoke insert, update, delete on table public.user_purchases from anon, authenticated;
grant select on table public.user_purchases to authenticated;
grant select, insert, update, delete on table public.user_purchases to service_role;

alter function public.update_updated_at() set search_path = public;
