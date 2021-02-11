import { objectType, extendType } from 'nexus';

export const automation_actions = objectType({
  name: 'automation_actions',
  definition(t) {
    t.model.id();
    t.model.trigger_id();
    t.model.company();
    t.model.code();
    t.model.action_data();
    t.model.order();
  },
});

export const automation_actionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automation_actions();
    t.crud.automation_actions({ filtering: true, ordering: true });
  },
});

export const automation_actionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneautomation_actions();
    t.crud.updateOneautomation_actions();
    t.crud.upsertOneautomation_actions();
    t.crud.deleteOneautomation_actions();

    t.crud.updateManyautomation_actions();
    t.crud.deleteManyautomation_actions();
  },
});
