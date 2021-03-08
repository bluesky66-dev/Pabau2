import { objectType, extendType } from 'nexus';

export const AutomationDelay = objectType({
  name: 'AutomationDelay',
  definition(t) {
    t.model.id();
    t.model.action_rows();
    t.model.data_array();
    t.model.code();
    t.model.company();
    t.model.delay();
    t.model.date_queued();
    t.model.appointment_id();
  },
});

export const automationDelayQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automationDelay();
    t.crud.automationDelays({ filtering: true, ordering: true });

    t.field('automationDelaysCount', {
      type: 'Int',
      args: {
        where: 'AutomationDelayWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationDelay.count(args);
      },
    });
  },
});

export const automationDelayMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAutomationDelay();
    t.crud.updateOneAutomationDelay();
    t.crud.upsertOneAutomationDelay();
    t.crud.deleteOneAutomationDelay();

    t.crud.updateManyAutomationDelay();
    t.crud.deleteManyAutomationDelay();
  },
});
