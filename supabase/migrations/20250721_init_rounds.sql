-- enable uuid generation once per database
create extension if not exists "uuid-ossp";

-- Rounds table
create table public.rounds (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references auth.users not null,
  date_played date not null,
  course_name text,
  tees        text,
  inserted_at timestamptz default now()
);

-- Round-level stats table
create table public.round_stats (
  id              uuid primary key default uuid_generate_v4(),
  round_id        uuid references public.rounds on delete cascade,
  fairways_hit    int  not null check (fairways_hit between 0 and 14),
  gir             int  not null check (gir between 0 and 18),
  sand_saves      int  not null check (sand_saves between 0 and 18),
  up_and_downs    int  not null check (up_and_downs between 0 and 18),
  putts           int  not null check (putts >= 0),
  inserted_at     timestamptz default now()
);

-- (RLS policies can stay as-is)