import { objectType, extendType } from 'nexus';

export const company_hits = objectType({
  name: 'company_hits',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.hits();
    t.model.file();
  },
});

export const company_hitsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_hits();
    t.crud.company_hits({ filtering: true, ordering: true });
  },
});

export const company_hitsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_hits();
    t.crud.updateOnecompany_hits();
    t.crud.upsertOnecompany_hits();
    t.crud.deleteOnecompany_hits();

    t.crud.updateManycompany_hits();
    t.crud.deleteManycompany_hits();
  },
});
