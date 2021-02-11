import { objectType, extendType } from 'nexus';

export const cm_notes_custom = objectType({
  name: 'cm_notes_custom',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.occupier();
    t.model.user();
    t.model.custom_field_id();
    t.model.custom_field_label();
    t.model.custom_field_value();
    t.model.created_date();
    t.model.imported();
    t.model.is_read();
  },
});

export const cm_notes_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_notes_custom();
    t.crud.cm_notes_customs({ filtering: true, ordering: true });
  },
});

export const cm_notes_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_notes_custom();
    t.crud.updateOnecm_notes_custom();
    t.crud.upsertOnecm_notes_custom();
    t.crud.deleteOnecm_notes_custom();

    t.crud.updateManycm_notes_custom();
    t.crud.deleteManycm_notes_custom();
  },
});
