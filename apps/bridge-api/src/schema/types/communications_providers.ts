import { objectType, extendType } from 'nexus';

export const communications_providers = objectType({
  name: 'communications_providers',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.name();
    t.model.communications_recipients();
  },
});

export const communications_providersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communications_providers();
    t.crud.communications_providers({ filtering: true, ordering: true });
  },
});

export const communications_providersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunications_providers();
    t.crud.updateOnecommunications_providers();
    t.crud.upsertOnecommunications_providers();
    t.crud.deleteOnecommunications_providers();

    t.crud.updateManycommunications_providers();
    t.crud.deleteManycommunications_providers();
  },
});
