import { objectType, extendType } from 'nexus';

export const nws_link = objectType({
  name: 'nws_link',
  definition(t) {
    t.model.link_id();
    t.model.link_url();
    t.model.company();
  },
});

export const nws_linkQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_link();
    t.crud.nws_links({ filtering: true, ordering: true });
  },
});

export const nws_linkMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_link();
    t.crud.updateOnenws_link();
    t.crud.upsertOnenws_link();
    t.crud.deleteOnenws_link();

    t.crud.updateManynws_link();
    t.crud.deleteManynws_link();
  },
});
