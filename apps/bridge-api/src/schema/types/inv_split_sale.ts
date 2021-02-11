import { objectType, extendType } from 'nexus';

export const inv_split_sale = objectType({
  name: 'inv_split_sale',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.sale_id();
    t.model.biller_id();
    t.model.amount();
  },
});

export const inv_split_saleQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_split_sale();
    t.crud.inv_split_sales({ filtering: true, ordering: true });
  },
});

export const inv_split_saleMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_split_sale();
    t.crud.updateOneinv_split_sale();
    t.crud.upsertOneinv_split_sale();
    t.crud.deleteOneinv_split_sale();

    t.crud.updateManyinv_split_sale();
    t.crud.deleteManyinv_split_sale();
  },
});
