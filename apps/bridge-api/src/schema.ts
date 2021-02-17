import { makeSchema  } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { PrismaClient } from '@prisma/client'
import path from 'path'
import * as types from './schema/types'
import { GraphQLSchema } from "graphql";
import { NexusSchemaExtension } from "nexus/dist/extensions";
const { join } = path

const prisma = new PrismaClient()

prisma.$use(async (params, next) => {
  if(params.action == 'delete'){
    const modelName = params.model.charAt(0).toLowerCase() + params.model.substr(1)
    const id = params.args.where.id
    const record = await prisma[modelName].findFirst({
      where:{
        id: id
      }
    })
    if(record.occupier !== 8254){
      throw new Error('Insufficient permissions to remove record')
    }
    throw new Error(JSON.stringify(record))
  }
  return next(params)
})

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
