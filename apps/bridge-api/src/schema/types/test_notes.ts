import { objectType, extendType } from 'nexus';

export const test_notes = objectType({
  name: 'test_notes',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.contact_id();
    t.model.note();
    t.model.date();
  },
});

export const test_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.test_notes();
    t.crud.test_notes({ filtering: true, ordering: true });
  },
});

export const test_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetest_notes();
    t.crud.updateOnetest_notes();
    t.crud.upsertOnetest_notes();
    t.crud.deleteOnetest_notes();

    t.crud.updateManytest_notes();
    t.crud.deleteManytest_notes();
  },
});
