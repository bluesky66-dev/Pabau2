import { objectType, extendType } from 'nexus';

export const user_notes = objectType({
  name: 'user_notes',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.note();
    t.model.added_by();
    t.model.date();
    t.model.date_added();
    t.model.updated_by();
    t.model.date_updated();
    t.model.rota_id();
    t.model.note_color();
  },
});

export const user_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_notes();
    t.crud.user_notes({ filtering: true, ordering: true });
  },
});

export const user_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_notes();
    t.crud.updateOneuser_notes();
    t.crud.upsertOneuser_notes();
    t.crud.deleteOneuser_notes();

    t.crud.updateManyuser_notes();
    t.crud.deleteManyuser_notes();
  },
});
