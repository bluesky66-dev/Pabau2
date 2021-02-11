import { objectType, extendType } from 'nexus';

export const communications_hashes = objectType({
  name: 'communications_hashes',
  definition(t) {
    t.model.id();
    t.model.comm_recipient_id();
    t.model.hash();
    t.model.communications_recipients();
  },
});

export const communications_hashesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communications_hashes();
    t.crud.communications_hashes({ filtering: true, ordering: true });
  },
});

export const communications_hashesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunications_hashes();
    t.crud.updateOnecommunications_hashes();
    t.crud.upsertOnecommunications_hashes();
    t.crud.deleteOnecommunications_hashes();

    t.crud.updateManycommunications_hashes();
    t.crud.deleteManycommunications_hashes();
  },
});
