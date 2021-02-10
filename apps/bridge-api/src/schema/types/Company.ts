import { objectType, extendType, } from "nexus";


export const Company = objectType({
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

export const CompanyQuery = extendType({
  type: 'Query',
  definition(t ) {
    t.crud.company();
    t.crud.companies({
      pagination: true,
      filtering: true,
      ordering: true
    })
  }
})