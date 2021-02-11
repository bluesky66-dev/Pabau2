import { objectType, extendType } from 'nexus';

export const warning_scripts = objectType({
  name: 'warning_scripts',
  definition(t) {
    t.model.id();
    t.model.report_date();
    t.model.contact_count();
    t.model.sale_count();
    t.model.payment_count();
    t.model.appointment_count();
    t.model.old_count();
    t.model.trigger_alert();
    t.model.inv_sale_item_count();
  },
});

export const warning_scriptsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.warning_scripts();
    t.crud.warning_scripts({ filtering: true, ordering: true });
  },
});

export const warning_scriptsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewarning_scripts();
    t.crud.updateOnewarning_scripts();
    t.crud.upsertOnewarning_scripts();
    t.crud.deleteOnewarning_scripts();

    t.crud.updateManywarning_scripts();
    t.crud.deleteManywarning_scripts();
  },
});
