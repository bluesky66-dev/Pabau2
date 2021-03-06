import { objectType, arg, extendType } from 'nexus'

export const CheckinAppt = objectType({
  name: 'CheckinAppt',
  definition(t) {
    t.model.id()
    t.model.appt_id()
    t.model.spotify_uri()
  },
})

export const checkinApptQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkinAppt()
    t.field('findFirstCheckinAppt', {
      type: 'CheckinAppt',
      args: {
        where: 'CheckinApptWhereInput',
        orderBy: arg({ type: 'CheckinApptOrderByInput' }),
        cursor: 'CheckinApptWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.checkinAppt.findFirst(args as any)
      },
    })
    t.crud.checkinAppts({ filtering: true, ordering: true })
    t.field('checkinApptsCount', {
      type: 'Int',
      args: {
        where: 'CheckinApptWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.checkinAppt.count(args as any)
      },
    })
  },
})

export const checkinApptMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCheckinAppt()
    t.crud.updateOneCheckinAppt()
    t.crud.upsertOneCheckinAppt()
    t.crud.deleteOneCheckinAppt()
    t.crud.updateManyCheckinAppt()
    t.crud.deleteManyCheckinAppt()
  },
})
