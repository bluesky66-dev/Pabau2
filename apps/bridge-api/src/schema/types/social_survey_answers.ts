import { objectType, extendType } from 'nexus';

export const social_survey_answers = objectType({
  name: 'social_survey_answers',
  definition(t) {
    t.model.id();
    t.model.feedback_id();
    t.model.question();
    t.model.answer();
  },
});

export const social_survey_answersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.social_survey_answers();
    t.crud.social_survey_answers({ filtering: true, ordering: true });
  },
});

export const social_survey_answersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesocial_survey_answers();
    t.crud.updateOnesocial_survey_answers();
    t.crud.upsertOnesocial_survey_answers();
    t.crud.deleteOnesocial_survey_answers();

    t.crud.updateManysocial_survey_answers();
    t.crud.deleteManysocial_survey_answers();
  },
});
