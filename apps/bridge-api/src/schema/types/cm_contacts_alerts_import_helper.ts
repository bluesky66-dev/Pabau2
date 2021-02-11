import { objectType, extendType } from 'nexus';

export const cm_contacts_alerts_import_helper = objectType({
  name: 'cm_contacts_alerts_import_helper',
  definition(t) {
    t.model.id();
    t.model.contact_custom_id();
    t.model.alert();
    t.model.date();
    t.model.custom_user_name();
    t.model.occupier();
    t.model.imported();
    t.model.custom_user_id();
    t.model.added();
  },
});

export const cm_contacts_alerts_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_alerts_import_helper();
    t.crud.cm_contacts_alerts_import_helpers({ filtering: true, ordering: true });
  },
});

export const cm_contacts_alerts_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_alerts_import_helper();
    t.crud.updateOnecm_contacts_alerts_import_helper();
    t.crud.upsertOnecm_contacts_alerts_import_helper();
    t.crud.deleteOnecm_contacts_alerts_import_helper();

    t.crud.updateManycm_contacts_alerts_import_helper();
    t.crud.deleteManycm_contacts_alerts_import_helper();
  },
});
