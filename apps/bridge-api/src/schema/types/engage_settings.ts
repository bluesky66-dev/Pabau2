import { objectType, extendType } from 'nexus';

export const engage_settings = objectType({
  name: 'engage_settings',
  definition(t) {
    t.model.service_id();
    t.model.setting_type();
    t.model.company_id();
    t.model.active();
    t.model.sms_template();
    t.model.email_template();
    t.model.lost_period();
    t.model.method();
    t.model.customer_since();
    t.model.negative_feedback();
    t.model.ignore_sms_optout();
    t.model.no_appts_min();
    t.model.no_appts_max();
    t.model.amount_paid_min();
    t.model.amount_paid_max();
    t.model.client_status();
    t.model.last_engaged();
    t.model.customer_of();
    t.model.birthday();
    t.model.gender();
    t.model.age_min();
    t.model.age_max();
    t.model.notes();
    t.model.fw_sms_template();
    t.model.fw_email_template();
    t.model.fw_period();
    t.model.fw_method();
  },
});

export const engage_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.engage_settings();
    t.crud.engage_settings({ filtering: true, ordering: true });
  },
});

export const engage_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneengage_settings();
    t.crud.updateOneengage_settings();
    t.crud.upsertOneengage_settings();
    t.crud.deleteOneengage_settings();

    t.crud.updateManyengage_settings();
    t.crud.deleteManyengage_settings();
  },
});
