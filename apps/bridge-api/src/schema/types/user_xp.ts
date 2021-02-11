import { objectType, extendType } from 'nexus';

export const user_xp = objectType({
  name: 'user_xp',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.uid();
    t.model.date();
    t.model.xp();
    t.model.notes();
  },
});

export const user_xpQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_xp();
    t.crud.user_xps({ filtering: true, ordering: true });
  },
});

export const user_xpMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_xp();
    t.crud.updateOneuser_xp();
    t.crud.upsertOneuser_xp();
    t.crud.deleteOneuser_xp();

    t.crud.updateManyuser_xp();
    t.crud.deleteManyuser_xp();
  },
});
