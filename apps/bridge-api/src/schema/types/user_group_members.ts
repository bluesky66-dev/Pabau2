import { objectType, extendType } from 'nexus';

export const user_group_members = objectType({
  name: 'user_group_members',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.group_id();
  },
});

export const user_group_membersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_group_members();
    t.crud.user_group_members({ filtering: true, ordering: true });
  },
});

export const user_group_membersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_group_members();
    t.crud.updateOneuser_group_members();
    t.crud.upsertOneuser_group_members();
    t.crud.deleteOneuser_group_members();

    t.crud.updateManyuser_group_members();
    t.crud.deleteManyuser_group_members();
  },
});
