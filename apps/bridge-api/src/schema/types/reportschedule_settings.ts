import { objectType, extendType } from 'nexus';

export const reportschedule_settings = objectType({
  name: 'reportschedule_settings',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.enabled();
    t.model.frequency();
    t.model.custom_day();
    t.model.custom_mode();
    t.model.last_current_from();
    t.model.last_current_to();
    t.model.period_from();
    t.model.period_to();
    t.model.reports();
    t.model.included_users();
    t.model.LastSent();
    t.model.end_week();
    t.model.time();
    t.model.report_subject();
    t.model.sales_summary();
  },
});

export const reportschedule_settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.reportschedule_settings();
    t.crud.reportschedule_settings({ filtering: true, ordering: true });
  },
});

export const reportschedule_settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereportschedule_settings();
    t.crud.updateOnereportschedule_settings();
    t.crud.upsertOnereportschedule_settings();
    t.crud.deleteOnereportschedule_settings();

    t.crud.updateManyreportschedule_settings();
    t.crud.deleteManyreportschedule_settings();
  },
});
