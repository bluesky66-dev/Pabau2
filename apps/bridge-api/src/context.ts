import { PrismaClient } from '@prisma/client'
import { SchemaLink } from '@apollo/client/link/schema'
import ResolverContextFunction = SchemaLink.ResolverContextFunction
import { Request, Response } from "express";
import { PubSub } from "apollo-server";
import { JwtPayloadDto } from "./app/authentication/dto";

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  req: Request
  res: Response
  pubSub: PubSub
  authenticatedUser: JwtPayloadDto
}

export const createContext:ResolverContextFunction  = (req) => ({
  ...req,
  PubSub,
  prisma
})
