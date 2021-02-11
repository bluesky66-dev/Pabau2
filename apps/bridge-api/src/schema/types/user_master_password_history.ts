import { objectType, extendType } from 'nexus';

export const user_master_password_history = objectType({
  name: 'user_master_password_history',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.user_master_id();
    t.model.pass();
    t.model.created_at();
  },
});

export const user_master_password_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_master_password_history();
    t.crud.user_master_password_histories({ filtering: true, ordering: true });
  },
});

export const user_master_password_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_master_password_history();
    t.crud.updateOneuser_master_password_history();
    t.crud.upsertOneuser_master_password_history();
    t.crud.deleteOneuser_master_password_history();

    t.crud.updateManyuser_master_password_history();
    t.crud.deleteManyuser_master_password_history();
  },
});
