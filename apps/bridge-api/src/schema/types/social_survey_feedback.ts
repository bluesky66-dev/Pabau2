import { objectType, extendType } from 'nexus';

export const social_survey_feedback = objectType({
  name: 'social_survey_feedback',
  definition(t) {
    t.model.id();
    t.model.rating();
    t.model.contact_id();
    t.model.feedback_source();
    t.model.company();
    t.model.date();
    t.model.feedback_comment();
    t.model.feedback_name();
    t.model.feedback_status();
    t.model.related_id();
    t.model.related_to();
    t.model.feedback_for();
    t.model.service();
    t.model.public_use();
    t.model.service_id();
    t.model.owner_response();
  },
});

export const social_survey_feedbackQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.social_survey_feedback();
    t.crud.social_survey_feedbacks({ filtering: true, ordering: true });
  },
});

export const social_survey_feedbackMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesocial_survey_feedback();
    t.crud.updateOnesocial_survey_feedback();
    t.crud.upsertOnesocial_survey_feedback();
    t.crud.deleteOnesocial_survey_feedback();

    t.crud.updateManysocial_survey_feedback();
    t.crud.deleteManysocial_survey_feedback();
  },
});
