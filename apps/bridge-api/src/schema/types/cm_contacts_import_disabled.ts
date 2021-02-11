import { objectType, extendType } from 'nexus';

export const cm_contacts_import_disabled = objectType({
  name: 'cm_contacts_import_disabled',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.disabled();
  },
});

export const cm_contacts_import_disabledQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_import_disabled();
    t.crud.cm_contacts_import_disableds({ filtering: true, ordering: true });
  },
});

export const cm_contacts_import_disabledMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_import_disabled();
    t.crud.updateOnecm_contacts_import_disabled();
    t.crud.upsertOnecm_contacts_import_disabled();
    t.crud.deleteOnecm_contacts_import_disabled();

    t.crud.updateManycm_contacts_import_disabled();
    t.crud.deleteManycm_contacts_import_disabled();
  },
});
