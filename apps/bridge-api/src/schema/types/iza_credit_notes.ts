import { objectType, extendType } from 'nexus';

export const iza_credit_notes = objectType({
  name: 'iza_credit_notes',
  definition(t) {
    t.model.invoice_id();
    t.model.total_price();
    t.model.comments();
    t.model.raised_by_invoice_id();
  },
});

export const iza_credit_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.iza_credit_notes();
    t.crud.iza_credit_notes({ filtering: true, ordering: true });
  },
});

export const iza_credit_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneiza_credit_notes();
    t.crud.updateOneiza_credit_notes();
    t.crud.upsertOneiza_credit_notes();
    t.crud.deleteOneiza_credit_notes();

    t.crud.updateManyiza_credit_notes();
    t.crud.deleteManyiza_credit_notes();
  },
});
