import { objectType, arg, extendType } from 'nexus'

export const AutomationLog = objectType({
  name: 'AutomationLog',
  definition(t) {
    t.model.id()
    t.model.company()
    t.model.date_created()
    t.model.message()
    t.model.parent_id()
    t.model.uid()
  },
})

export const automationLogQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automationLog()
    t.field('findFirstAutomationLog', {
      type: 'AutomationLog',
      args: {
        where: 'AutomationLogWhereInput',
        orderBy: arg({ type: 'AutomationLogOrderByInput' }),
        cursor: 'AutomationLogWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationLog.findFirst(args as any)
      },
    })
    t.crud.automationLogs({ filtering: true, ordering: true })
    t.field('automationLogsCount', {
      type: 'Int',
      args: {
        where: 'AutomationLogWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationLog.count(args as any)
      },
    })
  },
})

export const automationLogMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAutomationLog()
    t.crud.updateOneAutomationLog()
    t.crud.upsertOneAutomationLog()
    t.crud.deleteOneAutomationLog()
    t.crud.updateManyAutomationLog()
    t.crud.deleteManyAutomationLog()
  },
})
