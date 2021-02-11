import { objectType, extendType } from 'nexus';

export const cm_leads = objectType({
  name: 'cm_leads',
  definition(t) {
    t.model.ID();
    t.model.Avatar();
    t.model.OwnerID();
    t.model.ContactID();
    t.model.Salutation();
    t.model.Fname();
    t.model.Lname();
    t.model.DOB();
    t.model.Title();
    t.model.LeadCompany();
    t.model.Occupier();
    t.model.Email();
    t.model.Phone();
    t.model.Fax();
    t.model.Mobile();
    t.model.Website();
    t.model.LeadSource();
    t.model.LeadStatus();
    t.model.Industry();
    t.model.NoOfEmp();
    t.model.AnualRevenue();
    t.model.Rating();
    t.model.EmailOptOut();
    t.model.SkypeId();
    t.model.SecondaryEmail();
    t.model.Twitter();
    t.model.MailingStreet();
    t.model.MailingCity();
    t.model.MailingProvince();
    t.model.MailingPostal();
    t.model.MailingCountry();
    t.model.Description();
    t.model.EnumStatus();
    t.model.Status();
    t.model.CreatedDate();
    t.model.MarketingOptInAll();
    t.model.MarketingOptInEmail();
    t.model.MarketingOptInPhone();
    t.model.MarketingOptInPost();
    t.model.MarketingOptInText();
    t.model.MarketingOptInNewsletter();
    t.model.IpAddress();
    t.model.fbimg();
    t.model.LastUpdated();
    t.model.custom_tag1();
    t.model.online_capture();
    t.model.capture_id();
    t.model.old_LeadStatus();
    t.model.custom_id();
    t.model.imported();
    t.model.ConvertDate();
    t.model.group_id();
    t.model.first_interaction();
    t.model.latest_interaction();
    t.model.location_id();
    t.model.need_to_knows();
  },
});

export const cm_leadsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_leads();
    t.crud.cm_leads({ filtering: true, ordering: true });
  },
});

export const cm_leadsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_leads();
    t.crud.updateOnecm_leads();
    t.crud.upsertOnecm_leads();
    t.crud.deleteOnecm_leads();

    t.crud.updateManycm_leads();
    t.crud.deleteManycm_leads();
  },
});
