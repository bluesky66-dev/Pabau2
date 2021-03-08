import { objectType, arg, extendType } from 'nexus'

export const BookitProSlider = objectType({
  name: 'BookitProSlider',
  definition(t) {
    t.model.id()
    t.model.slider1()
    t.model.slider2()
    t.model.slider3()
    t.model.slider4()
    t.model.occupier()
  },
})

export const bookitProSliderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bookitProSlider()
    t.field('findFirstBookitProSlider', {
      type: 'BookitProSlider',
      args: {
        where: 'BookitProSliderWhereInput',
        orderBy: arg({ type: 'BookitProSliderOrderByInput' }),
        cursor: 'BookitProSliderWhereUniqueInput',
        skip: 'Int',
        take: 'Int',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bookitProSlider.findFirst(args as any)
      },
    })
    t.crud.bookitProSliders({ filtering: true, ordering: true })
    t.field('bookitProSlidersCount', {
      type: 'Int',
      args: {
        where: 'BookitProSliderWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bookitProSlider.count(args as any)
      },
    })
  },
})

export const bookitProSliderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBookitProSlider()
    t.crud.updateOneBookitProSlider()
    t.crud.upsertOneBookitProSlider()
    t.crud.deleteOneBookitProSlider()
    t.crud.updateManyBookitProSlider()
    t.crud.deleteManyBookitProSlider()
  },
})
