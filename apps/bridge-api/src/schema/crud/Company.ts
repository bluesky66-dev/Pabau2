import { objectType, arg, extendType } from 'nexus'

export const Company = objectType({
  name: 'Company',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.digit8()
    t.model.admin()
    t.model.creation_date()
    t.model.image()
    t.model.slug()
    t.model.remote_url()
    t.model.remote_connect()
    t.model.cron_enabled()
    t.model.Details()
    t.model.Subscription()
    t.model.TwoFactorHistory()
    t.model.ThirdPartyAccess()
    t.model.AcceptEmailToken()
    t.model.AccountBalance()
    t.model.MarketingSource()
    t.model.CmCase()
    t.model.CmCaseReply()
    t.model.CmCampaign()
    t.model.User()
  },
})

export const companyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company()
    t.field('findFirstCompany', {
      type: 'Company',
      args: {
        where: 'CompanyWhereInput',
        orderBy: arg({ type: 'CompanyOrderByInput' }),
        cursor: 'CompanyWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.company.findFirst(args as any)
      },
    })
    t.crud.companies({ filtering: true, ordering: true })
    t.field('companiesCount', {
      type: 'Int',
      args: {
        where: 'CompanyWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.company.count(args as any)
      },
    })
  },
})

export const companyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCompany()
    t.crud.updateOneCompany()
    t.crud.upsertOneCompany()
    t.crud.deleteOneCompany()
    t.crud.updateManyCompany()
    t.crud.deleteManyCompany()
  },
})
