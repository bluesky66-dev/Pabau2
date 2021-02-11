import { objectType, extendType } from 'nexus';

export const report_custom_fields_categories = objectType({
  name: 'report_custom_fields_categories',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.is_active();
  },
});

export const report_custom_fields_categoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.report_custom_fields_categories();
    t.crud.report_custom_fields_categories({ filtering: true, ordering: true });
  },
});

export const report_custom_fields_categoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereport_custom_fields_categories();
    t.crud.updateOnereport_custom_fields_categories();
    t.crud.upsertOnereport_custom_fields_categories();
    t.crud.deleteOnereport_custom_fields_categories();

    t.crud.updateManyreport_custom_fields_categories();
    t.crud.deleteManyreport_custom_fields_categories();
  },
});
