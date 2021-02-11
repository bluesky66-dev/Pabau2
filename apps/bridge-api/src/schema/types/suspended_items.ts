import { objectType, extendType } from 'nexus';

export const suspended_items = objectType({
  name: 'suspended_items',
  definition(t) {
    t.model.id();
    t.model.suspend_id();
    t.model.product_id();
    t.model.product_code();
    t.model.product_name();
    t.model.product_unit();
    t.model.tax_rate_id();
    t.model.tax();
    t.model.quantity();
    t.model.unit_price();
    t.model.gross_total();
    t.model.val_tax();
    t.model.staff_purchase();
  },
});

export const suspended_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.suspended_items();
    t.crud.suspended_items({ filtering: true, ordering: true });
  },
});

export const suspended_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesuspended_items();
    t.crud.updateOnesuspended_items();
    t.crud.upsertOnesuspended_items();
    t.crud.deleteOnesuspended_items();

    t.crud.updateManysuspended_items();
    t.crud.deleteManysuspended_items();
  },
});
