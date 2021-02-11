import { objectType, extendType } from 'nexus';

export const import_custom_helper = objectType({
  name: 'import_custom_helper',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.custom_name();
    t.model.helper_type();
    t.model.company_id();
  },
});

export const import_custom_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.import_custom_helper();
    t.crud.import_custom_helpers({ filtering: true, ordering: true });
  },
});

export const import_custom_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneimport_custom_helper();
    t.crud.updateOneimport_custom_helper();
    t.crud.upsertOneimport_custom_helper();
    t.crud.deleteOneimport_custom_helper();

    t.crud.updateManyimport_custom_helper();
    t.crud.deleteManyimport_custom_helper();
  },
});
