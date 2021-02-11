import { objectType, extendType } from 'nexus';

export const tab_items = objectType({
  name: 'tab_items',
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

export const tab_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tab_items();
    t.crud.tab_items({ filtering: true, ordering: true });
  },
});

export const tab_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetab_items();
    t.crud.updateOnetab_items();
    t.crud.upsertOnetab_items();
    t.crud.deleteOnetab_items();

    t.crud.updateManytab_items();
    t.crud.deleteManytab_items();
  },
});
