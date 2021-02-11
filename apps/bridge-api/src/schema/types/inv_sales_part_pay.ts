import { objectType, extendType } from 'nexus';

export const inv_sales_part_pay = objectType({
  name: 'inv_sales_part_pay',
  definition(t) {
    t.model.id();
    t.model.sales_id();
    t.model.type();
    t.model.amount();
    t.model.order_id();
    t.model.occupier();
  },
});

export const inv_sales_part_payQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sales_part_pay();
    t.crud.inv_sales_part_pays({ filtering: true, ordering: true });
  },
});

export const inv_sales_part_payMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sales_part_pay();
    t.crud.updateOneinv_sales_part_pay();
    t.crud.upsertOneinv_sales_part_pay();
    t.crud.deleteOneinv_sales_part_pay();

    t.crud.updateManyinv_sales_part_pay();
    t.crud.deleteManyinv_sales_part_pay();
  },
});
