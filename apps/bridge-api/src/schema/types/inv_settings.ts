import { objectType, extendType } from 'nexus';

export const inv_settings = objectType({
  name: 'inv_settings',
  definition(t) {
    t.model.setting_id();
    t.model.logo();
    t.model.site_name();
    t.model.language();
    t.model.default_warehouse();
    t.model.currency_prefix();
    t.model.default_invoice_type();
    t.model.default_tax_rate();
    t.model.rows_per_page();
    t.model.no_of_rows();
    t.model.total_rows();
    t.model.order_by();
    t.model.product_order_by();
    t.model.version();
    t.model.default_tax_rate2();
    t.model.calculate_vat();
    t.model.vat();
    t.model.tab_print();
    t.model.tip();
    t.model.unpaid_invoice();
    t.model.redirect_url();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.enable_taxes();
    t.model.enable_online_payment();
  },
});

export const inv_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_settings();
    t.crud.inv_settings({ filtering: true, ordering: true });
  },
});

export const inv_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_settings();
    t.crud.updateOneinv_settings();
    t.crud.upsertOneinv_settings();
    t.crud.deleteOneinv_settings();

    t.crud.updateManyinv_settings();
    t.crud.deleteManyinv_settings();
  },
});
