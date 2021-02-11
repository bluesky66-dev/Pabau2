import { objectType, extendType } from 'nexus';

export const staff_limit_settings = objectType({
  name: 'staff_limit_settings',
  definition(t) {
    t.model.id();
    t.model.day_name();
    t.model.min_value();
    t.model.max_value();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.updated_date();
  },
});

export const staff_limit_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_limit_settings();
    t.crud.staff_limit_settings({ filtering: true, ordering: true });
  },
});

export const staff_limit_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_limit_settings();
    t.crud.updateOnestaff_limit_settings();
    t.crud.upsertOnestaff_limit_settings();
    t.crud.deleteOnestaff_limit_settings();

    t.crud.updateManystaff_limit_settings();
    t.crud.deleteManystaff_limit_settings();
  },
});
