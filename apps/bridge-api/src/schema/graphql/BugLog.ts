import { objectType, arg, extendType } from 'nexus'

export const BugLog = objectType({
  name: 'BugLog',
  definition(t) {
    t.model.id()
    t.model.bug_message()
    t.model.datetime()
    t.model.uid()
    t.model.related_id()
  },
})

export const bugLogQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bugLog()
    t.field('findFirstBugLog', {
      type: 'BugLog',
      args: {
        where: 'BugLogWhereInput',
        orderBy: arg({ type: 'BugLogOrderByInput' }),
        cursor: 'BugLogWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bugLog.findFirst(args as any)
      },
    })
    t.crud.bugLogs({ filtering: true, ordering: true })
    t.field('bugLogsCount', {
      type: 'Int',
      args: {
        where: 'BugLogWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bugLog.count(args as any)
      },
    })
  },
})

export const bugLogMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBugLog()
    t.crud.updateOneBugLog()
    t.crud.upsertOneBugLog()
    t.crud.deleteOneBugLog()
    t.crud.updateManyBugLog()
    t.crud.deleteManyBugLog()
  },
})
