import { objectType, extendType } from 'nexus';

export const intelli_goal_settings = objectType({
  name: 'intelli_goal_settings',
  definition(t) {
    t.model.id();
    t.model.staff_id();
    t.model.occupier();
    t.model.year();
    t.model.goal_type();
    t.model.type_id();
    t.model.jan();
    t.model.feb();
    t.model.mar();
    t.model.april();
    t.model.may();
    t.model.june();
    t.model.july();
    t.model.august();
    t.model.sept();
    t.model.oct();
    t.model.nov();
    t.model.dec();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const intelli_goal_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.intelli_goal_settings();
    t.crud.intelli_goal_settings({ filtering: true, ordering: true });
  },
});

export const intelli_goal_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneintelli_goal_settings();
    t.crud.updateOneintelli_goal_settings();
    t.crud.upsertOneintelli_goal_settings();
    t.crud.deleteOneintelli_goal_settings();

    t.crud.updateManyintelli_goal_settings();
    t.crud.deleteManyintelli_goal_settings();
  },
});
