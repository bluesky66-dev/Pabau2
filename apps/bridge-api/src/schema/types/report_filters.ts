import { objectType, extendType } from 'nexus';

export const report_filters = objectType({
  name: 'report_filters',
  definition(t) {
    t.model.id();
    t.model.column_names();
    t.model.filter_type();
    t.model.filter_select_type();
  },
});

export const report_filtersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.report_filters();
    t.crud.report_filters({ filtering: true, ordering: true });
  },
});

export const report_filtersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereport_filters();
    t.crud.updateOnereport_filters();
    t.crud.upsertOnereport_filters();
    t.crud.deleteOnereport_filters();

    t.crud.updateManyreport_filters();
    t.crud.deleteManyreport_filters();
  },
});
