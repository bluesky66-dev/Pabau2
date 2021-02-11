import { objectType, extendType } from 'nexus';

export const metro_reminders = objectType({
  name: 'metro_reminders',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.company();
    t.model.title();
    t.model.description();
    t.model.reminder_date();
    t.model.notification();
    t.model.reminder_type();
    t.model.item_id();
  },
});

export const metro_remindersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.metro_reminders();
    t.crud.metro_reminders({ filtering: true, ordering: true });
  },
});

export const metro_remindersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemetro_reminders();
    t.crud.updateOnemetro_reminders();
    t.crud.upsertOnemetro_reminders();
    t.crud.deleteOnemetro_reminders();

    t.crud.updateManymetro_reminders();
    t.crud.deleteManymetro_reminders();
  },
});
