import { objectType, extendType } from 'nexus';

export const pract_charge_amount = objectType({
  name: 'pract_charge_amount',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.company_id();
    t.model.commission_sheet_id();
    t.model.product_id();
    t.model.charge_amount();
    t.model.facility_fee();
    t.model.facility_fee2();
    t.model.deduct_consumables();
    t.model.payout_employee();
    t.model.payout_business();
    t.model.c_deductions();
  },
});

export const pract_charge_amountQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pract_charge_amount();
    t.crud.pract_charge_amounts({ filtering: true, ordering: true });
  },
});

export const pract_charge_amountMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepract_charge_amount();
    t.crud.updateOnepract_charge_amount();
    t.crud.upsertOnepract_charge_amount();
    t.crud.deleteOnepract_charge_amount();

    t.crud.updateManypract_charge_amount();
    t.crud.deleteManypract_charge_amount();
  },
});
