import { objectType, extendType } from 'nexus';

export const user_security_questions_answer = objectType({
  name: 'user_security_questions_answer',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.question();
    t.model.question_no();
    t.model.answer();
    t.model.users();
  },
});

export const user_security_questions_answerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_security_questions_answer();
    t.crud.user_security_questions_answers({ filtering: true, ordering: true });
  },
});

export const user_security_questions_answerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_security_questions_answer();
    t.crud.updateOneuser_security_questions_answer();
    t.crud.upsertOneuser_security_questions_answer();
    t.crud.deleteOneuser_security_questions_answer();

    t.crud.updateManyuser_security_questions_answer();
    t.crud.deleteManyuser_security_questions_answer();
  },
});
