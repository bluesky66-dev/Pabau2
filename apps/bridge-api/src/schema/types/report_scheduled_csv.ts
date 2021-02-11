import { objectType, extendType } from 'nexus';

export const report_scheduled_csv = objectType({
  name: 'report_scheduled_csv',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.unique_key();
    t.model.get_data();
    t.model.post_data();
    t.model.scheduled();
    t.model.date_created();
    t.model.url_link();
    t.model.file_link();
  },
});

export const report_scheduled_csvQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.report_scheduled_csv();
    t.crud.report_scheduled_csvs({ filtering: true, ordering: true });
  },
});

export const report_scheduled_csvMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereport_scheduled_csv();
    t.crud.updateOnereport_scheduled_csv();
    t.crud.upsertOnereport_scheduled_csv();
    t.crud.deleteOnereport_scheduled_csv();

    t.crud.updateManyreport_scheduled_csv();
    t.crud.deleteManyreport_scheduled_csv();
  },
});
