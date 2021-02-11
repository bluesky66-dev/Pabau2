import { objectType, extendType } from 'nexus';

export const service_reminders = objectType({
  name: 'service_reminders',
  definition(t) {
    t.model.id();
    t.model.service_id();
    t.model.email_reminder_id();
    t.model.sms_reminder_id();
  },
});

export const service_remindersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.service_reminders();
    t.crud.service_reminders({ filtering: true, ordering: true });
  },
});

export const service_remindersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneservice_reminders();
    t.crud.updateOneservice_reminders();
    t.crud.upsertOneservice_reminders();
    t.crud.deleteOneservice_reminders();

    t.crud.updateManyservice_reminders();
    t.crud.deleteManyservice_reminders();
  },
});
