import { objectType, extendType } from 'nexus';

export const at_questions = objectType({
  name: 'at_questions',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.order();
    t.model.region();
  },
});

export const at_questionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.at_questions();
    t.crud.at_questions({ filtering: true, ordering: true });
  },
});

export const at_questionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneat_questions();
    t.crud.updateOneat_questions();
    t.crud.upsertOneat_questions();
    t.crud.deleteOneat_questions();

    t.crud.updateManyat_questions();
    t.crud.deleteManyat_questions();
  },
});
