import { objectType, extendType } from 'nexus';

export const cm_contacts_import_helper2 = objectType({
  name: 'cm_contacts_import_helper2',
  definition(t) {
    t.model.id();
    t.model.Salutation();
    t.model.First_Name();
    t.model.Last_Name();
    t.model.Email();
    t.model.Mobile();
    t.model.Home();
    t.model.OtherPhone();
    t.model.Fax();
    t.model.Address1();
    t.model.Address2();
    t.model.City();
    t.model.County();
    t.model.Country();
    t.model.Postcode();
    t.model.DOB();
    t.model.Gender();
    t.model.Notes();
    t.model.group_tag();
    t.model.custom_id();
    t.model.occupier();
    t.model.imported();
    t.model.MarketingOptInAll();
    t.model.MarketingOptInEmail();
    t.model.MarketingOptInPhone();
    t.model.MarketingOptInPost();
    t.model.MarketingOptInText();
    t.model.category();
    t.model.patient_no();
    t.model.marketing_source();
    t.model.alerts();
    t.model.next_of_kin();
    t.model.CreatedDate();
    t.model.UpdatedDate();
    t.model.Insurer();
    t.model.GP_Name();
    t.model.GP_Address();
    t.model.clinic_id();
    t.model.is_active();
    t.model.custom_user_name();
    t.model.marketing_source_other();
    t.model.date_closed();
    t.model.contact_id();
  },
});

export const cm_contacts_import_helper2Query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_import_helper2();
    t.crud.cm_contacts_import_helper2s({ filtering: true, ordering: true });
  },
});

export const cm_contacts_import_helper2Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_import_helper2();
    t.crud.updateOnecm_contacts_import_helper2();
    t.crud.upsertOnecm_contacts_import_helper2();
    t.crud.deleteOnecm_contacts_import_helper2();

    t.crud.updateManycm_contacts_import_helper2();
    t.crud.deleteManycm_contacts_import_helper2();
  },
});
