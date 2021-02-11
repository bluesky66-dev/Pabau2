import { objectType, extendType } from 'nexus';

export const old_passwords = objectType({
  name: 'old_passwords',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.hash();
    t.model.created_at();
  },
});

export const old_passwordsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.old_passwords();
    t.crud.old_passwords({ filtering: true, ordering: true });
  },
});

export const old_passwordsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneold_passwords();
    t.crud.updateOneold_passwords();
    t.crud.upsertOneold_passwords();
    t.crud.deleteOneold_passwords();

    t.crud.updateManyold_passwords();
    t.crud.deleteManyold_passwords();
  },
});
