import { objectType, arg, extendType } from 'nexus'

export const AutomationFolder = objectType({
  name: 'AutomationFolder',
  definition(t) {
    t.model.id()
    t.model.company_id()
    t.model.name()
    t.model.description()
  },
})

export const automationFolderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automationFolder()
    t.field('findFirstAutomationFolder', {
      type: 'AutomationFolder',
      args: {
        where: 'AutomationFolderWhereInput',
        orderBy: arg({ type: 'AutomationFolderOrderByInput' }),
        cursor: 'AutomationFolderWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationFolder.findFirst(args as any)
      },
    })
    t.crud.automationFolders({ filtering: true, ordering: true })
    t.field('automationFoldersCount', {
      type: 'Int',
      args: {
        where: 'AutomationFolderWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.automationFolder.count(args as any)
      },
    })
  },
})

export const automationFolderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAutomationFolder()
    t.crud.updateOneAutomationFolder()
    t.crud.upsertOneAutomationFolder()
    t.crud.deleteOneAutomationFolder()
    t.crud.updateManyAutomationFolder()
    t.crud.deleteManyAutomationFolder()
  },
})
