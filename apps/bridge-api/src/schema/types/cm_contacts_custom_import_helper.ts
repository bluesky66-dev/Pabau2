import { objectType, extendType } from 'nexus';

export const cm_contacts_custom_import_helper = objectType({
  name: 'cm_contacts_custom_import_helper',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_contact_id();
    t.model.custom_contact_name();
    t.model.custom_field_name();
    t.model.custom_field_value();
    t.model.added();
    t.model.contact_id();
  },
});

export const cm_contacts_custom_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_custom_import_helper();
    t.crud.cm_contacts_custom_import_helpers({ filtering: true, ordering: true });
  },
});

export const cm_contacts_custom_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_custom_import_helper();
    t.crud.updateOnecm_contacts_custom_import_helper();
    t.crud.upsertOnecm_contacts_custom_import_helper();
    t.crud.deleteOnecm_contacts_custom_import_helper();

    t.crud.updateManycm_contacts_custom_import_helper();
    t.crud.deleteManycm_contacts_custom_import_helper();
  },
});
