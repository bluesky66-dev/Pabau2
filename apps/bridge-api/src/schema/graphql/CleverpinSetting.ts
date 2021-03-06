import { objectType, arg, extendType } from 'nexus'

export const CleverpinSetting = objectType({
  name: 'CleverpinSetting',
  definition(t) {
    t.model.id()
    t.model.image_url()
    t.model.company_id()
  },
})

export const cleverpinSettingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cleverpinSetting()
    t.field('findFirstCleverpinSetting', {
      type: 'CleverpinSetting',
      args: {
        where: 'CleverpinSettingWhereInput',
        orderBy: arg({ type: 'CleverpinSettingOrderByInput' }),
        cursor: 'CleverpinSettingWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cleverpinSetting.findFirst(args as any)
      },
    })
    t.crud.cleverpinSettings({ filtering: true, ordering: true })
    t.field('cleverpinSettingsCount', {
      type: 'Int',
      args: {
        where: 'CleverpinSettingWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cleverpinSetting.count(args as any)
      },
    })
  },
})

export const cleverpinSettingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCleverpinSetting()
    t.crud.updateOneCleverpinSetting()
    t.crud.upsertOneCleverpinSetting()
    t.crud.deleteOneCleverpinSetting()
    t.crud.updateManyCleverpinSetting()
    t.crud.deleteManyCleverpinSetting()
  },
})
