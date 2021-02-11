import { objectType, extendType } from 'nexus';

export const commission_sheet_settings = objectType({
  name: 'commission_sheet_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.products_col();
    t.model.charge_client_col();
    t.model.facility_fee_col();
    t.model.facility_fee2_col();
    t.model.deduct_consum_col();
    t.model.payout_emp_col();
    t.model.products_active();
    t.model.charge_client_active();
    t.model.facility_fee_active();
    t.model.facility_fee2_active();
    t.model.deduct_consum_active();
    t.model.payout_emp_active();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const commission_sheet_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.commission_sheet_settings();
    t.crud.commission_sheet_settings({ filtering: true, ordering: true });
  },
});

export const commission_sheet_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommission_sheet_settings();
    t.crud.updateOnecommission_sheet_settings();
    t.crud.upsertOnecommission_sheet_settings();
    t.crud.deleteOnecommission_sheet_settings();

    t.crud.updateManycommission_sheet_settings();
    t.crud.deleteManycommission_sheet_settings();
  },
});
