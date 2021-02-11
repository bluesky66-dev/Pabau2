import { objectType, extendType } from 'nexus';

export const company_treatment_products = objectType({
  name: 'company_treatment_products',
  definition(t) {
    t.model.id();
    t.model.product_id();
    t.model.group_id();
    t.model.occupier();
  },
});

export const company_treatment_productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_treatment_products();
    t.crud.company_treatment_products({ filtering: true, ordering: true });
  },
});

export const company_treatment_productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_treatment_products();
    t.crud.updateOnecompany_treatment_products();
    t.crud.upsertOnecompany_treatment_products();
    t.crud.deleteOnecompany_treatment_products();

    t.crud.updateManycompany_treatment_products();
    t.crud.deleteManycompany_treatment_products();
  },
});
