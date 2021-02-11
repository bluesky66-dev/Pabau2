import { objectType, extendType } from 'nexus';

export const automation_triggers = objectType({
  name: 'automation_triggers',
  definition(t) {
    t.model.id();
    t.model.rule_id();
    t.model.name();
    t.model.company();
    t.model.code();
    t.model.trigger_data();
    t.model.order();
  },
});

export const automation_triggersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automation_triggers();
    t.crud.automation_triggers({ filtering: true, ordering: true });
  },
});

export const automation_triggersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneautomation_triggers();
    t.crud.updateOneautomation_triggers();
    t.crud.upsertOneautomation_triggers();
    t.crud.deleteOneautomation_triggers();

    t.crud.updateManyautomation_triggers();
    t.crud.deleteManyautomation_triggers();
  },
});
