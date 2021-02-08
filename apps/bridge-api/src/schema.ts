import {
  makeSchema, mutationType,
  objectType,
} from 'nexus'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'

  const MarketingSource = objectType({
    name: 'marketing_source',
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
      t.crud.marketingSource();
      t.crud.marketingSources({
        pagination: true,
        filtering: true,
        ordering: true
      });
    }
  })

  const Mutation = objectType({
    name: 'Mutation',
    definition(t) {
      t.crud.createOnemarketing_source();
      t.crud.deleteOnemarketing_source();
      t.crud.updateOnemarketing_source();
    }
  })

  export const schema = makeSchema({
  types: [Query,Mutation,
    MarketingSource
  ],
  plugins: [nexusSchemaPrisma({ experimentalCRUD: true })],
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
