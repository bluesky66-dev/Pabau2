import { objectType, extendType } from 'nexus';

export const tanning_history = objectType({
  name: 'tanning_history',
  definition(t) {
    t.model.trans_id();
    t.model.date();
    t.model.employee_id();
    t.model.type();
    t.model.amount();
    t.model.contact_id();
    t.model.sales_id();
  },
});

export const tanning_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tanning_history();
    t.crud.tanning_histories({ filtering: true, ordering: true });
  },
});

export const tanning_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetanning_history();
    t.crud.updateOnetanning_history();
    t.crud.upsertOnetanning_history();
    t.crud.deleteOnetanning_history();

    t.crud.updateManytanning_history();
    t.crud.deleteManytanning_history();
  },
});
