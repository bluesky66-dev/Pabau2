import { objectType, extendType } from 'nexus';

export const communication_log_appointments = objectType({
  name: 'communication_log_appointments',
  definition(t) {
    t.model.id();
    t.model.communication_id();
    t.model.appt_id();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const communication_log_appointmentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communication_log_appointments();
    t.crud.communication_log_appointments({ filtering: true, ordering: true });
  },
});

export const communication_log_appointmentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunication_log_appointments();
    t.crud.updateOnecommunication_log_appointments();
    t.crud.upsertOnecommunication_log_appointments();
    t.crud.deleteOnecommunication_log_appointments();

    t.crud.updateManycommunication_log_appointments();
    t.crud.deleteManycommunication_log_appointments();
  },
});
