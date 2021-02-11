import { objectType, extendType } from 'nexus';

export const company_attached_products = objectType({
  name: 'company_attached_products',
  definition(t) {
    t.model.id();
    t.model.company_services_id();
    t.model.product_id();
  },
});

export const company_attached_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_attached_products();
    t.crud.company_attached_products({ filtering: true, ordering: true });
  },
});

export const company_attached_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_attached_products();
    t.crud.updateOnecompany_attached_products();
    t.crud.upsertOnecompany_attached_products();
    t.crud.deleteOnecompany_attached_products();

    t.crud.updateManycompany_attached_products();
    t.crud.deleteManycompany_attached_products();
  },
});
