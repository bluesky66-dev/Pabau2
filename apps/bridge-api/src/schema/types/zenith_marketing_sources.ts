import { objectType, extendType } from 'nexus';

export const zenith_marketing_sources = objectType({
  name: 'zenith_marketing_sources',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.marketing_source();
    t.model.custom_category_id();
  },
});

export const zenith_marketing_sourcesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zenith_marketing_sources();
    t.crud.zenith_marketing_sources({ filtering: true, ordering: true });
  },
});

export const zenith_marketing_sourcesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezenith_marketing_sources();
    t.crud.updateOnezenith_marketing_sources();
    t.crud.upsertOnezenith_marketing_sources();
    t.crud.deleteOnezenith_marketing_sources();

    t.crud.updateManyzenith_marketing_sources();
    t.crud.deleteManyzenith_marketing_sources();
  },
});
