import { objectType, extendType } from 'nexus';

export const configure_voucher_settings = objectType({
  name: 'configure_voucher_settings',
  definition(t) {
    t.model.id();
    t.model.value();
    t.model.expiry_date();
    t.model.enable();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const configure_voucher_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.configure_voucher_settings();
    t.crud.configure_voucher_settings({ filtering: true, ordering: true });
  },
});

export const configure_voucher_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconfigure_voucher_settings();
    t.crud.updateOneconfigure_voucher_settings();
    t.crud.upsertOneconfigure_voucher_settings();
    t.crud.deleteOneconfigure_voucher_settings();

    t.crud.updateManyconfigure_voucher_settings();
    t.crud.deleteManyconfigure_voucher_settings();
  },
});
