import { objectType, extendType } from 'nexus';

export const pg_appointment_status = objectType({
  name: 'pg_appointment_status',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.appointment_id();
    t.model.patient_details();
    t.model.medical_history();
    t.model.patient_consent();
    t.model.photos();
    t.model.treatment_notes();
    t.model.contact_id();
    t.model.consent_1();
    t.model.consent_2();
    t.model.consent_3();
    t.model.aftercare_sent();
    t.model.aftercare_template_ids();
    t.model.created_at();
  },
});

export const pg_appointment_statusQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pg_appointment_status();
    t.crud.pg_appointment_statuses({ filtering: true, ordering: true });
  },
});

export const pg_appointment_statusMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepg_appointment_status();
    t.crud.updateOnepg_appointment_status();
    t.crud.upsertOnepg_appointment_status();
    t.crud.deleteOnepg_appointment_status();

    t.crud.updateManypg_appointment_status();
    t.crud.deleteManypg_appointment_status();
  },
});
