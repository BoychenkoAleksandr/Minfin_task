CREATE SEQUENCE IF NOT EXISTS public.users_seq START WITH 1;
CREATE TABLE IF NOT EXISTS public.users (
    id                  BIGINT DEFAULT nextval('public.users_seq') PRIMARY KEY,
    username            VARCHAR(500)    NOT NULL,
    password            VARCHAR(500)    NOT NULL
);