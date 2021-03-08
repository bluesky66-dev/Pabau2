import { objectType, arg, extendType } from 'nexus'

export const AccountBalance = objectType({
  name: 'AccountBalance',
  definition(t) {
    t.model.id()
    t.model.contact_id()
    t.model.company_id()
    t.model.insurance_company_id()
    t.model.balance()
    t.model.imported()
    t.model.company()
  },
})

export const accountBalanceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.accountBalance()
    t.field('findFirstAccountBalance', {
      type: 'AccountBalance',
      args: {
        where: 'AccountBalanceWhereInput',
        orderBy: arg({ type: 'AccountBalanceOrderByInput' }),
        cursor: 'AccountBalanceWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.accountBalance.findFirst(args as any)
      },
    })
    t.crud.accountBalances({ filtering: true, ordering: true })
    t.field('accountBalancesCount', {
      type: 'Int',
      args: {
        where: 'AccountBalanceWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.accountBalance.count(args as any)
      },
    })
  },
})

export const accountBalanceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAccountBalance()
    t.crud.updateOneAccountBalance()
    t.crud.upsertOneAccountBalance()
    t.crud.deleteOneAccountBalance()
    t.crud.updateManyAccountBalance()
    t.crud.deleteManyAccountBalance()
  },
})
