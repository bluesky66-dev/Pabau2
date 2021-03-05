import { objectType, extendType } from 'nexus';

export const SecondAtQuestion = objectType({
  name: 'SecondAtQuestion',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.type();
  },
});

export const secondAtQuestionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.secondAtQuestion();
    t.crud.secondAtQuestions({ filtering: true, ordering: true });

    t.field('secondAtQuestionsCount', {
      type: 'Int',
      args: {
        where: 'SecondAtQuestionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.secondAtQuestion.count(args);
      },
    });
  },
});

export const secondAtQuestionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSecondAtQuestion();
    t.crud.updateOneSecondAtQuestion();
    t.crud.upsertOneSecondAtQuestion();
    t.crud.deleteOneSecondAtQuestion();

    t.crud.updateManySecondAtQuestion();
    t.crud.deleteManySecondAtQuestion();
  },
});
