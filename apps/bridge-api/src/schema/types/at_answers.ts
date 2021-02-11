import { objectType, extendType } from 'nexus';

export const at_answers = objectType({
  name: 'at_answers',
  definition(t) {
    t.model.id();
    t.model.question_id();
    t.model.name();
    t.model.image();
  },
});

export const at_answersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.at_answers();
    t.crud.at_answers({ filtering: true, ordering: true });
  },
});

export const at_answersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneat_answers();
    t.crud.updateOneat_answers();
    t.crud.upsertOneat_answers();
    t.crud.deleteOneat_answers();

    t.crud.updateManyat_answers();
    t.crud.deleteManyat_answers();
  },
});
