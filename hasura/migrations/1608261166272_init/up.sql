CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.marketing_source (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public.marketing_source
    ADD CONSTRAINT marketing_source_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_marketing_source_updated_at BEFORE UPDATE ON public.marketing_source FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_marketing_source_updated_at ON public.marketing_source IS 'trigger to set value of column "updated_at" to current timestamp on row update';
