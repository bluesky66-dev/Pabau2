import { objectType, extendType } from 'nexus';

export const referral_settings = objectType({
  name: 'referral_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.thanks_msg_id();
    t.model.auto_reward();
    t.model.reward_value();
    t.model.voucher_expiry_days();
    t.model.reward_type();
    t.model.reward_options();
    t.model.sms_notify();
    t.model.email_notify();
    t.model.connect_wording();
    t.model.blind_ref_email();
    t.model.post_buzzfeed();
    t.model.reward_refee_value();
    t.model.reward_client();
    t.model.reward_referer();
    t.model.thanks_msg_id_referee();
    t.model.email_id_referrer();
    t.model.email_id_referee();
    t.model.enable_sms_referee();
    t.model.enable_email_referee();
    t.model.voucher_template_id();
  },
});

export const referral_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.referral_settings();
    t.crud.referral_settings({ filtering: true, ordering: true });
  },
});

export const referral_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereferral_settings();
    t.crud.updateOnereferral_settings();
    t.crud.upsertOnereferral_settings();
    t.crud.deleteOnereferral_settings();

    t.crud.updateManyreferral_settings();
    t.crud.deleteManyreferral_settings();
  },
});
