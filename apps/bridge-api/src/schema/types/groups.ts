import { objectType, extendType } from 'nexus';

export const groups = objectType({
  name: 'groups',
  definition(t) {
    t.model.group_id();
    t.model.user_id();
    t.model.fb_user_id();
    t.model.fb_group_id();
    t.model.group_name();
    t.model.group_data();
    t.model.auth_date();
    t.model.group_postable();
    t.model.group_bookmark_order();
  },
});

export const groupsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.groups();
    t.crud.groups({ filtering: true, ordering: true });
  },
});

export const groupsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegroups();
    t.crud.updateOnegroups();
    t.crud.upsertOnegroups();
    t.crud.deleteOnegroups();

    t.crud.updateManygroups();
    t.crud.deleteManygroups();
  },
});
