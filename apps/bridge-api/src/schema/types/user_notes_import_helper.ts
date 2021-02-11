import { objectType, extendType } from 'nexus';

export const user_notes_import_helper = objectType({
  name: 'user_notes_import_helper',
  definition(t) {
    t.model.id();
    t.model.custom_user_id();
    t.model.custom_user_name();
    t.model.note();
    t.model.date();
    t.model.occupier();
    t.model.imported();
    t.model.added();
  },
});

export const user_notes_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_notes_import_helper();
    t.crud.user_notes_import_helpers({ filtering: true, ordering: true });
  },
});

export const user_notes_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_notes_import_helper();
    t.crud.updateOneuser_notes_import_helper();
    t.crud.upsertOneuser_notes_import_helper();
    t.crud.deleteOneuser_notes_import_helper();

    t.crud.updateManyuser_notes_import_helper();
    t.crud.deleteManyuser_notes_import_helper();
  },
});
