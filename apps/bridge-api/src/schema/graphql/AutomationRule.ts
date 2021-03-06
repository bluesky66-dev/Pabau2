import { objectType, arg, extendType } from 'nexus'

export const AutomationRule = objectType({
  name: 'AutomationRule',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.company()
    t.model.active()
    t.model.source()
    t.model.date_start()
    t.model.date_end()
    t.model.description()
    t.model.needs_config()
    t.model.folder_id()
  },
})

export const automationRuleQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automationRule()
    t.field('findFirstAutomationRule', {
      type: 'AutomationRule',
      args: {
        where: 'AutomationRuleWhereInput',
        orderBy: arg({ type: 'AutomationRuleOrderByInput' }),
        cursor: 'AutomationRuleWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationRule.findFirst(args as any)
      },
    })
    t.crud.automationRules({ filtering: true, ordering: true })
    t.field('automationRulesCount', {
      type: 'Int',
      args: {
        where: 'AutomationRuleWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationRule.count(args as any)
      },
    })
  },
})

export const automationRuleMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAutomationRule()
    t.crud.updateOneAutomationRule()
    t.crud.upsertOneAutomationRule()
    t.crud.deleteOneAutomationRule()
    t.crud.updateManyAutomationRule()
    t.crud.deleteManyAutomationRule()
  },
})
