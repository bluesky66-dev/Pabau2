import { objectType, extendType } from 'nexus';

export const credit_note_type = objectType({
  name: 'credit_note_type',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.code();
    t.model.prefix();
    t.model.quick_access();
    t.model.credit_note_type();
    t.model.is_disabled();
  },
});

export const credit_note_typeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.credit_note_type();
    t.crud.credit_note_types({ filtering: true, ordering: true });
  },
});

export const credit_note_typeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecredit_note_type();
    t.crud.updateOnecredit_note_type();
    t.crud.upsertOnecredit_note_type();
    t.crud.deleteOnecredit_note_type();

    t.crud.updateManycredit_note_type();
    t.crud.deleteManycredit_note_type();
  },
});
