import { objectType, extendType } from 'nexus';

export const psfs_initial_email_trigger = objectType({
  name: 'psfs_initial_email_trigger',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.booking_id();
    t.model.contact_id();
    t.model.cycle_id();
    t.model.form_id();
    t.model.date_time();
    t.model.discharge();
    t.model.discharge_date();
  },
});

export const psfs_initial_email_triggerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.psfs_initial_email_trigger();
    t.crud.psfs_initial_email_triggers({ filtering: true, ordering: true });
  },
});

export const psfs_initial_email_triggerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepsfs_initial_email_trigger();
    t.crud.updateOnepsfs_initial_email_trigger();
    t.crud.upsertOnepsfs_initial_email_trigger();
    t.crud.deleteOnepsfs_initial_email_trigger();

    t.crud.updateManypsfs_initial_email_trigger();
    t.crud.deleteManypsfs_initial_email_trigger();
  },
});
