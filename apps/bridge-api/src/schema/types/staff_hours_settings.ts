import { objectType, extendType } from 'nexus';

export const staff_hours_settings = objectType({
  name: 'staff_hours_settings',
  definition(t) {
    t.model.id();
    t.model.day_name();
    t.model.opening_hours();
    t.model.slider_openning();
    t.model.closing_hours();
    t.model.slider_closing();
    t.model.closed();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.updated_date();
  },
});

export const staff_hours_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_hours_settings();
    t.crud.staff_hours_settings({ filtering: true, ordering: true });
  },
});

export const staff_hours_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_hours_settings();
    t.crud.updateOnestaff_hours_settings();
    t.crud.upsertOnestaff_hours_settings();
    t.crud.deleteOnestaff_hours_settings();

    t.crud.updateManystaff_hours_settings();
    t.crud.deleteManystaff_hours_settings();
  },
});
