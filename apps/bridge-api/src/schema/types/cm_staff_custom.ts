import { objectType, extendType } from 'nexus';

export const cm_staff_custom = objectType({
  name: 'cm_staff_custom',
  definition(t) {
    t.model.id();
    t.model.staff_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_label();
    t.model.custom_field_value();
    t.model.imported();
    t.model.old_value();
  },
});

export const cm_staff_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_custom();
    t.crud.cm_staff_customs({ filtering: true, ordering: true });
  },
});

export const cm_staff_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_custom();
    t.crud.updateOnecm_staff_custom();
    t.crud.upsertOnecm_staff_custom();
    t.crud.deleteOnecm_staff_custom();

    t.crud.updateManycm_staff_custom();
    t.crud.deleteManycm_staff_custom();
  },
});
