import { objectType, extendType } from 'nexus';

export const recent_searches = objectType({
  name: 'recent_searches',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.company_id();
  },
});

export const recent_searchesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.recent_searches();
    t.crud.recent_searches({ filtering: true, ordering: true });
  },
});

export const recent_searchesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerecent_searches();
    t.crud.updateOnerecent_searches();
    t.crud.upsertOnerecent_searches();
    t.crud.deleteOnerecent_searches();

    t.crud.updateManyrecent_searches();
    t.crud.deleteManyrecent_searches();
  },
});
