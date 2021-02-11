import { objectType, extendType } from 'nexus';

export const server_urls = objectType({
  name: 'server_urls',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.url();
    t.model.order();
  },
});

export const server_urlsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.server_urls();
    t.crud.server_urls({ filtering: true, ordering: true });
  },
});

export const server_urlsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneserver_urls();
    t.crud.updateOneserver_urls();
    t.crud.upsertOneserver_urls();
    t.crud.deleteOneserver_urls();

    t.crud.updateManyserver_urls();
    t.crud.deleteManyserver_urls();
  },
});
