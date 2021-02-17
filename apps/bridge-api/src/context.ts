import { PrismaClient } from '@prisma/client'
import { get } from "http";

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  req: any
  companyId: number,
}

export const createContext = (req: Context) => ({
  ...req,
  prisma,
})
