import { objectType, extendType } from 'nexus';

export const cm_contacts_custom = objectType({
  name: 'cm_contacts_custom',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_label();
    t.model.custom_field_value();
    t.model.imported();
    t.model.old_value();
  },
});

export const cm_contacts_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_custom();
    t.crud.cm_contacts_customs({ filtering: true, ordering: true });
  },
});

export const cm_contacts_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_custom();
    t.crud.updateOnecm_contacts_custom();
    t.crud.upsertOnecm_contacts_custom();
    t.crud.deleteOnecm_contacts_custom();

    t.crud.updateManycm_contacts_custom();
    t.crud.deleteManycm_contacts_custom();
  },
});
