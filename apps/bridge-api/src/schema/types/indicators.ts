import { objectType, extendType } from 'nexus';

export const indicators = objectType({
  name: 'indicators',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.created_date();
    t.model.updated_date();
    t.model.sql();
  },
});

export const indicatorsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.indicators();
    t.crud.indicators({ filtering: true, ordering: true });
  },
});

export const indicatorsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneindicators();
    t.crud.updateOneindicators();
    t.crud.upsertOneindicators();
    t.crud.deleteOneindicators();

    t.crud.updateManyindicators();
    t.crud.deleteManyindicators();
  },
});
