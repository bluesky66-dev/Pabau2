import { objectType, extendType } from 'nexus';

export const unit_purchase = objectType({
  name: 'unit_purchase',
  definition(t) {
    t.model.id();
    t.model.p_id();
    t.model.product_id();
    t.model.product_price();
    t.model.product_quantity();
    t.model.customer_id();
    t.model.currency();
    t.model.date();
    t.model.comp_id();
  },
});

export const unit_purchaseQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.unit_purchase();
    t.crud.unit_purchases({ filtering: true, ordering: true });
  },
});

export const unit_purchaseMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneunit_purchase();
    t.crud.updateOneunit_purchase();
    t.crud.upsertOneunit_purchase();
    t.crud.deleteOneunit_purchase();

    t.crud.updateManyunit_purchase();
    t.crud.deleteManyunit_purchase();
  },
});
