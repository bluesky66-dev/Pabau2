import { objectType, extendType } from 'nexus';

export const currencies = objectType({
  name: 'currencies',
  definition(t) {
    t.model.ID();
    t.model.code();
    t.model.symbol();
    t.model.name();
    t.model.plural();
    t.model.decimaldigits();
    t.model.rounding();
  },
});

export const currenciesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.currencies();
    t.crud.currencies({ filtering: true, ordering: true });
  },
});

export const currenciesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecurrencies();
    t.crud.updateOnecurrencies();
    t.crud.upsertOnecurrencies();
    t.crud.deleteOnecurrencies();

    t.crud.updateManycurrencies();
    t.crud.deleteManycurrencies();
  },
});
