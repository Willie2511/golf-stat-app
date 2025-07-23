-- Enable UUIDs
create extension if not exists "uuid-ossp";

-- =====  rounds  =====
create table if not exists public.rounds (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references auth.users not null,
  date_played date not null,
  course_name text,
  tees        text,
  inserted_at timestamptz default now()
);

-- =====  round_stats  =====
create table if not exists public.round_stats (
  id              uuid primary key default uuid_generate_v4(),
  round_id        uuid references public.rounds on delete cascade,
  fairways_hit    int  not null check (fairways_hit between 0 and 14),
  gir             int  not null check (gir between 0 and 18),
  sand_saves      int  not null check (sand_saves between 0 and 18),
  up_and_downs    int  not null check (up_and_downs between 0 and 18),
  putts           int  not null check (putts >= 0),
  inserted_at     timestamptz default now()
);

-- RLS policies (add only if they’re not already present)
alter table public.rounds      enable row level security;
alter table public.round_stats enable row level security;

create policy "Owner can do everything"
  on public.rounds
  for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Owner can do everything"
  on public.round_stats
  for all
  using (
    auth.uid() = (
      select user_id from public.rounds r where r.id = round_id
    )
  )
  with check (true);