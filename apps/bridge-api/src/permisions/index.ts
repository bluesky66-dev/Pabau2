import { rule, shield } from 'graphql-shield'
import { Context } from "../context";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const rules = {
  isAuthenticated: rule()(async (_, args, context:Context) => {
    if(Object.keys(args).length === 0){
      return false
    }
    const headerCompanyId = Number(context.req.get('x-company-id'))
    const requestedCompanyId = Number(args.where.company_id.equals)
    const companies = await prisma.company.findMany({
      where:{
        id:requestedCompanyId
      }
    })
    if(!companies){
      return false
    }
    return requestedCompanyId === headerCompanyId
  }),
}

export const permissions = shield({
  Query: {
    marketingSources: rules.isAuthenticated,
  },
  Mutation: {
    createOneMarketingSource: rules.isAuthenticated,
  },
})
