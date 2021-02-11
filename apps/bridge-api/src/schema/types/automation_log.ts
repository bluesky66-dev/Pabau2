import { objectType, extendType } from 'nexus';

export const automation_log = objectType({
  name: 'automation_log',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.date_created();
    t.model.message();
    t.model.parent_id();
    t.model.uid();
  },
});

export const automation_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automation_log();
    t.crud.automation_logs({ filtering: true, ordering: true });
  },
});

export const automation_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneautomation_log();
    t.crud.updateOneautomation_log();
    t.crud.upsertOneautomation_log();
    t.crud.deleteOneautomation_log();

    t.crud.updateManyautomation_log();
    t.crud.deleteManyautomation_log();
  },
});
