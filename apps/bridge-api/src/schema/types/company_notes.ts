import { objectType, extendType } from 'nexus';

export const company_notes = objectType({
  name: 'company_notes',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.user_id();
    t.model.note();
    t.model.created_date();
    t.model.is_alert();
  },
});

export const company_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_notes();
    t.crud.company_notes({ filtering: true, ordering: true });
  },
});

export const company_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_notes();
    t.crud.updateOnecompany_notes();
    t.crud.upsertOnecompany_notes();
    t.crud.deleteOnecompany_notes();

    t.crud.updateManycompany_notes();
    t.crud.deleteManycompany_notes();
  },
});
