import { objectType, arg, extendType } from 'nexus'

export const AtQuizTake = objectType({
  name: 'AtQuizTake',
  definition(t) {
    t.model.id()
    t.model.company_id()
    t.model.name()
    t.model.email()
    t.model.take_date()
    t.model.answers()
    t.model.concerns()
    t.model.answers2()
    t.model.products()
  },
})

export const atQuizTakeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.atQuizTake()
    t.field('findFirstAtQuizTake', {
      type: 'AtQuizTake',
      args: {
        where: 'AtQuizTakeWhereInput',
        orderBy: arg({ type: 'AtQuizTakeOrderByInput' }),
        cursor: 'AtQuizTakeWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atQuizTake.findFirst(args as any)
      },
    })
    t.crud.atQuizTakes({ filtering: true, ordering: true })
    t.field('atQuizTakesCount', {
      type: 'Int',
      args: {
        where: 'AtQuizTakeWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atQuizTake.count(args as any)
      },
    })
  },
})

export const atQuizTakeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAtQuizTake()
    t.crud.updateOneAtQuizTake()
    t.crud.upsertOneAtQuizTake()
    t.crud.deleteOneAtQuizTake()
    t.crud.updateManyAtQuizTake()
    t.crud.deleteManyAtQuizTake()
  },
})
