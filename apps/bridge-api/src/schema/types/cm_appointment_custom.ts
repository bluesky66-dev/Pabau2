import { objectType, extendType } from 'nexus';

export const cm_appointment_custom = objectType({
  name: 'cm_appointment_custom',
  definition(t) {
    t.model.id();
    t.model.appointment_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_value();
    t.model.imported();
  },
});

export const cm_appointment_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_appointment_custom();
    t.crud.cm_appointment_customs({ filtering: true, ordering: true });
  },
});

export const cm_appointment_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_appointment_custom();
    t.crud.updateOnecm_appointment_custom();
    t.crud.upsertOnecm_appointment_custom();
    t.crud.deleteOnecm_appointment_custom();

    t.crud.updateManycm_appointment_custom();
    t.crud.deleteManycm_appointment_custom();
  },
});
