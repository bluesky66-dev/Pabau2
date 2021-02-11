import { objectType, extendType } from 'nexus';

export const insurance_cp_amount = objectType({
  name: 'insurance_cp_amount',
  definition(t) {
    t.model.id();
    t.model.contract_id();
    t.model.product_id();
    t.model.price();
    t.model.price_0();
    t.model.price_1();
    t.model.price_2();
    t.model.price_3();
    t.model.price_4();
    t.model.price_5();
    t.model.price_6();
    t.model.company_id();
  },
});

export const insurance_cp_amountQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.insurance_cp_amount();
    t.crud.insurance_cp_amounts({ filtering: true, ordering: true });
  },
});

export const insurance_cp_amountMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinsurance_cp_amount();
    t.crud.updateOneinsurance_cp_amount();
    t.crud.upsertOneinsurance_cp_amount();
    t.crud.deleteOneinsurance_cp_amount();

    t.crud.updateManyinsurance_cp_amount();
    t.crud.deleteManyinsurance_cp_amount();
  },
});
