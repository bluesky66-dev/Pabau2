import { objectType, extendType } from 'nexus';

export const voucher_settings = objectType({
  name: 'voucher_settings',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.sms_mode();
    t.model.sms_name();
    t.model.sms_id();
    t.model.voucher_color_theme();
    t.model.terms();
  },
});

export const voucher_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.voucher_settings();
    t.crud.voucher_settings({ filtering: true, ordering: true });
  },
});

export const voucher_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevoucher_settings();
    t.crud.updateOnevoucher_settings();
    t.crud.upsertOnevoucher_settings();
    t.crud.deleteOnevoucher_settings();

    t.crud.updateManyvoucher_settings();
    t.crud.deleteManyvoucher_settings();
  },
});
