import { objectType, extendType } from 'nexus';

export const waiting_finance = objectType({
  name: 'waiting_finance',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.amount();
    t.model.date();
  },
});

export const waiting_financeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.waiting_finance();
    t.crud.waiting_finances({ filtering: true, ordering: true });
  },
});

export const waiting_financeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewaiting_finance();
    t.crud.updateOnewaiting_finance();
    t.crud.upsertOnewaiting_finance();
    t.crud.deleteOnewaiting_finance();

    t.crud.updateManywaiting_finance();
    t.crud.deleteManywaiting_finance();
  },
});
