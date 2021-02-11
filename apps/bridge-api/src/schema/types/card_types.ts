import { objectType, extendType } from 'nexus';

export const card_types = objectType({
  name: 'card_types',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.mastercard();
    t.model.visa();
    t.model.amex();
    t.model.visa_credit();
    t.model.maestro();
    t.model.worldpay();
    t.model.visa_credit_charge();
    t.model.amex_credit_charge();
    t.model.mastercard_credit_charge();
    t.model.enable_reference();
  },
});

export const card_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.card_types();
    t.crud.card_types({ filtering: true, ordering: true });
  },
});

export const card_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecard_types();
    t.crud.updateOnecard_types();
    t.crud.upsertOnecard_types();
    t.crud.deleteOnecard_types();

    t.crud.updateManycard_types();
    t.crud.deleteManycard_types();
  },
});
