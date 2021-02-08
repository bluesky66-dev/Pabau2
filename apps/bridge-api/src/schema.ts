import {
    makeSchema,
    objectType,
  } from 'nexus'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'

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
      t.crud.admin();
      t.crud.admins({
        pagination: true,
        filtering: true,
        ordering: true
      });
      t.crud.marketingSource();
      t.crud.marketingSources({
        pagination: true,
        filtering: true,
        ordering: true
      });
    }
  })

  export const schema = makeSchema({
  types: [Query,
    Admin, MarketingSource
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
