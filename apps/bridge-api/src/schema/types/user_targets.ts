import { objectType, extendType } from 'nexus';

export const user_targets = objectType({
  name: 'user_targets',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.company_id();
    t.model.indicator_id();
    t.model.date();
    t.model.value();
  },
});

export const user_targetsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_targets();
    t.crud.user_targets({ filtering: true, ordering: true });
  },
});

export const user_targetsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_targets();
    t.crud.updateOneuser_targets();
    t.crud.upsertOneuser_targets();
    t.crud.deleteOneuser_targets();

    t.crud.updateManyuser_targets();
    t.crud.deleteManyuser_targets();
  },
});
