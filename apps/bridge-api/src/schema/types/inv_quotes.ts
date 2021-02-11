import { objectType, extendType } from 'nexus';

export const inv_quotes = objectType({
  name: 'inv_quotes',
  definition(t) {
    t.model.id();
    t.model.date();
    t.model.guid();
    t.model.booking_id();
    t.model.customer_id();
    t.model.customer_name();
    t.model.location_id();
    t.model.total();
    t.model.occupier();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const inv_quotesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_quotes();
    t.crud.inv_quotes({ filtering: true, ordering: true });
  },
});

export const inv_quotesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_quotes();
    t.crud.updateOneinv_quotes();
    t.crud.upsertOneinv_quotes();
    t.crud.deleteOneinv_quotes();

    t.crud.updateManyinv_quotes();
    t.crud.deleteManyinv_quotes();
  },
});
