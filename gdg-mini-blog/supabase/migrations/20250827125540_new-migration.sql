create table public.posts (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  title text not null,
  content text not null,
  user_id uuid not null default auth.uid (),
  constraint posts_pkey primary key (id),
  constraint posts_user_id_fkey foreign KEY (user_id) references profiles (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.posts (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  title text not null,
  content text not null,
  user_id uuid not null default auth.uid (),
  constraint posts_pkey primary key (id),
  constraint posts_user_id_fkey foreign KEY (user_id) references profiles (id) on delete CASCADE
) TABLESPACE pg_default;