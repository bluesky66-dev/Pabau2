import { objectType, arg, extendType } from 'nexus'

export const Timezone = objectType({
  name: 'Timezone',
  definition(t) {
    t.model.timezone_id()
    t.model.label()
    t.model.php_format()
    t.model.db_format()
    t.model.offset_seconds()
    t.model.supported()
    t.model.CompanyDetails()
  },
})

export const timezoneQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.timezone()
    t.field('findFirstTimezone', {
      type: 'Timezone',
      args: {
        where: 'TimezoneWhereInput',
        orderBy: arg({ type: 'TimezoneOrderByInput' }),
        cursor: 'TimezoneWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.timezone.findFirst(args as any)
      },
    })
    t.crud.timezones({ filtering: true, ordering: true })
    t.field('timezonesCount', {
      type: 'Int',
      args: {
        where: 'TimezoneWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.timezone.count(args as any)
      },
    })
  },
})

export const timezoneMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneTimezone()
    t.crud.updateOneTimezone()
    t.crud.upsertOneTimezone()
    t.crud.deleteOneTimezone()
    t.crud.updateManyTimezone()
    t.crud.deleteManyTimezone()
  },
})
