import { objectType, extendType } from 'nexus';

export const page_hits = objectType({
  name: 'page_hits',
  definition(t) {
    t.model.id();
    t.model.file();
    t.model.hits();
    t.model.memory_usage();
  },
});

export const page_hitsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.page_hits();
    t.crud.page_hits({ filtering: true, ordering: true });
  },
});

export const page_hitsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepage_hits();
    t.crud.updateOnepage_hits();
    t.crud.upsertOnepage_hits();
    t.crud.deleteOnepage_hits();

    t.crud.updateManypage_hits();
    t.crud.deleteManypage_hits();
  },
});
