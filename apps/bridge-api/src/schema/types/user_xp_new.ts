import { objectType, extendType } from 'nexus';

export const user_xp_new = objectType({
  name: 'user_xp_new',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.uid();
    t.model.level();
    t.model.xp();
    t.model.date();
  },
});

export const user_xp_newQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_xp_new();
    t.crud.user_xp_news({ filtering: true, ordering: true });
  },
});

export const user_xp_newMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_xp_new();
    t.crud.updateOneuser_xp_new();
    t.crud.upsertOneuser_xp_new();
    t.crud.deleteOneuser_xp_new();

    t.crud.updateManyuser_xp_new();
    t.crud.deleteManyuser_xp_new();
  },
});
