import { objectType, arg, extendType } from 'nexus'

export const CardTypes = objectType({
  name: 'CardTypes',
  definition(t) {
    t.model.id()
    t.model.company_id()
    t.model.mastercard()
    t.model.visa()
    t.model.amex()
    t.model.visa_credit()
    t.model.maestro()
    t.model.worldpay()
    t.model.visa_credit_charge()
    t.model.amex_credit_charge()
    t.model.mastercard_credit_charge()
    t.model.enable_reference()
  },
})

export const cardTypesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cardTypes()
    t.field('findFirstCardTypes', {
      type: 'CardTypes',
      args: {
        where: 'CardTypesWhereInput',
        orderBy: arg({ type: 'CardTypesOrderByInput' }),
        cursor: 'CardTypesWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cardTypes.findFirst(args as any)
      },
    })
    t.crud.cardTypes({ filtering: true, ordering: true })
    t.field('cardTypesCount', {
      type: 'Int',
      args: {
        where: 'CardTypesWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cardTypes.count(args as any)
      },
    })
  },
})

export const cardTypesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCardTypes()
    t.crud.updateOneCardTypes()
    t.crud.upsertOneCardTypes()
    t.crud.deleteOneCardTypes()
    t.crud.updateManyCardTypes()
    t.crud.deleteManyCardTypes()
  },
})
