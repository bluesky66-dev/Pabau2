import { makeSchema  } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { PrismaClient } from '@prisma/client'
import * as types from './schema/crud'
import { GraphQLSchema } from "graphql";
import { NexusSchemaExtension } from "nexus/dist/extensions";
import {paljs} from "@paljs/nexus";

const prisma = new PrismaClient()

export const schema: Omit<GraphQLSchema, "extensions"> & { extensions: { nexus: NexusSchemaExtension } } = makeSchema({
  types,
  plugins: [
    paljs(),
    nexusPrisma({
    experimentalCRUD: true, prismaClient: ctx => ctx.prisma = prisma })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/typegen-nexus-plugin-prisma.d.ts'
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
