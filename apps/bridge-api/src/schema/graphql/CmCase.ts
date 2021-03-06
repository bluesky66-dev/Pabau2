import { objectType, arg, extendType } from 'nexus'

export const CmCase = objectType({
  name: 'CmCase',
  definition(t) {
    t.model.id()
    t.model.case_number()
    t.model.type()
    t.model.contact()
    t.model.email()
    t.model.subject()
    t.model.phone()
    t.model.request()
    t.model.critical()
    t.model.description()
    t.model.related_to()
    t.model.module_type()
    t.model.user_id()
    t.model.module2_type()
    t.model.user2_id()
    t.model.ownerid()
    t.model.status()
    t.model.priority()
    t.model.reason()
    t.model.reported_by()
    t.model.comments()
    t.model.CreatedDate()
    t.model.IpAddress()
    t.model.company_id()
    t.model.company()
  },
})

export const cmCaseQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmCase()
    t.field('findFirstCmCase', {
      type: 'CmCase',
      args: {
        where: 'CmCaseWhereInput',
        orderBy: arg({ type: 'CmCaseOrderByInput' }),
        cursor: 'CmCaseWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmCase.findFirst(args as any)
      },
    })
    t.crud.cmCases({ filtering: true, ordering: true })
    t.field('cmCasesCount', {
      type: 'Int',
      args: {
        where: 'CmCaseWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmCase.count(args as any)
      },
    })
  },
})

export const cmCaseMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmCase()
    t.crud.updateOneCmCase()
    t.crud.upsertOneCmCase()
    t.crud.deleteOneCmCase()
    t.crud.updateManyCmCase()
    t.crud.deleteManyCmCase()
  },
})
