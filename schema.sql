create table songs (
  id uuid primary key default gen_random_uuid(),
  title text not null, artist text not null,
  genre text not null check (genre in ('rai_nouveau','kabyle','rai_old','madahat','tunisian','syrian')),
  mood text not null default 'night',
  cover_url text, audio_url text not null,
  duration int not null default 0,
  golden_30_start int not null default 0,
  created_at timestamptz default now()
);
alter table songs enable row level security;
create policy "public read" on songs for select using (true);
create policy "public insert (V1 dev only)" on songs for insert with check (true);
-- Storage: create a public bucket named "songs"
