import { objectType, extendType } from 'nexus';

export const nws_member_group = objectType({
  name: 'nws_member_group',
  definition(t) {
    t.model.id();
    t.model.member_id();
    t.model.group_id();
    t.model.company();
    t.model.temp();
  },
});

export const nws_member_groupQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_member_group();
    t.crud.nws_member_groups({ filtering: true, ordering: true });
  },
});

export const nws_member_groupMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_member_group();
    t.crud.updateOnenws_member_group();
    t.crud.upsertOnenws_member_group();
    t.crud.deleteOnenws_member_group();

    t.crud.updateManynws_member_group();
    t.crud.deleteManynws_member_group();
  },
});
