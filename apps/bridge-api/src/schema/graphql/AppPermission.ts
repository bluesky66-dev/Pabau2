import { objectType, arg, extendType } from 'nexus'

export const AppPermission = objectType({
  name: 'AppPermission',
  definition(t) {
    t.model.id()
    t.model.company()
    t.model.appid()
  },
})

export const appPermissionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.appPermission()
    t.field('findFirstAppPermission', {
      type: 'AppPermission',
      args: {
        where: 'AppPermissionWhereInput',
        orderBy: arg({ type: 'AppPermissionOrderByInput' }),
        cursor: 'AppPermissionWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.appPermission.findFirst(args as any)
      },
    })
    t.crud.appPermissions({ filtering: true, ordering: true })
    t.field('appPermissionsCount', {
      type: 'Int',
      args: {
        where: 'AppPermissionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.appPermission.count(args as any)
      },
    })
  },
})

export const appPermissionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAppPermission()
    t.crud.updateOneAppPermission()
    t.crud.upsertOneAppPermission()
    t.crud.deleteOneAppPermission()
    t.crud.updateManyAppPermission()
    t.crud.deleteManyAppPermission()
  },
})
