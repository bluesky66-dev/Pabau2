import { objectType, extendType } from 'nexus';

export const engage_general_settings = objectType({
  name: 'engage_general_settings',
  definition(t) {
    t.model.company_id();
    t.model.auto_engage();
    t.model.auto_followup();
    t.model.revenue_since();
    t.model.default_view();
  },
});

export const engage_general_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.engage_general_settings();
    t.crud.engage_general_settings({ filtering: true, ordering: true });
  },
});

export const engage_general_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneengage_general_settings();
    t.crud.updateOneengage_general_settings();
    t.crud.upsertOneengage_general_settings();
    t.crud.deleteOneengage_general_settings();

    t.crud.updateManyengage_general_settings();
    t.crud.deleteManyengage_general_settings();
  },
});
