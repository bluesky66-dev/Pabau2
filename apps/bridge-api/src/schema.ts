import { makeSchema  } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { PrismaClient } from '@prisma/client'
import path from 'path'
import * as types from './schema/types'
import { GraphQLSchema } from "graphql";
import { NexusSchemaExtension } from "nexus/dist/extensions";
const { join } = path

const prisma = new PrismaClient()

export const schema: Omit<GraphQLSchema, "extensions"> & { extensions: { nexus: NexusSchemaExtension } } = makeSchema({
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
