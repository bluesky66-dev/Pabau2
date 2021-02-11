import { objectType, extendType } from 'nexus';

export const communications_recipients = objectType({
  name: 'communications_recipients',
  definition(t) {
    t.model.id();
    t.model.communications_id();
    t.model.recipient_id();
    t.model.recipient_type();
    t.model.remote_key();
    t.model.delivered_result();
    t.model.read_count();
    t.model.to_address();
    t.model.cc();
    t.model.provider_id();
    t.model.status();
    t.model.merge_values();
    t.model.communications();
    t.model.communications_providers();
    t.model.communications_hashes();
  },
});

export const communications_recipientsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communications_recipients();
    t.crud.communications_recipients({ filtering: true, ordering: true });
  },
});

export const communications_recipientsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunications_recipients();
    t.crud.updateOnecommunications_recipients();
    t.crud.upsertOnecommunications_recipients();
    t.crud.deleteOnecommunications_recipients();

    t.crud.updateManycommunications_recipients();
    t.crud.deleteManycommunications_recipients();
  },
});
