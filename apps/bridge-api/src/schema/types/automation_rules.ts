import { objectType, extendType } from 'nexus';

export const automation_rules = objectType({
  name: 'automation_rules',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.company();
    t.model.active();
    t.model.source();
    t.model.date_start();
    t.model.date_end();
    t.model.description();
    t.model.needs_config();
    t.model.folder_id();
  },
});

export const automation_rulesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automation_rules();
    t.crud.automation_rules({ filtering: true, ordering: true });
  },
});

export const automation_rulesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneautomation_rules();
    t.crud.updateOneautomation_rules();
    t.crud.upsertOneautomation_rules();
    t.crud.deleteOneautomation_rules();

    t.crud.updateManyautomation_rules();
    t.crud.deleteManyautomation_rules();
  },
});
