create table if not exists public.profiles (
  user_id   uuid primary key references auth.users on delete cascade,
  full_name text
);

alter table public.profiles enable row level security;
create policy "own profile"
  on public.profiles for all
  using ( auth.uid() = user_id )
  with check ( auth.uid() = user_id );