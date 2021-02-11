import { objectType, extendType } from 'nexus';

export const inv_payment_types = objectType({
  name: 'inv_payment_types',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.epos_display();
    t.model.description();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.is_active();
    t.model.is_money();
    t.model.type();
  },
});

export const inv_payment_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_payment_types();
    t.crud.inv_payment_types({ filtering: true, ordering: true });
  },
});

export const inv_payment_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_payment_types();
    t.crud.updateOneinv_payment_types();
    t.crud.upsertOneinv_payment_types();
    t.crud.deleteOneinv_payment_types();

    t.crud.updateManyinv_payment_types();
    t.crud.deleteManyinv_payment_types();
  },
});
