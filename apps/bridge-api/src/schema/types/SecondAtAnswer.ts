import { objectType, extendType } from 'nexus';

export const SecondAtAnswer = objectType({
  name: 'SecondAtAnswer',
  definition(t) {
    t.model.id();
    t.model.question_id();
    t.model.name();
  },
});

export const secondAtAnswerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.secondAtAnswer();
    t.crud.secondAtAnswers({ filtering: true, ordering: true , pagination: true });

    t.field('secondAtAnswersCount', {
      type: 'Int',
      args: {
        where: 'SecondAtAnswerWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.secondAtAnswer.count(args);
      },
    });
  },
});

export const secondAtAnswerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSecondAtAnswer();
    t.crud.updateOneSecondAtAnswer();
    t.crud.upsertOneSecondAtAnswer();
    t.crud.deleteOneSecondAtAnswer();

    t.crud.updateManySecondAtAnswer();
    t.crud.deleteManySecondAtAnswer();
  },
});
