import { objectType, extendType } from 'nexus';

export const company_services_retail_products = objectType({
  name: 'company_services_retail_products',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.service_id();
    t.model.product_id();
    t.model.quantity();
    t.model.consumable_deduction();
  },
});

export const company_services_retail_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_retail_products();
    t.crud.company_services_retail_products({ filtering: true, ordering: true });
  },
});

export const company_services_retail_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_retail_products();
    t.crud.updateOnecompany_services_retail_products();
    t.crud.upsertOnecompany_services_retail_products();
    t.crud.deleteOnecompany_services_retail_products();

    t.crud.updateManycompany_services_retail_products();
    t.crud.deleteManycompany_services_retail_products();
  },
});
