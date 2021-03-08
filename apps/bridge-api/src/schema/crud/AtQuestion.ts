import { objectType, arg, extendType } from 'nexus'

export const AtQuestion = objectType({
  name: 'AtQuestion',
  definition(t) {
    t.model.id()
    t.model.company_id()
    t.model.name()
    t.model.order()
    t.model.region()
  },
})

export const atQuestionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.atQuestion()
    t.field('findFirstAtQuestion', {
      type: 'AtQuestion',
      args: {
        where: 'AtQuestionWhereInput',
        orderBy: arg({ type: 'AtQuestionOrderByInput' }),
        cursor: 'AtQuestionWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atQuestion.findFirst(args as any)
      },
    })
    t.crud.atQuestions({ filtering: true, ordering: true })
    t.field('atQuestionsCount', {
      type: 'Int',
      args: {
        where: 'AtQuestionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atQuestion.count(args as any)
      },
    })
  },
})

export const atQuestionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAtQuestion()
    t.crud.updateOneAtQuestion()
    t.crud.upsertOneAtQuestion()
    t.crud.deleteOneAtQuestion()
    t.crud.updateManyAtQuestion()
    t.crud.deleteManyAtQuestion()
  },
})
