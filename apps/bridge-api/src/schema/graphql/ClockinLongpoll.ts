import { objectType, arg, extendType } from 'nexus'

export const ClockinLongpoll = objectType({
  name: 'ClockinLongpoll',
  definition(t) {
    t.model.id()
    t.model.clocked_out()
    t.model.uid()
    t.model.occupier()
  },
})

export const clockinLongpollQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.clockinLongpoll()
    t.field('findFirstClockinLongpoll', {
      type: 'ClockinLongpoll',
      args: {
        where: 'ClockinLongpollWhereInput',
        orderBy: arg({ type: 'ClockinLongpollOrderByInput' }),
        cursor: 'ClockinLongpollWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.clockinLongpoll.findFirst(args as any)
      },
    })
    t.crud.clockinLongpolls({ filtering: true, ordering: true })
    t.field('clockinLongpollsCount', {
      type: 'Int',
      args: {
        where: 'ClockinLongpollWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.clockinLongpoll.count(args as any)
      },
    })
  },
})

export const clockinLongpollMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClockinLongpoll()
    t.crud.updateOneClockinLongpoll()
    t.crud.upsertOneClockinLongpoll()
    t.crud.deleteOneClockinLongpoll()
    t.crud.updateManyClockinLongpoll()
    t.crud.deleteManyClockinLongpoll()
  },
})
