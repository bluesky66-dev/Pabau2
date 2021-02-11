import { objectType, extendType } from 'nexus';

export const reminder_contact_log = objectType({
  name: 'reminder_contact_log',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.contact_id();
    t.model.date();
  },
});

export const reminder_contact_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.reminder_contact_log();
    t.crud.reminder_contact_logs({ filtering: true, ordering: true });
  },
});

export const reminder_contact_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereminder_contact_log();
    t.crud.updateOnereminder_contact_log();
    t.crud.upsertOnereminder_contact_log();
    t.crud.deleteOnereminder_contact_log();

    t.crud.updateManyreminder_contact_log();
    t.crud.deleteManyreminder_contact_log();
  },
});
