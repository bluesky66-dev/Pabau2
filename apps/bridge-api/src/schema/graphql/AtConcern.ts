import { objectType, arg, extendType } from 'nexus'

export const AtConcern = objectType({
  name: 'AtConcern',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.image()
    t.model.region()
  },
})

export const atConcernQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.atConcern()
    t.field('findFirstAtConcern', {
      type: 'AtConcern',
      args: {
        where: 'AtConcernWhereInput',
        orderBy: arg({ type: 'AtConcernOrderByInput' }),
        cursor: 'AtConcernWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atConcern.findFirst(args as any)
      },
    })
    t.crud.atConcerns({ filtering: true, ordering: true })
    t.field('atConcernsCount', {
      type: 'Int',
      args: {
        where: 'AtConcernWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atConcern.count(args as any)
      },
    })
  },
})

export const atConcernMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAtConcern()
    t.crud.updateOneAtConcern()
    t.crud.upsertOneAtConcern()
    t.crud.deleteOneAtConcern()
    t.crud.updateManyAtConcern()
    t.crud.deleteManyAtConcern()
  },
})
