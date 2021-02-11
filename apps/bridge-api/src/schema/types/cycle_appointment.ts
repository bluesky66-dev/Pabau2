import { objectType, extendType } from 'nexus';

export const cycle_appointment = objectType({
  name: 'cycle_appointment',
  definition(t) {
    t.model.id();
    t.model.cycle_id();
    t.model.appt_id();
    t.model.date_created();
    t.model.occupier();
  },
});

export const cycle_appointmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cycle_appointment();
    t.crud.cycle_appointments({ filtering: true, ordering: true });
  },
});

export const cycle_appointmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecycle_appointment();
    t.crud.updateOnecycle_appointment();
    t.crud.upsertOnecycle_appointment();
    t.crud.deleteOnecycle_appointment();

    t.crud.updateManycycle_appointment();
    t.crud.deleteManycycle_appointment();
  },
});
