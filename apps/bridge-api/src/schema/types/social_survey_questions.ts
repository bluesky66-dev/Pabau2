import { objectType, extendType } from 'nexus';

export const social_survey_questions = objectType({
  name: 'social_survey_questions',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.question();
    t.model.answer();
  },
});

export const social_survey_questionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.social_survey_questions();
    t.crud.social_survey_questions({ filtering: true, ordering: true });
  },
});

export const social_survey_questionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesocial_survey_questions();
    t.crud.updateOnesocial_survey_questions();
    t.crud.upsertOnesocial_survey_questions();
    t.crud.deleteOnesocial_survey_questions();

    t.crud.updateManysocial_survey_questions();
    t.crud.deleteManysocial_survey_questions();
  },
});
