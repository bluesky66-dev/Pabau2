import { objectType, extendType } from 'nexus';

export const communication_log_letter_recipient = objectType({
  name: 'communication_log_letter_recipient',
  definition(t) {
    t.model.id();
    t.model.communication_id();
    t.model.recipient_type();
    t.model.recipient();
  },
});

export const communication_log_letter_recipientQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communication_log_letter_recipient();
    t.crud.communication_log_letter_recipients({ filtering: true, ordering: true });
  },
});

export const communication_log_letter_recipientMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunication_log_letter_recipient();
    t.crud.updateOnecommunication_log_letter_recipient();
    t.crud.upsertOnecommunication_log_letter_recipient();
    t.crud.deleteOnecommunication_log_letter_recipient();

    t.crud.updateManycommunication_log_letter_recipient();
    t.crud.deleteManycommunication_log_letter_recipient();
  },
});
