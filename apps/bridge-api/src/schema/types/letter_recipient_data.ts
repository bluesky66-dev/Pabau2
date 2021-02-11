import { objectType, extendType } from 'nexus';

export const letter_recipient_data = objectType({
  name: 'letter_recipient_data',
  definition(t) {
    t.model.id();
    t.model.communication_id();
    t.model.recipient_data();
    t.model.letter_body();
    t.model.invoice_id();
  },
});

export const letter_recipient_dataQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.letter_recipient_data();
    t.crud.letter_recipient_data({ filtering: true, ordering: true });
  },
});

export const letter_recipient_dataMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneletter_recipient_data();
    t.crud.updateOneletter_recipient_data();
    t.crud.upsertOneletter_recipient_data();
    t.crud.deleteOneletter_recipient_data();

    t.crud.updateManyletter_recipient_data();
    t.crud.deleteManyletter_recipient_data();
  },
});
