import { objectType, extendType } from 'nexus';

export const company_ip_filtering = objectType({
  name: 'company_ip_filtering',
  definition(t) {
    t.model.ip_filtering_id();
    t.model.company_id();
    t.model.ipv4_range_start();
    t.model.ipv4_range_end();
  },
});

export const company_ip_filteringQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_ip_filtering();
    t.crud.company_ip_filterings({ filtering: true, ordering: true });
  },
});

export const company_ip_filteringMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_ip_filtering();
    t.crud.updateOnecompany_ip_filtering();
    t.crud.upsertOnecompany_ip_filtering();
    t.crud.deleteOnecompany_ip_filtering();

    t.crud.updateManycompany_ip_filtering();
    t.crud.deleteManycompany_ip_filtering();
  },
});
