import { objectType, extendType } from 'nexus';

export const cm_purchase_items = objectType({
  name: 'cm_purchase_items',
  definition(t) {
    t.model.id();
    t.model.order_id();
    t.model.product_id();
    t.model.quantity();
    t.model.cost_price();
    t.model.amount_received();
  },
});

export const cm_purchase_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_purchase_items();
    t.crud.cm_purchase_items({ filtering: true, ordering: true });
  },
});

export const cm_purchase_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_purchase_items();
    t.crud.updateOnecm_purchase_items();
    t.crud.upsertOnecm_purchase_items();
    t.crud.deleteOnecm_purchase_items();

    t.crud.updateManycm_purchase_items();
    t.crud.deleteManycm_purchase_items();
  },
});
