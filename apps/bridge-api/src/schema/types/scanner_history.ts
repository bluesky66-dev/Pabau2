import { objectType, extendType } from 'nexus';

export const scanner_history = objectType({
  name: 'scanner_history',
  definition(t) {
    t.model.trans_id();
    t.model.date();
    t.model.member_id();
    t.model.type();
    t.model.amount();
    t.model.contact_id();
    t.model.sales_id();
  },
});

export const scanner_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.scanner_history();
    t.crud.scanner_histories({ filtering: true, ordering: true });
  },
});

export const scanner_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnescanner_history();
    t.crud.updateOnescanner_history();
    t.crud.upsertOnescanner_history();
    t.crud.deleteOnescanner_history();

    t.crud.updateManyscanner_history();
    t.crud.deleteManyscanner_history();
  },
});
