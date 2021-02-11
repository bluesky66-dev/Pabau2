import { objectType, extendType } from 'nexus';

export const staff_performance_settings = objectType({
  name: 'staff_performance_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.enabled();
    t.model.frequency();
    t.model.excluded_users();
    t.model.LastSent();
    t.model.end_week();
  },
});

export const staff_performance_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_performance_settings();
    t.crud.staff_performance_settings({ filtering: true, ordering: true });
  },
});

export const staff_performance_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_performance_settings();
    t.crud.updateOnestaff_performance_settings();
    t.crud.upsertOnestaff_performance_settings();
    t.crud.deleteOnestaff_performance_settings();

    t.crud.updateManystaff_performance_settings();
    t.crud.deleteManystaff_performance_settings();
  },
});
