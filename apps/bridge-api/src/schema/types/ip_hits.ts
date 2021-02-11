import { objectType, extendType } from 'nexus';

export const ip_hits = objectType({
  name: 'ip_hits',
  definition(t) {
    t.model.id();
    t.model.ip();
    t.model.hits();
  },
});

export const ip_hitsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_hits();
    t.crud.ip_hits({ filtering: true, ordering: true });
  },
});

export const ip_hitsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_hits();
    t.crud.updateOneip_hits();
    t.crud.upsertOneip_hits();
    t.crud.deleteOneip_hits();

    t.crud.updateManyip_hits();
    t.crud.deleteManyip_hits();
  },
});
