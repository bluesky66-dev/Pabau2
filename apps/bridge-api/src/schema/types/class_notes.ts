import { objectType, extendType } from 'nexus';

export const class_notes = objectType({
  name: 'class_notes',
  definition(t) {
    t.model.id();
    t.model.class_id();
    t.model.note();
    t.model.author();
    t.model.public();
    t.model.avatar();
    t.model.post_date();
  },
});

export const class_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.class_notes();
    t.crud.class_notes({ filtering: true, ordering: true });
  },
});

export const class_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclass_notes();
    t.crud.updateOneclass_notes();
    t.crud.upsertOneclass_notes();
    t.crud.deleteOneclass_notes();

    t.crud.updateManyclass_notes();
    t.crud.deleteManyclass_notes();
  },
});
