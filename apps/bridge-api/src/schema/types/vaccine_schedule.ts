import { objectType, extendType } from 'nexus';

export const vaccine_schedule = objectType({
  name: 'vaccine_schedule',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.company_id();
    t.model.vaccine_id();
    t.model.recall_id();
    t.model.scheduled_admin_date();
    t.model.actual_admin_date();
    t.model.coverage_end_date();
    t.model.schedule_cover_length();
    t.model.medical_record_id();
    t.model.disease_id();
    t.model.is_administered();
    t.model.batch_no();
    t.model.source();
    t.model.created_by();
    t.model.created_on();
    t.model.path_taken_id();
  },
});

export const vaccine_scheduleQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.vaccine_schedule();
    t.crud.vaccine_schedules({ filtering: true, ordering: true });
  },
});

export const vaccine_scheduleMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevaccine_schedule();
    t.crud.updateOnevaccine_schedule();
    t.crud.upsertOnevaccine_schedule();
    t.crud.deleteOnevaccine_schedule();

    t.crud.updateManyvaccine_schedule();
    t.crud.deleteManyvaccine_schedule();
  },
});
