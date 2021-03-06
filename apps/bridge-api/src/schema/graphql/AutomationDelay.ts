import { objectType, arg, extendType } from 'nexus'

export const AutomationDelay = objectType({
  name: 'AutomationDelay',
  definition(t) {
    t.model.id()
    t.model.action_rows()
    t.model.data_array()
    t.model.code()
    t.model.company()
    t.model.delay()
    t.model.date_queued()
    t.model.appointment_id()
  },
})

export const automationDelayQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automationDelay()
    t.field('findFirstAutomationDelay', {
      type: 'AutomationDelay',
      args: {
        where: 'AutomationDelayWhereInput',
        orderBy: arg({ type: 'AutomationDelayOrderByInput' }),
        cursor: 'AutomationDelayWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationDelay.findFirst(args as any)
      },
    })
    t.crud.automationDelays({ filtering: true, ordering: true })
    t.field('automationDelaysCount', {
      type: 'Int',
      args: {
        where: 'AutomationDelayWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationDelay.count(args as any)
      },
    })
  },
})

export const automationDelayMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAutomationDelay()
    t.crud.updateOneAutomationDelay()
    t.crud.upsertOneAutomationDelay()
    t.crud.deleteOneAutomationDelay()
    t.crud.updateManyAutomationDelay()
    t.crud.deleteManyAutomationDelay()
  },
})
