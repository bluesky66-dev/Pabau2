import { objectType, extendType } from 'nexus';

export const zimport_payments_custom_fields = objectType({
  name: 'zimport_payments_custom_fields',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.custom_payment_id();
    t.model.custom_field_name();
    t.model.custom_value();
  },
});

export const zimport_payments_custom_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_payments_custom_fields();
    t.crud.zimport_payments_custom_fields({ filtering: true, ordering: true });
  },
});

export const zimport_payments_custom_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_payments_custom_fields();
    t.crud.updateOnezimport_payments_custom_fields();
    t.crud.upsertOnezimport_payments_custom_fields();
    t.crud.deleteOnezimport_payments_custom_fields();

    t.crud.updateManyzimport_payments_custom_fields();
    t.crud.deleteManyzimport_payments_custom_fields();
  },
});
