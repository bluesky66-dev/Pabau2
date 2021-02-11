import { objectType, extendType } from 'nexus';

export const daily_report_temp = objectType({
  name: 'daily_report_temp',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.uid();
    t.model.type();
    t.model.date();
  },
});

export const daily_report_tempQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.daily_report_temp();
    t.crud.daily_report_temps({ filtering: true, ordering: true });
  },
});

export const daily_report_tempMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedaily_report_temp();
    t.crud.updateOnedaily_report_temp();
    t.crud.upsertOnedaily_report_temp();
    t.crud.deleteOnedaily_report_temp();

    t.crud.updateManydaily_report_temp();
    t.crud.deleteManydaily_report_temp();
  },
});
