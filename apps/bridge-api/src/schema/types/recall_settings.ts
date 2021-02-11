import { objectType, extendType } from 'nexus';

export const recall_settings = objectType({
  name: 'recall_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.status();
    t.model.mandatory();
    t.model.only_working_day();
  },
});

export const recall_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.recall_settings();
    t.crud.recall_settings({ filtering: true, ordering: true });
  },
});

export const recall_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerecall_settings();
    t.crud.updateOnerecall_settings();
    t.crud.upsertOnerecall_settings();
    t.crud.deleteOnerecall_settings();

    t.crud.updateManyrecall_settings();
    t.crud.deleteManyrecall_settings();
  },
});
