import { objectType, arg, extendType } from 'nexus'

export const ApiKey = objectType({
  name: 'ApiKey',
  definition(t) {
    t.model.id()
    t.model.company_id()
    t.model.api_key()
    t.model.app_type()
    t.model.created_date()
    t.model.contacts()
    t.model.bookings()
    t.model.invoices()
    t.model.locations()
    t.model.services()
    t.model.staff()
    t.model.financials()
    t.model.leads()
    t.model.medical_forms()
    t.model.reports()
  },
})

export const apiKeyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.apiKey()
    t.field('findFirstApiKey', {
      type: 'ApiKey',
      args: {
        where: 'ApiKeyWhereInput',
        orderBy: arg({ type: 'ApiKeyOrderByInput' }),
        cursor: 'ApiKeyWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.apiKey.findFirst(args as any)
      },
    })
    t.crud.apiKeys({ filtering: true, ordering: true })
    t.field('apiKeysCount', {
      type: 'Int',
      args: {
        where: 'ApiKeyWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.apiKey.count(args as any)
      },
    })
  },
})

export const apiKeyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneApiKey()
    t.crud.updateOneApiKey()
    t.crud.upsertOneApiKey()
    t.crud.deleteOneApiKey()
    t.crud.updateManyApiKey()
    t.crud.deleteManyApiKey()
  },
})
