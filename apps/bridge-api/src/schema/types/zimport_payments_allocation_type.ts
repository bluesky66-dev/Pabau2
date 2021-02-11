import { objectType, extendType } from 'nexus';

export const zimport_payments_allocation_type = objectType({
  name: 'zimport_payments_allocation_type',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.custom_field_name();
    t.model.custom_field_value();
    t.model.payment_id();
    t.model.from_type();
    t.model.to_type();
  },
});

export const zimport_payments_allocation_typeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_payments_allocation_type();
    t.crud.zimport_payments_allocation_types({ filtering: true, ordering: true });
  },
});

export const zimport_payments_allocation_typeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_payments_allocation_type();
    t.crud.updateOnezimport_payments_allocation_type();
    t.crud.upsertOnezimport_payments_allocation_type();
    t.crud.deleteOnezimport_payments_allocation_type();

    t.crud.updateManyzimport_payments_allocation_type();
    t.crud.deleteManyzimport_payments_allocation_type();
  },
});
