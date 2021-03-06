import { objectType, arg, extendType } from 'nexus'

export const CheckinAverages = objectType({
  name: 'CheckinAverages',
  definition(t) {
    t.model.id()
    t.model.uid()
    t.model.product_id()
    t.model.avg_time_seconds()
  },
})

export const checkinAveragesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkinAverages()
    t.field('findFirstCheckinAverages', {
      type: 'CheckinAverages',
      args: {
        where: 'CheckinAveragesWhereInput',
        orderBy: arg({ type: 'CheckinAveragesOrderByInput' }),
        cursor: 'CheckinAveragesWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.checkinAverages.findFirst(args as any)
      },
    })
    t.crud.checkinAverages({ filtering: true, ordering: true })
    t.field('checkinAveragesCount', {
      type: 'Int',
      args: {
        where: 'CheckinAveragesWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.checkinAverages.count(args as any)
      },
    })
  },
})

export const checkinAveragesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCheckinAverages()
    t.crud.updateOneCheckinAverages()
    t.crud.upsertOneCheckinAverages()
    t.crud.deleteOneCheckinAverages()
    t.crud.updateManyCheckinAverages()
    t.crud.deleteManyCheckinAverages()
  },
})
