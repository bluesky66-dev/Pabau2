import { objectType, extendType } from 'nexus';

export const inv_shipping_rates = objectType({
  name: 'inv_shipping_rates',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.rate();
    t.model.type();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const inv_shipping_ratesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_shipping_rates();
    t.crud.inv_shipping_rates({ filtering: true, ordering: true });
  },
});

export const inv_shipping_ratesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_shipping_rates();
    t.crud.updateOneinv_shipping_rates();
    t.crud.upsertOneinv_shipping_rates();
    t.crud.deleteOneinv_shipping_rates();

    t.crud.updateManyinv_shipping_rates();
    t.crud.deleteManyinv_shipping_rates();
  },
});
