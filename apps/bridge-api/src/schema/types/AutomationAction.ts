import { objectType, extendType } from 'nexus';

export const AutomationAction = objectType({
  name: 'AutomationAction',
  definition(t) {
    t.model.id();
    t.model.trigger_id();
    t.model.company();
    t.model.code();
    t.model.action_data();
    t.model.order();
  },
});

export const automationActionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automationAction();
    t.crud.automationActions({ filtering: true, ordering: true });

    t.field('automationActionsCount', {
      type: 'Int',
      args: {
        where: 'AutomationActionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationAction.count(args);
      },
    });
  },
});

export const automationActionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAutomationAction();
    t.crud.updateOneAutomationAction();
    t.crud.upsertOneAutomationAction();
    t.crud.deleteOneAutomationAction();

    t.crud.updateManyAutomationAction();
    t.crud.deleteManyAutomationAction();
  },
});
