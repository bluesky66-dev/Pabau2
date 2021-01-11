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
CREATE TABLE public.contacts (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    client_id text NOT NULL,
    mobile_number bigint NOT NULL
);
CREATE TABLE public.marketing_campaign (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.marketing_campaign
    ADD CONSTRAINT marketing_campaign_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_contacts_updated_at BEFORE UPDATE ON public.contacts FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_contacts_updated_at ON public.contacts IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_marketing_campaign_updated_at BEFORE UPDATE ON public.marketing_campaign FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_marketing_campaign_updated_at ON public.marketing_campaign IS 'trigger to set value of column "updated_at" to current timestamp on row update';
