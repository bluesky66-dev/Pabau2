import { objectType, extendType } from 'nexus';

export const pos_settings = objectType({
  name: 'pos_settings',
  definition(t) {
    t.model.pos_id();
    t.model.cat_limit();
    t.model.pro_limit();
    t.model.default_category();
    t.model.default_customer();
    t.model.default_biller();
    t.model.display_time();
    t.model.display_avatar();
    t.model.display_account();
    t.model.services_filter();
    t.model.retail_filter();
    t.model.salesbtn_left_disabled();
    t.model.cancelbtn_bottom_disabled();
    t.model.occupier();
    t.model.cashup_settings();
  },
});

export const pos_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pos_settings();
    t.crud.pos_settings({ filtering: true, ordering: true });
  },
});

export const pos_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepos_settings();
    t.crud.updateOnepos_settings();
    t.crud.upsertOnepos_settings();
    t.crud.deleteOnepos_settings();

    t.crud.updateManypos_settings();
    t.crud.deleteManypos_settings();
  },
});
