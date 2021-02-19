import { objectType, extendType } from 'nexus';

export const AppSubscriptionsCompanyPrice = objectType({
  name: 'AppSubscriptionsCompanyPrice',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.app_key_value();
    t.model.price();
  },
});

export const appSubscriptionsCompanyPriceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.appSubscriptionsCompanyPrice();
    t.crud.appSubscriptionsCompanyPrices({ filtering: true, ordering: true , pagination: true });

    t.field('appSubscriptionsCompanyPricesCount', {
      type: 'Int',
      args: {
        where: 'AppSubscriptionsCompanyPriceWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.appSubscriptionsCompanyPrice.count(args);
      },
    });
  },
});

export const appSubscriptionsCompanyPriceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAppSubscriptionsCompanyPrice();
    t.crud.updateOneAppSubscriptionsCompanyPrice();
    t.crud.upsertOneAppSubscriptionsCompanyPrice();
    t.crud.deleteOneAppSubscriptionsCompanyPrice();

    t.crud.updateManyAppSubscriptionsCompanyPrice();
    t.crud.deleteManyAppSubscriptionsCompanyPrice();
  },
});
