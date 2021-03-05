import { objectType, extendType } from 'nexus';

export const AtQuestion = objectType({
  name: 'AtQuestion',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.order();
    t.model.region();
  },
});

export const atQuestionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.atQuestion();
    t.crud.atQuestions({ filtering: true, ordering: true });

    t.field('atQuestionsCount', {
      type: 'Int',
      args: {
        where: 'AtQuestionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atQuestion.count(args);
      },
    });
  },
});

export const atQuestionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAtQuestion();
    t.crud.updateOneAtQuestion();
    t.crud.upsertOneAtQuestion();
    t.crud.deleteOneAtQuestion();

    t.crud.updateManyAtQuestion();
    t.crud.deleteManyAtQuestion();
  },
});
