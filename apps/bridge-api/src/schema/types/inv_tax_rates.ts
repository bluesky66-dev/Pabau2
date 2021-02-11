import { objectType, extendType } from 'nexus';

export const inv_tax_rates = objectType({
  name: 'inv_tax_rates',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.rate();
    t.model.type();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.is_active();
    t.model.description();
    t.model.date_constrained();
    t.model.start_date();
    t.model.end_date();
    t.model.show_on_receipt();
    t.model.custom_id();
  },
});

export const inv_tax_ratesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_tax_rates();
    t.crud.inv_tax_rates({ filtering: true, ordering: true });
  },
});

export const inv_tax_ratesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_tax_rates();
    t.crud.updateOneinv_tax_rates();
    t.crud.upsertOneinv_tax_rates();
    t.crud.deleteOneinv_tax_rates();

    t.crud.updateManyinv_tax_rates();
    t.crud.deleteManyinv_tax_rates();
  },
});
