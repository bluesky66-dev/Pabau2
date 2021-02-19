import { objectType, extendType } from 'nexus';

export const Company = objectType({
  name: 'Company',
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.digit8();
    t.model.admin();
    t.model.creation_date();
    t.model.image();
    t.model.slug();
    t.model.remote_url();
    t.model.remote_connect();
    t.model.cron_enabled();
  },
});

export const companyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company();
    t.crud.companies({ filtering: true, ordering: true });

    t.field('companiesCount', {
      type: 'Int',
      args: {
        where: 'CompanyWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.company.count(args);
      },
    });
  },
});

export const companyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCompany();
    t.crud.updateOneCompany();
    t.crud.upsertOneCompany();
    t.crud.deleteOneCompany();

    t.crud.updateManyCompany();
    t.crud.deleteManyCompany();
  },
});
