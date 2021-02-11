import { objectType, extendType } from 'nexus';

export const lead_capture_settings = objectType({
  name: 'lead_capture_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.capture_name();
    t.model.page_title();
    t.model.logo();
    t.model.background_image();
    t.model.header1();
    t.model.sub_heading();
    t.model.submission_counts();
    t.model.impression_counts();
    t.model.right_description();
    t.model.thanks_message();
    t.model.CreatedDate();
    t.model.from_email();
    t.model.message_id();
    t.model.to_email();
    t.model.facebook_url();
    t.model.twitter_url();
    t.model.back_button_url();
    t.model.top_header();
    t.model.redirect_link();
    t.model.tag();
    t.model.top_header_color();
    t.model.gym_pass();
    t.model.default_rating();
    t.model.default_lead_status();
    t.model.from_subject();
    t.model.client_email();
    t.model.from_email_message();
    t.model.disable_lead_creation();
    t.model.disable_duplicates();
    t.model.disable_spam_filter();
    t.model.send_business_sms();
    t.model.send_business_sms_to();
    t.model.google_tracking_code();
    t.model.send_business_sms_to_2();
    t.model.send_business_sms_to_3();
    t.model.auto_assign_id();
    t.model.junk_numbers();
    t.model.junk_long_text();
    t.model.photo_uploader_hits();
  },
});

export const lead_capture_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_capture_settings();
    t.crud.lead_capture_settings({ filtering: true, ordering: true });
  },
});

export const lead_capture_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_capture_settings();
    t.crud.updateOnelead_capture_settings();
    t.crud.upsertOnelead_capture_settings();
    t.crud.deleteOnelead_capture_settings();

    t.crud.updateManylead_capture_settings();
    t.crud.deleteManylead_capture_settings();
  },
});
