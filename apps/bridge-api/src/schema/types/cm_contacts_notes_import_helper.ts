import { objectType, extendType } from 'nexus';

export const cm_contacts_notes_import_helper = objectType({
  name: 'cm_contacts_notes_import_helper',
  definition(t) {
    t.model.id();
    t.model.contact_custom_id();
    t.model.note();
    t.model.date();
    t.model.custom_user_name();
    t.model.occupier();
    t.model.imported();
    t.model.custom_user_id();
    t.model.added();
    t.model.custom_contact_name();
    t.model.contact_id();
    t.model.user_id();
  },
});

export const cm_contacts_notes_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_notes_import_helper();
    t.crud.cm_contacts_notes_import_helpers({ filtering: true, ordering: true });
  },
});

export const cm_contacts_notes_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_notes_import_helper();
    t.crud.updateOnecm_contacts_notes_import_helper();
    t.crud.upsertOnecm_contacts_notes_import_helper();
    t.crud.deleteOnecm_contacts_notes_import_helper();

    t.crud.updateManycm_contacts_notes_import_helper();
    t.crud.deleteManycm_contacts_notes_import_helper();
  },
});
