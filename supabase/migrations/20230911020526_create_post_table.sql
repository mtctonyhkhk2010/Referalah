create table "public"."post" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone default now(),
    "created_by" uuid,
    "uuid" uuid default gen_random_uuid(),
    "type" text default ''::text,
    "status" text default 'active'::text,
    "url" character varying,
    "country_uuid" uuid,
    "province_uuid" uuid,
    "city_uuid" uuid,
    "industry_uuid" uuid,
    "year_of_experience" smallint,
    "company_name" character varying,
    "job_title" character varying
);


CREATE UNIQUE INDEX post_pkey ON public.post USING btree (id);

alter table "public"."post" add constraint "post_pkey" PRIMARY KEY using index "post_pkey";

