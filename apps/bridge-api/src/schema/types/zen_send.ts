import { objectType, extendType } from 'nexus';

export const zen_send = objectType({
  name: 'zen_send',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.type();
  },
});

export const zen_sendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zen_send();
    t.crud.zen_sends({ filtering: true, ordering: true });
  },
});

export const zen_sendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezen_send();
    t.crud.updateOnezen_send();
    t.crud.upsertOnezen_send();
    t.crud.deleteOnezen_send();

    t.crud.updateManyzen_send();
    t.crud.deleteManyzen_send();
  },
});
