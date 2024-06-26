REVOKE SELECT ON TABLE public.user FROM authenticated;

GRANT SELECT (id, uuid, username, avatar_url, description, company_name, job_title, year_of_experience, social_media_url, country_uuid, province_uuid, city_uuid, industry_uuid, is_referee, is_referer,contact_request_count)
   ON TABLE public.user TO authenticated;

REVOKE SELECT ON TABLE public.user FROM anon;

GRANT SELECT (id, uuid, username, avatar_url, description, company_name, job_title, year_of_experience, social_media_url, country_uuid, province_uuid, city_uuid, industry_uuid, is_referee, is_referer,contact_request_count)
   ON TABLE public.user TO anon;