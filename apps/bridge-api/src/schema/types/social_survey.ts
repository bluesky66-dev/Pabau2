import { objectType, extendType } from 'nexus';

export const social_survey = objectType({
  name: 'social_survey',
  definition(t) {
    t.model.id();
    t.model.page_id();
    t.model.company();
    t.model.twitter_id();
    t.model.disable_email();
    t.model.disable_sms();
    t.model.sms_message_id();
    t.model.from_name();
    t.model.sms_days_after();
    t.model.sms_send_time();
    t.model.feedback_title();
    t.model.feedback_subtitle();
    t.model.feedback_question();
    t.model.auto_facebook();
    t.model.auto_twitter();
    t.model.after_page();
    t.model.google_plus_link();
    t.model.google_review();
    t.model.google_review_url();
    t.model.aweber_code();
    t.model.score_indicator();
    t.model.add_note();
    t.model.post_buzzfeed();
    t.model.post_website();
    t.model.email_message_id();
    t.model.redirect_url();
    t.model.feedback_name();
    t.model.ty_enable_email();
    t.model.ty_enable_sms();
    t.model.ty_email_id();
    t.model.ty_sms_id();
    t.model.color_1();
    t.model.color_2();
    t.model.google_review_redirect();
    t.model.show_reviews_above();
    t.model.logo_position();
    t.model.logo_height();
    t.model.hits();
  },
});

export const social_surveyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.social_survey();
    t.crud.social_surveys({ filtering: true, ordering: true });
  },
});

export const social_surveyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesocial_survey();
    t.crud.updateOnesocial_survey();
    t.crud.upsertOnesocial_survey();
    t.crud.deleteOnesocial_survey();

    t.crud.updateManysocial_survey();
    t.crud.deleteManysocial_survey();
  },
});
