import { objectType, extendType } from 'nexus';

export const site_widget_settings = objectType({
  name: 'site_widget_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.classes();
    t.model.online_store();
    t.model.appointments();
    t.model.loyalty();
    t.model.dashboard();
    t.model.takeaway();
    t.model.tablebooking();
    t.model.guestlist();
    t.model.opening();
    t.model.callus();
    t.model.website();
    t.model.location();
    t.model.your_cuts();
    t.model.documents();
    t.model.refer();
    t.model.package_history();
    t.model.lab_history();
  },
});

export const site_widget_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.site_widget_settings();
    t.crud.site_widget_settings({ filtering: true, ordering: true });
  },
});

export const site_widget_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesite_widget_settings();
    t.crud.updateOnesite_widget_settings();
    t.crud.upsertOnesite_widget_settings();
    t.crud.deleteOnesite_widget_settings();

    t.crud.updateManysite_widget_settings();
    t.crud.deleteManysite_widget_settings();
  },
});
