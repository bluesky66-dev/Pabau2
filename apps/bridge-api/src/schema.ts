import {
    intArg,
    makeSchema,
    nonNull,
    nullable,
    objectType,
    stringArg,
  } from 'nexus'
  import { nexusPrisma } from 'nexus-plugin-prisma'
  
  const Admin = objectType({
    name: 'admin',
    definition(t) {
      t.model.id()
      t.model.user()
      t.model.digit8()
      t.model.creation_date()
      t.model.image()
      t.model.slug()
    },
  })

  const MarketingSources = objectType({
    name: 'marketing_sources',
    definition(t) {
      t.model.id()
      t.model.source_name()
      t.model.occupier()
      t.model.custom_id()
    }
  })

  
  const Query = objectType({
    name: 'Query',
    definition(t) {
      t.crud.admin()
      t.crud.marketing_sources()
    }
  })
  
  //     t.list.field('filterPosts', {
  //       type: 'Post',
  //       args: {
  //         searchString: nullable(stringArg()),
  //       },
  //       resolve: (_, { searchString }, ctx) => {
  //         return ctx.prisma.post.findMany({
  //           where: {
  //             OR: [
  //               { title: { contains: searchString } },
  //               { content: { contains: searchString } },
  //             ],
  //           },
  //         })
  //       },
  //     })
  //   },
  // })
  
  // const Mutation = objectType({
  //   name: 'Mutation',
  //   definition(t) {
  //     t.crud.createOneUser({ alias: 'signupUser' })
  //     t.crud.deleteOnePost()
  
  //     t.field('createDraft', {
  //       type: 'Post',
  //       args: {
  //         title: nonNull(stringArg()),
  //         content: stringArg(),
  //         authorEmail: nonNull(stringArg()),
  //       },
  //       resolve: (_, { title, content, authorEmail }, ctx) => {
  //         return ctx.prisma.post.create({
  //           data: {
  //             title,
  //             content,
  //             published: false,
  //             author: {
  //               connect: { email: authorEmail },
  //             },
  //           },
  //         })
  //       },
  //     })
  
  //     t.nullable.field('publish', {
  //       type: 'Post',
  //       args: {
  //         id: intArg(),
  //       },
  //       resolve: (_, { id }, ctx) => {
  //         return ctx.prisma.post.update({
  //           where: { id: Number(id) },
  //           data: { published: true },
  //         })
  //       },
  //     })
  //   },
  // })
  
  // export const schema = makeSchema({
  //   types: [Admin, Query, MarketingSources],
  //   plugins: [nexusPrisma({ experimentalCRUD: true })],
  //   outputs: {
  //     schema: __dirname + '/../schema.graphql',
  //     typegen: __dirname + '/generated/nexus.ts',
  //   },
  //   contextType: {
  //     module: require.resolve('./context'),
  //     export: 'Context',
  //   },
  //   sourceTypes: {
  //     modules: [
  //       {
  //         module: '@prisma/client',
  //         alias: 'prisma',
  //       },
  //     ],
  //   },
  // })

  export const schema = makeSchema({
  types: [Admin, Query, MarketingSources],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
