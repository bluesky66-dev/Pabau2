import { objectType, arg, extendType } from 'nexus'

export const CancelReason = objectType({
  name: 'CancelReason',
  definition(t) {
    t.model.id()
    t.model.reason_name()
    t.model.occupier()
    t.model.late_cancel()
    t.model.apply_cancellation_policy()
    t.model.created_at()
    t.model.modified_at()
  },
})

export const cancelReasonQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cancelReason()
    t.field('findFirstCancelReason', {
      type: 'CancelReason',
      args: {
        where: 'CancelReasonWhereInput',
        orderBy: arg({ type: 'CancelReasonOrderByInput' }),
        cursor: 'CancelReasonWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cancelReason.findFirst(args as any)
      },
    })
    t.crud.cancelReasons({ filtering: true, ordering: true })
    t.field('cancelReasonsCount', {
      type: 'Int',
      args: {
        where: 'CancelReasonWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cancelReason.count(args as any)
      },
    })
  },
})

export const cancelReasonMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCancelReason()
    t.crud.updateOneCancelReason()
    t.crud.upsertOneCancelReason()
    t.crud.deleteOneCancelReason()
    t.crud.updateManyCancelReason()
    t.crud.deleteManyCancelReason()
  },
})
