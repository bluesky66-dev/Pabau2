import { objectType, extendType } from 'nexus';

export const cm_payments_custom = objectType({
  name: 'cm_payments_custom',
  definition(t) {
    t.model.id();
    t.model.payment_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_value();
    t.model.imported();
  },
});

export const cm_payments_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_payments_custom();
    t.crud.cm_payments_customs({ filtering: true, ordering: true });
  },
});

export const cm_payments_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_payments_custom();
    t.crud.updateOnecm_payments_custom();
    t.crud.upsertOnecm_payments_custom();
    t.crud.deleteOnecm_payments_custom();

    t.crud.updateManycm_payments_custom();
    t.crud.deleteManycm_payments_custom();
  },
});
