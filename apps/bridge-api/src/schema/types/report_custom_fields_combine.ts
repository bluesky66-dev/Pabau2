import { objectType, extendType } from 'nexus';

export const report_custom_fields_combine = objectType({
  name: 'report_custom_fields_combine',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.field_1();
    t.model.operator();
    t.model.field_2();
    t.model.active();
    t.model.occupier();
  },
});

export const report_custom_fields_combineQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.report_custom_fields_combine();
    t.crud.report_custom_fields_combines({ filtering: true, ordering: true });
  },
});

export const report_custom_fields_combineMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereport_custom_fields_combine();
    t.crud.updateOnereport_custom_fields_combine();
    t.crud.upsertOnereport_custom_fields_combine();
    t.crud.deleteOnereport_custom_fields_combine();

    t.crud.updateManyreport_custom_fields_combine();
    t.crud.deleteManyreport_custom_fields_combine();
  },
});
