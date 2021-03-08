import { objectType, arg, extendType } from 'nexus'

export const AtQuestionsRelation = objectType({
  name: 'AtQuestionsRelation',
  definition(t) {
    t.model.company_id()
    t.model.answer_id()
    t.model.product_id()
  },
})

export const atQuestionsRelationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.atQuestionsRelation()
    t.field('findFirstAtQuestionsRelation', {
      type: 'AtQuestionsRelation',
      args: {
        where: 'AtQuestionsRelationWhereInput',
        orderBy: arg({ type: 'AtQuestionsRelationOrderByInput' }),
        cursor: 'AtQuestionsRelationWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atQuestionsRelation.findFirst(args as any)
      },
    })
    t.crud.atQuestionsRelations({ filtering: true, ordering: true })
    t.field('atQuestionsRelationsCount', {
      type: 'Int',
      args: {
        where: 'AtQuestionsRelationWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atQuestionsRelation.count(args as any)
      },
    })
  },
})

export const atQuestionsRelationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAtQuestionsRelation()
    t.crud.updateOneAtQuestionsRelation()
    t.crud.upsertOneAtQuestionsRelation()
    t.crud.deleteOneAtQuestionsRelation()
    t.crud.updateManyAtQuestionsRelation()
    t.crud.deleteManyAtQuestionsRelation()
  },
})
