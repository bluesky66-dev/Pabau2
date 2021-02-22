import { objectType, extendType } from 'nexus';

export const AutomationTrigger = objectType({
  name: 'AutomationTrigger',
  definition(t) {
    t.model.id();
    t.model.rule_id();
    t.model.name();
    t.model.company();
    t.model.code();
    t.model.trigger_data();
    t.model.order();
  },
});

export const automationTriggerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automationTrigger();
    t.crud.automationTriggers({ filtering: true, ordering: true });

    t.field('automationTriggersCount', {
      type: 'Int',
      args: {
        where: 'AutomationTriggerWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationTrigger.count(args);
      },
    });
  },
});

export const automationTriggerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAutomationTrigger();
    t.crud.updateOneAutomationTrigger();
    t.crud.upsertOneAutomationTrigger();
    t.crud.deleteOneAutomationTrigger();

    t.crud.updateManyAutomationTrigger();
    t.crud.deleteManyAutomationTrigger();
  },
});
