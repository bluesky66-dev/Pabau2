import { objectType, arg, extendType } from 'nexus'

export const CalRangeRequest = objectType({
  name: 'CalRangeRequest',
  definition(t) {
    t.model.id()
    t.model.minutes()
    t.model.company_id()
    t.model.start_date()
    t.model.end_date()
  },
})

export const calRangeRequestQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.calRangeRequest()
    t.field('findFirstCalRangeRequest', {
      type: 'CalRangeRequest',
      args: {
        where: 'CalRangeRequestWhereInput',
        orderBy: arg({ type: 'CalRangeRequestOrderByInput' }),
        cursor: 'CalRangeRequestWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.calRangeRequest.findFirst(args as any)
      },
    })
    t.crud.calRangeRequests({ filtering: true, ordering: true })
    t.field('calRangeRequestsCount', {
      type: 'Int',
      args: {
        where: 'CalRangeRequestWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.calRangeRequest.count(args as any)
      },
    })
  },
})

export const calRangeRequestMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCalRangeRequest()
    t.crud.updateOneCalRangeRequest()
    t.crud.upsertOneCalRangeRequest()
    t.crud.deleteOneCalRangeRequest()
    t.crud.updateManyCalRangeRequest()
    t.crud.deleteManyCalRangeRequest()
  },
})
