CREATE EXTENSION IF NOT EXISTS pgcrypto;
INSERT INTO public.users (username, password)
VALUES
('admin', crypt('Admin1234', gen_salt('bf', 10)))