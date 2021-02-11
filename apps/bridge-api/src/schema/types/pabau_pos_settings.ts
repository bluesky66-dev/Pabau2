import { objectType, extendType } from 'nexus';

export const pabau_pos_settings = objectType({
  name: 'pabau_pos_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.disable_service();
    t.model.disable_products();
    t.model.disable_packages();
    t.model.disable_giftcards();
    t.model.disable_account();
    t.model.disable_price_override();
    t.model.print_mode();
    t.model.disable_discount();
    t.model.email_receipt_text();
    t.model.theme_col();
    t.model.bank_account();
    t.model.bank_number();
    t.model.sort_code();
    t.model.bank_name();
    t.model.iban();
    t.model.swift();
    t.model.cashup_settings();
    t.model.default_payment_type();
    t.model.disable_loyalty();
    t.model.email_receipt_template();
    t.model.enable_bank_details();
    t.model.vat();
    t.model.enable_biller_settings();
    t.model.display_taxes();
    t.model.use_pabau_id();
    t.model.starting_invoice_number();
    t.model.enable_next_appointment();
    t.model.show_paid_label();
    t.model.paid_label();
    t.model.display_quantity();
    t.model.display_unit_cost();
    t.model.logo_position();
    t.model.force_discount_reason();
    t.model.automatic_booking();
    t.model.gift_msg_template_id();
    t.model.gift_sms_template_id();
    t.model.package_use_by_date();
    t.model.locked();
    t.model.cron_day();
    t.model.lock_sale_date();
    t.model.stock_mode();
    t.model.inv_template();
    t.model.lock_invoice_edit();
  },
});

export const pabau_pos_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_pos_settings();
    t.crud.pabau_pos_settings({ filtering: true, ordering: true });
  },
});

export const pabau_pos_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_pos_settings();
    t.crud.updateOnepabau_pos_settings();
    t.crud.upsertOnepabau_pos_settings();
    t.crud.deleteOnepabau_pos_settings();

    t.crud.updateManypabau_pos_settings();
    t.crud.deleteManypabau_pos_settings();
  },
});
