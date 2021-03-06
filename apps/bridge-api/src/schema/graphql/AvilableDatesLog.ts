import { objectType, arg, extendType } from 'nexus'

export const AvilableDatesLog = objectType({
  name: 'AvilableDatesLog',
  definition(t) {
    t.model.id()
    t.model.occupier()
    t.model.uid()
    t.model.date()
    t.model.start()
    t.model.end()
  },
})

export const avilableDatesLogQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.avilableDatesLog()
    t.field('findFirstAvilableDatesLog', {
      type: 'AvilableDatesLog',
      args: {
        where: 'AvilableDatesLogWhereInput',
        orderBy: arg({ type: 'AvilableDatesLogOrderByInput' }),
        cursor: 'AvilableDatesLogWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.avilableDatesLog.findFirst(args as any)
      },
    })
    t.crud.avilableDatesLogs({ filtering: true, ordering: true })
    t.field('avilableDatesLogsCount', {
      type: 'Int',
      args: {
        where: 'AvilableDatesLogWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.avilableDatesLog.count(args as any)
      },
    })
  },
})

export const avilableDatesLogMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAvilableDatesLog()
    t.crud.updateOneAvilableDatesLog()
    t.crud.upsertOneAvilableDatesLog()
    t.crud.deleteOneAvilableDatesLog()
    t.crud.updateManyAvilableDatesLog()
    t.crud.deleteManyAvilableDatesLog()
  },
})
