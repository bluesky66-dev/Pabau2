import { objectType, extendType } from 'nexus';

export const recall_schedule = objectType({
  name: 'recall_schedule',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.recall_id();
    t.model.contact_id();
    t.model.date();
    t.model.scheduled_date();
    t.model.notes();
    t.model.sms_sent();
    t.model.recalled_by();
    t.model.recalled_on();
    t.model.email_sent();
    t.model.deleted();
    t.model.booking_id();
    t.model.created_date();
    t.model.updated_date();
    t.model.error_code();
  },
});

export const recall_scheduleQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.recall_schedule();
    t.crud.recall_schedules({ filtering: true, ordering: true });
  },
});

export const recall_scheduleMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerecall_schedule();
    t.crud.updateOnerecall_schedule();
    t.crud.upsertOnerecall_schedule();
    t.crud.deleteOnerecall_schedule();

    t.crud.updateManyrecall_schedule();
    t.crud.deleteManyrecall_schedule();
  },
});
