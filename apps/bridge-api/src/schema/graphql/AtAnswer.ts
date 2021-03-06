import { objectType, arg, extendType } from 'nexus'

export const AtAnswer = objectType({
  name: 'AtAnswer',
  definition(t) {
    t.model.id()
    t.model.question_id()
    t.model.name()
    t.model.image()
  },
})

export const atAnswerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.atAnswer()
    t.field('findFirstAtAnswer', {
      type: 'AtAnswer',
      args: {
        where: 'AtAnswerWhereInput',
        orderBy: arg({ type: 'AtAnswerOrderByInput' }),
        cursor: 'AtAnswerWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atAnswer.findFirst(args as any)
      },
    })
    t.crud.atAnswers({ filtering: true, ordering: true })
    t.field('atAnswersCount', {
      type: 'Int',
      args: {
        where: 'AtAnswerWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atAnswer.count(args as any)
      },
    })
  },
})

export const atAnswerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAtAnswer()
    t.crud.updateOneAtAnswer()
    t.crud.upsertOneAtAnswer()
    t.crud.deleteOneAtAnswer()
    t.crud.updateManyAtAnswer()
    t.crud.deleteManyAtAnswer()
  },
})
