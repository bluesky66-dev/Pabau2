import { objectType, extendType } from 'nexus';

export const AutomationFolder = objectType({
  name: 'AutomationFolder',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.description();
  },
});

export const automationFolderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automationFolder();
    t.crud.automationFolders({ filtering: true, ordering: true , pagination: true });

    t.field('automationFoldersCount', {
      type: 'Int',
      args: {
        where: 'AutomationFolderWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationFolder.count(args);
      },
    });
  },
});

export const automationFolderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAutomationFolder();
    t.crud.updateOneAutomationFolder();
    t.crud.upsertOneAutomationFolder();
    t.crud.deleteOneAutomationFolder();

    t.crud.updateManyAutomationFolder();
    t.crud.deleteManyAutomationFolder();
  },
});
