import { objectType, extendType } from 'nexus';

export const ClassNotes = objectType({
  name: 'ClassNotes',
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

export const classNotesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classNotes();
    t.crud.classNotes({ filtering: true, ordering: true });

    t.field('classNotesCount', {
      type: 'Int',
      args: {
        where: 'ClassNotesWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.classNotes.count(args);
      },
    });
  },
});

export const classNotesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClassNotes();
    t.crud.updateOneClassNotes();
    t.crud.upsertOneClassNotes();
    t.crud.deleteOneClassNotes();

    t.crud.updateManyClassNotes();
    t.crud.deleteManyClassNotes();
  },
});
