import { objectType, extendType } from 'nexus';

export const user_groups = objectType({
  name: 'user_groups',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.group_name();
    t.model.group_description();
    t.model.restrict_clients();
    t.model.restrict_locations();
    t.model.restrict_calendar();
    t.model.restrict_data();
    t.model.limit_contacts();
    t.model.permission_id();
  },
});

export const user_groupsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_groups();
    t.crud.user_groups({ filtering: true, ordering: true });
  },
});

export const user_groupsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_groups();
    t.crud.updateOneuser_groups();
    t.crud.upsertOneuser_groups();
    t.crud.deleteOneuser_groups();

    t.crud.updateManyuser_groups();
    t.crud.deleteManyuser_groups();
  },
});
