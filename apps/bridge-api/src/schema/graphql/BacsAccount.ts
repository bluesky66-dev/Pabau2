import { objectType, arg, extendType } from 'nexus'

export const BacsAccount = objectType({
  name: 'BacsAccount',
  definition(t) {
    t.model.id()
    t.model.bank_tag()
    t.model.comp_id()
    t.model.branch_name()
    t.model.account_holder()
    t.model.account_no()
    t.model.sort_code()
  },
})

export const bacsAccountQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bacsAccount()
    t.field('findFirstBacsAccount', {
      type: 'BacsAccount',
      args: {
        where: 'BacsAccountWhereInput',
        orderBy: arg({ type: 'BacsAccountOrderByInput' }),
        cursor: 'BacsAccountWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bacsAccount.findFirst(args as any)
      },
    })
    t.crud.bacsAccounts({ filtering: true, ordering: true })
    t.field('bacsAccountsCount', {
      type: 'Int',
      args: {
        where: 'BacsAccountWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bacsAccount.count(args as any)
      },
    })
  },
})

export const bacsAccountMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBacsAccount()
    t.crud.updateOneBacsAccount()
    t.crud.upsertOneBacsAccount()
    t.crud.deleteOneBacsAccount()
    t.crud.updateManyBacsAccount()
    t.crud.deleteManyBacsAccount()
  },
})
