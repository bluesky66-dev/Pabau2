import { objectType, extendType } from 'nexus';

export const psfs_followup_email_trigger = objectType({
  name: 'psfs_followup_email_trigger',
  definition(t) {
    t.model.id();
    t.model.initial_id();
    t.model.date_time();
    t.model.type();
    t.model.email_type();
  },
});

export const psfs_followup_email_triggerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.psfs_followup_email_trigger();
    t.crud.psfs_followup_email_triggers({ filtering: true, ordering: true });
  },
});

export const psfs_followup_email_triggerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepsfs_followup_email_trigger();
    t.crud.updateOnepsfs_followup_email_trigger();
    t.crud.upsertOnepsfs_followup_email_trigger();
    t.crud.deleteOnepsfs_followup_email_trigger();

    t.crud.updateManypsfs_followup_email_trigger();
    t.crud.deleteManypsfs_followup_email_trigger();
  },
});
