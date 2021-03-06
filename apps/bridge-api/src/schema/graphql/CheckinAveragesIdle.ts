import { objectType, arg, extendType } from 'nexus'

export const CheckinAveragesIdle = objectType({
  name: 'CheckinAveragesIdle',
  definition(t) {
    t.model.id()
    t.model.username()
    t.model.uid()
    t.model.avg()
    t.model.retailutilisation_avg()
  },
})

export const checkinAveragesIdleQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkinAveragesIdle()
    t.field('findFirstCheckinAveragesIdle', {
      type: 'CheckinAveragesIdle',
      args: {
        where: 'CheckinAveragesIdleWhereInput',
        orderBy: arg({ type: 'CheckinAveragesIdleOrderByInput' }),
        cursor: 'CheckinAveragesIdleWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.checkinAveragesIdle.findFirst(args as any)
      },
    })
    t.crud.checkinAveragesIdles({ filtering: true, ordering: true })
    t.field('checkinAveragesIdlesCount', {
      type: 'Int',
      args: {
        where: 'CheckinAveragesIdleWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.checkinAveragesIdle.count(args as any)
      },
    })
  },
})

export const checkinAveragesIdleMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCheckinAveragesIdle()
    t.crud.updateOneCheckinAveragesIdle()
    t.crud.upsertOneCheckinAveragesIdle()
    t.crud.deleteOneCheckinAveragesIdle()
    t.crud.updateManyCheckinAveragesIdle()
    t.crud.deleteManyCheckinAveragesIdle()
  },
})
