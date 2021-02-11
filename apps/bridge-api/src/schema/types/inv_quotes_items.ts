import { objectType, extendType } from 'nexus';

export const inv_quotes_items = objectType({
  name: 'inv_quotes_items',
  definition(t) {
    t.model.id();
    t.model.quote_id();
    t.model.service_id();
    t.model.product_id();
    t.model.product_code();
    t.model.product_name();
    t.model.product_unit();
    t.model.price();
    t.model.qty();
    t.model.sold_by();
    t.model.occupier();
  },
});

export const inv_quotes_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_quotes_items();
    t.crud.inv_quotes_items({ filtering: true, ordering: true });
  },
});

export const inv_quotes_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_quotes_items();
    t.crud.updateOneinv_quotes_items();
    t.crud.upsertOneinv_quotes_items();
    t.crud.deleteOneinv_quotes_items();

    t.crud.updateManyinv_quotes_items();
    t.crud.deleteManyinv_quotes_items();
  },
});
