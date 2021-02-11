import { objectType, extendType } from 'nexus';

export const company_ga_filtering = objectType({
  name: 'company_ga_filtering',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.ipv4_range_start();
    t.model.ipv4_range_end();
  },
});

export const company_ga_filteringQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_ga_filtering();
    t.crud.company_ga_filterings({ filtering: true, ordering: true });
  },
});

export const company_ga_filteringMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_ga_filtering();
    t.crud.updateOnecompany_ga_filtering();
    t.crud.upsertOnecompany_ga_filtering();
    t.crud.deleteOnecompany_ga_filtering();

    t.crud.updateManycompany_ga_filtering();
    t.crud.deleteManycompany_ga_filtering();
  },
});
