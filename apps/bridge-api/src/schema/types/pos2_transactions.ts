import { objectType, extendType } from 'nexus';

export const pos2_transactions = objectType({
  name: 'pos2_transactions',
  definition(t) {
    t.model.id();
    t.model.guid();
    t.model.bill_date();
    t.model.php_date();
    t.model.uid();
    t.model.company();
    t.model.bill();
    t.model.result();
    t.model.result_text();
    t.model.hold();
    t.model.booking_id();
    t.model.receipt();
  },
});

export const pos2_transactionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pos2_transactions();
    t.crud.pos2_transactions({ filtering: true, ordering: true });
  },
});

export const pos2_transactionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepos2_transactions();
    t.crud.updateOnepos2_transactions();
    t.crud.upsertOnepos2_transactions();
    t.crud.deleteOnepos2_transactions();

    t.crud.updateManypos2_transactions();
    t.crud.deleteManypos2_transactions();
  },
});
