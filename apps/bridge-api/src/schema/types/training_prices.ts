import { objectType, extendType } from 'nexus';

export const training_prices = objectType({
  name: 'training_prices',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.price();
    t.model.description();
    t.model.addon_order();
  },
});

export const training_pricesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.training_prices();
    t.crud.training_prices({ filtering: true, ordering: true });
  },
});

export const training_pricesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetraining_prices();
    t.crud.updateOnetraining_prices();
    t.crud.upsertOnetraining_prices();
    t.crud.deleteOnetraining_prices();

    t.crud.updateManytraining_prices();
    t.crud.deleteManytraining_prices();
  },
});
