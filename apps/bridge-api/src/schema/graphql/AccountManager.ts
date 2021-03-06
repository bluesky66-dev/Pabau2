import { objectType, arg, extendType } from 'nexus'

export const AccountManager = objectType({
  name: 'AccountManager',
  definition(t) {
    t.model.id()
    t.model.organisation_name()
    t.model.organisation_status()
    t.model.organisation_type()
    t.model.organisation_number()
    t.model.organisation_owner()
    t.model.address1()
    t.model.address2()
    t.model.address3()
    t.model.town()
    t.model.county()
    t.model.post_code()
    t.model.country()
    t.model.tel()
    t.model.alt_tel()
    t.model.email()
    t.model.fax()
    t.model.website()
    t.model.sla_contract()
    t.model.vat_reg_id()
    t.model.created_date()
    t.model.modified_date()
    t.model.occupier()
    t.model.con_per_1()
    t.model.con_num_1()
    t.model.con_per_2()
    t.model.con_num_2()
    t.model.con_per_3()
    t.model.con_num_3()
  },
})

export const accountManagerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.accountManager()
    t.field('findFirstAccountManager', {
      type: 'AccountManager',
      args: {
        where: 'AccountManagerWhereInput',
        orderBy: arg({ type: 'AccountManagerOrderByInput' }),
        cursor: 'AccountManagerWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.accountManager.findFirst(args as any)
      },
    })
    t.crud.accountManagers({ filtering: true, ordering: true })
    t.field('accountManagersCount', {
      type: 'Int',
      args: {
        where: 'AccountManagerWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.accountManager.count(args as any)
      },
    })
  },
})

export const accountManagerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAccountManager()
    t.crud.updateOneAccountManager()
    t.crud.upsertOneAccountManager()
    t.crud.deleteOneAccountManager()
    t.crud.updateManyAccountManager()
    t.crud.deleteManyAccountManager()
  },
})
