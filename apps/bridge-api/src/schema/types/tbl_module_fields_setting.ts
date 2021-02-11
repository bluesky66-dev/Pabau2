import { objectType, extendType } from 'nexus';

export const tbl_module_fields_setting = objectType({
  name: 'tbl_module_fields_setting',
  definition(t) {
    t.model.id();
    t.model.module_id();
    t.model.field_name();
    t.model.field_label();
    t.model.is_active();
    t.model.is_required();
    t.model.occupier();
    t.model.uid();
    t.model.order();
    t.model.created_date();
    t.model.last_updated_date();
  },
});

export const tbl_module_fields_settingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tbl_module_fields_setting();
    t.crud.tbl_module_fields_settings({ filtering: true, ordering: true });
  },
});

export const tbl_module_fields_settingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetbl_module_fields_setting();
    t.crud.updateOnetbl_module_fields_setting();
    t.crud.upsertOnetbl_module_fields_setting();
    t.crud.deleteOnetbl_module_fields_setting();

    t.crud.updateManytbl_module_fields_setting();
    t.crud.deleteManytbl_module_fields_setting();
  },
});
