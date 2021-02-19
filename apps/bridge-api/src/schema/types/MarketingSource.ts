import { objectType, extendType } from 'nexus';

export const MarketingSource = objectType({
  name: 'MarketingSource',
  definition(t) {
    t.model.id();
    t.model.source_name();
    t.model.company_id();
    t.model.custom_id();
    t.model.public();
    t.model.imported();
    t.model.company();
  },
});

export const marketingSourceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.marketingSource();
    t.crud.marketingSources({ filtering: true, ordering: true , pagination: true });

    t.field('marketingSourcesCount', {
      type: 'Int',
      args: {
        where: 'MarketingSourceWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.marketingSource.count(args);
      },
    });
  },
});

export const marketingSourceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneMarketingSource();
    t.crud.updateOneMarketingSource();
    t.crud.upsertOneMarketingSource();
    t.crud.deleteOneMarketingSource();

    t.crud.updateManyMarketingSource();
    t.crud.deleteManyMarketingSource();
  },
});
