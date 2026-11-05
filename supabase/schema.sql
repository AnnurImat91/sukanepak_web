create extension if not exists pgcrypto;

create table if not exists public.documentation_entries (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_date date not null,
  schedule text not null check (schedule in ('Kamis','Sabtu','Tournament','Padel','Villa','Tracking','Lainnya')),
  drive_url text not null check (drive_url ~ '^https://(drive|docs)\\.google\\.com/'),
  media_count text not null default '',
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.documentation_entries enable row level security;
drop policy if exists "public can read published documentation" on public.documentation_entries;
create policy "public can read published documentation" on public.documentation_entries for select using (published = true);

create or replace function public.set_documentation_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end; $$;
drop trigger if exists documentation_updated_at on public.documentation_entries;
create trigger documentation_updated_at before update on public.documentation_entries for each row execute function public.set_documentation_updated_at();

insert into public.documentation_entries (title, event_date, schedule, drive_url, media_count)
select * from (values
  ('Kamis Manis — Week 21', '2025-05-24'::date, 'Kamis', 'https://drive.google.com/', '38 foto + 2 video'),
  ('Saturday Rally Session', '2025-05-17'::date, 'Sabtu', 'https://drive.google.com/', '54 foto'),
  ('Suka Nepak Open 2025', '2025-05-03'::date, 'Tournament', 'https://drive.google.com/', '120 foto + 8 video')
) as seed(title,event_date,schedule,drive_url,media_count)
where not exists (select 1 from public.documentation_entries);
