import { makeSchema  } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { PrismaClient } from '@prisma/client'
import { join } from 'path'
import * as types from './schema/types'

const prisma = new PrismaClient()

export const schema = makeSchema({
  types,
  plugins: [nexusPrisma({
    experimentalCRUD: true, prismaClient: ctx => ctx.prisma = prisma })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: join( __dirname, '/generated/', 'typegen-nexus-plugin-prisma.d.ts' )
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
