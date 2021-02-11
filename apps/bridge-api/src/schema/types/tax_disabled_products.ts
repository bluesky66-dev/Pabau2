import { objectType, extendType } from 'nexus';

export const tax_disabled_products = objectType({
  name: 'tax_disabled_products',
  definition(t) {
    t.model.id();
    t.model.tax_id();
    t.model.product_id();
  },
});

export const tax_disabled_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tax_disabled_products();
    t.crud.tax_disabled_products({ filtering: true, ordering: true });
  },
});

export const tax_disabled_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetax_disabled_products();
    t.crud.updateOnetax_disabled_products();
    t.crud.upsertOnetax_disabled_products();
    t.crud.deleteOnetax_disabled_products();

    t.crud.updateManytax_disabled_products();
    t.crud.deleteManytax_disabled_products();
  },
});
