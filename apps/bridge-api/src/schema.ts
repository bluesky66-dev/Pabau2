import {
  makeSchema, mutationType,
  objectType,
} from 'nexus'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


  const Company = objectType({
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
    }
  })

const MarketingSource = objectType({
    name: 'MarketingSource',
  definition(t) {
    t.model.id()
    t.model.source_name()
    t.model.occupier()
    t.model.custom_id()
      t.model.company()
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
      t.crud.createOneMarketingSource()
      t.crud.deleteOneMarketingSource();
      t.crud.updateOneMarketingSource();
  }
})

export const schema = makeSchema({
  types: [Query, Mutation,
    MarketingSource,Company
  ],
  plugins: [nexusSchemaPrisma({ experimentalCRUD: true, prismaClient: ctx => ctx.prisma = prisma })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
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
