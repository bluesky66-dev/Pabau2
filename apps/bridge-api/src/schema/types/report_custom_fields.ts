import { objectType, extendType } from 'nexus';

export const report_custom_fields = objectType({
  name: 'report_custom_fields',
  definition(t) {
    t.model.id();
    t.model.field_id();
    t.model.field_name();
    t.model.field_type();
    t.model.is_active();
    t.model.group_name();
    t.model.category_id();
    t.model.order_number();
    t.model.description();
  },
});

export const report_custom_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.report_custom_fields();
    t.crud.report_custom_fields({ filtering: true, ordering: true });
  },
});

export const report_custom_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereport_custom_fields();
    t.crud.updateOnereport_custom_fields();
    t.crud.upsertOnereport_custom_fields();
    t.crud.deleteOnereport_custom_fields();

    t.crud.updateManyreport_custom_fields();
    t.crud.deleteManyreport_custom_fields();
  },
});
