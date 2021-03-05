import { PrismaClient } from '@prisma/client'
import { SchemaLink } from '@apollo/client/link/schema'
import ResolverContextFunction = SchemaLink.ResolverContextFunction
import { Request, Response } from "express";
import { PubSub } from "apollo-server";

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  req: Request
  res: Response
  pubSub: PubSub
}

export const createContext:ResolverContextFunction  = (req) => ({
  ...req,
  PubSub,
  prisma
})
