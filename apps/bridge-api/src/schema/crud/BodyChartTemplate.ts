import { objectType, arg, extendType } from 'nexus'

export const BodyChartTemplate = objectType({
  name: 'BodyChartTemplate',
  definition(t) {
    t.model.id()
    t.model.template_name()
    t.model.template_url()
    t.model.tags()
    t.model.occupier()
    t.model.uid()
    t.model.creation_date()
    t.model.chart_order()
    t.model.template_type()
  },
})

export const bodyChartTemplateQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bodyChartTemplate()
    t.field('findFirstBodyChartTemplate', {
      type: 'BodyChartTemplate',
      args: {
        where: 'BodyChartTemplateWhereInput',
        orderBy: arg({ type: 'BodyChartTemplateOrderByInput' }),
        cursor: 'BodyChartTemplateWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bodyChartTemplate.findFirst(args as any)
      },
    })
    t.crud.bodyChartTemplates({ filtering: true, ordering: true })
    t.field('bodyChartTemplatesCount', {
      type: 'Int',
      args: {
        where: 'BodyChartTemplateWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bodyChartTemplate.count(args as any)
      },
    })
  },
})

export const bodyChartTemplateMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBodyChartTemplate()
    t.crud.updateOneBodyChartTemplate()
    t.crud.upsertOneBodyChartTemplate()
    t.crud.deleteOneBodyChartTemplate()
    t.crud.updateManyBodyChartTemplate()
    t.crud.deleteManyBodyChartTemplate()
  },
})
