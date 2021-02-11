import { objectType, extendType } from 'nexus';

export const nws_group = objectType({
  name: 'nws_group',
  definition(t) {
    t.model.group_id();
    t.model.group_name();
    t.model.public();
    t.model.company();
    t.model.temp();
  },
});

export const nws_groupQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_group();
    t.crud.nws_groups({ filtering: true, ordering: true });
  },
});

export const nws_groupMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_group();
    t.crud.updateOnenws_group();
    t.crud.upsertOnenws_group();
    t.crud.deleteOnenws_group();

    t.crud.updateManynws_group();
    t.crud.deleteManynws_group();
  },
});
