import { objectType, extendType } from 'nexus';

export const manage_custom_fields = objectType({
  name: 'manage_custom_fields',
  definition(t) {
    t.model.id();
    t.model.field_label();
    t.model.field_type();
    t.model.occupier();
    t.model.uid();
    t.model.location_id();
    t.model.created_date();
    t.model.modified_date();
    t.model.treatment_interest();
    t.model.show_in_leads();
    t.model.field_for();
    t.model.flagged();
    t.model.is_required();
    t.model.disable_app();
    t.model.is_active();
    t.model.field_order();
    t.model.display_in_invoice();
    t.model.default_in_reports();
    t.model.category_id();
    t.model.in_cc_toolbar();
    t.model.favorite();
    t.model.show_in_cal();
  },
});

export const manage_custom_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.manage_custom_fields();
    t.crud.manage_custom_fields({ filtering: true, ordering: true });
  },
});

export const manage_custom_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemanage_custom_fields();
    t.crud.updateOnemanage_custom_fields();
    t.crud.upsertOnemanage_custom_fields();
    t.crud.deleteOnemanage_custom_fields();

    t.crud.updateManymanage_custom_fields();
    t.crud.deleteManymanage_custom_fields();
  },
});
