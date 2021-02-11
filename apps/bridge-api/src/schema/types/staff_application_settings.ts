import { objectType, extendType } from 'nexus';

export const staff_application_settings = objectType({
  name: 'staff_application_settings',
  definition(t) {
    t.model.occupier();
    t.model.staff_rotta_setting_mode();
    t.model.staff_rotta_setting_password();
    t.model.staff_clockin_setting_mode();
    t.model.staff_clockin_setting_password();
    t.model.staff_clockin_setting_location();
    t.model.staff_clockin_setting_message();
    t.model.staff_manager_setting_mode();
    t.model.staff_manager_setting_password();
    t.model.staff_manager_setting_location();
    t.model.staff_manager_setting_message();
    t.model.staff_clockin_setting_manualt();
    t.model.staff_clockin_setting_ccontact();
    t.model.id();
  },
});

export const staff_application_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_application_settings();
    t.crud.staff_application_settings({ filtering: true, ordering: true });
  },
});

export const staff_application_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_application_settings();
    t.crud.updateOnestaff_application_settings();
    t.crud.upsertOnestaff_application_settings();
    t.crud.deleteOnestaff_application_settings();

    t.crud.updateManystaff_application_settings();
    t.crud.deleteManystaff_application_settings();
  },
});
