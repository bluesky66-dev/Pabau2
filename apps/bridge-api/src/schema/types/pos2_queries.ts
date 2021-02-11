import { objectType, extendType } from 'nexus';

export const pos2_queries = objectType({
  name: 'pos2_queries',
  definition(t) {
    t.model.id();
    t.model.transaction_id();
    t.model.query();
  },
});

export const pos2_queriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pos2_queries();
    t.crud.pos2_queries({ filtering: true, ordering: true });
  },
});

export const pos2_queriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepos2_queries();
    t.crud.updateOnepos2_queries();
    t.crud.upsertOnepos2_queries();
    t.crud.deleteOnepos2_queries();

    t.crud.updateManypos2_queries();
    t.crud.deleteManypos2_queries();
  },
});
