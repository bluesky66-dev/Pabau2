import { objectType, extendType } from 'nexus';

export const import_contacts_hb = objectType({
  name: 'import_contacts_hb',
  definition(t) {
    t.model.id();
    t.model.Fname();
    t.model.Lname();
    t.model.Email();
    t.model.Phone();
    t.model.Mobile();
    t.model.OtherPhone();
    t.model.DOB();
    t.model.Note();
    t.model.gender();
    t.model.MailingStreet();
    t.model.custom_id();
    t.model.inserted();
  },
});

export const import_contacts_hbQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.import_contacts_hb();
    t.crud.import_contacts_hbs({ filtering: true, ordering: true });
  },
});

export const import_contacts_hbMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneimport_contacts_hb();
    t.crud.updateOneimport_contacts_hb();
    t.crud.upsertOneimport_contacts_hb();
    t.crud.deleteOneimport_contacts_hb();

    t.crud.updateManyimport_contacts_hb();
    t.crud.deleteManyimport_contacts_hb();
  },
});
