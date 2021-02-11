import { objectType, extendType } from 'nexus';

export const sales_meta = objectType({
  name: 'sales_meta',
  definition(t) {
    t.model.id();
    t.model.sales_id();
    t.model.meta_key();
    t.model.meta_value();
  },
});

export const sales_metaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sales_meta();
    t.crud.sales_metas({ filtering: true, ordering: true });
  },
});

export const sales_metaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesales_meta();
    t.crud.updateOnesales_meta();
    t.crud.upsertOnesales_meta();
    t.crud.deleteOnesales_meta();

    t.crud.updateManysales_meta();
    t.crud.deleteManysales_meta();
  },
});
