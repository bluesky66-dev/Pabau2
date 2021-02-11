import { objectType, extendType } from 'nexus';

export const tbl_module_fields = objectType({
  name: 'tbl_module_fields',
  definition(t) {
    t.model.id();
    t.model.module_id();
    t.model.field_name();
    t.model.field_label();
    t.model.is_active();
  },
});

export const tbl_module_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tbl_module_fields();
    t.crud.tbl_module_fields({ filtering: true, ordering: true });
  },
});

export const tbl_module_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetbl_module_fields();
    t.crud.updateOnetbl_module_fields();
    t.crud.upsertOnetbl_module_fields();
    t.crud.deleteOnetbl_module_fields();

    t.crud.updateManytbl_module_fields();
    t.crud.deleteManytbl_module_fields();
  },
});
