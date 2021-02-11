import { objectType, extendType } from 'nexus';

export const cm_contacts = objectType({
  name: 'cm_contacts',
  definition(t) {
    t.model.ID();
    t.model.Avatar();
    t.model.OwnerID();
    t.model.Salutation();
    t.model.Fname();
    t.model.Occupier();
    t.model.location_id();
    t.model.Email();
    t.model.Phone();
    t.model.OtherPhone();
    t.model.Mobile();
    t.model.Assistant();
    t.model.ReportsTo();
    t.model.LeadSource();
    t.model.Lname();
    t.model.Title();
    t.model.Department();
    t.model.HomePhone();
    t.model.Fax();
    t.model.DOB();
    t.model.AsstPhone();
    t.model.EmailOptOut();
    t.model.SkypeId();
    t.model.AddToQuickBooks();
    t.model.SecondaryEmail();
    t.model.Twitter();
    t.model.MailingStreet();
    t.model.OtherStreet();
    t.model.MailingCity();
    t.model.OtherCity();
    t.model.MailingProvince();
    t.model.OtherProvince();
    t.model.MailingPostal();
    t.model.OtherPostal();
    t.model.MailingCountry();
    t.model.OtherCountry();
    t.model.Description();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
    t.model.fbimg();
    t.model.MarketingSource();
    t.model.RefferalSource();
    t.model.LeadID();
    t.model.group_tag();
    t.model.polite_notice();
    t.model.custom_id();
    t.model.gender();
    t.model.MarketingOptInAll();
    t.model.MarketingOptInEmail();
    t.model.MarketingOptInPhone();
    t.model.MarketingOptInPost();
    t.model.MarketingOptInText();
    t.model.notes_drop();
    t.model.imported();
    t.model.alerts_drop();
    t.model.MarketingSourceRelated();
    t.model.customer_reference();
    t.model.MarketingOptInNewsletter();
    t.model.custom_marketing_source();
    t.model.insurer_id();
    t.model.is_active();
    t.model.xero_contact_id();
    t.model.is_ambassador();
    t.model.UpdatedDate();
    t.model.xero_updated_date();
    t.model.discount_type();
    t.model.custom_clinic_id();
    t.model.ambassador_id();
    t.model.contract_id();
    t.model.privacy_policy();
    t.model.need_to_knows();
    t.model.contact_type();
  },
});

export const cm_contactsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts();
    t.crud.cm_contacts({ filtering: true, ordering: true });
  },
});

export const cm_contactsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts();
    t.crud.updateOnecm_contacts();
    t.crud.upsertOnecm_contacts();
    t.crud.deleteOnecm_contacts();

    t.crud.updateManycm_contacts();
    t.crud.deleteManycm_contacts();
  },
});
