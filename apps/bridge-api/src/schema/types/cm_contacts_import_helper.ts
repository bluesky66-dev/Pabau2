import { objectType, extendType } from 'nexus';

export const cm_contacts_import_helper = objectType({
  name: 'cm_contacts_import_helper',
  definition(t) {
    t.model.id();
    t.model.contact_name();
    t.model.Email();
    t.model.occupier();
  },
});

export const cm_contacts_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_import_helper();
    t.crud.cm_contacts_import_helpers({ filtering: true, ordering: true });
  },
});

export const cm_contacts_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_import_helper();
    t.crud.updateOnecm_contacts_import_helper();
    t.crud.upsertOnecm_contacts_import_helper();
    t.crud.deleteOnecm_contacts_import_helper();

    t.crud.updateManycm_contacts_import_helper();
    t.crud.deleteManycm_contacts_import_helper();
  },
});
