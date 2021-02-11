import { objectType, extendType } from 'nexus';

export const nws_link_open = objectType({
  name: 'nws_link_open',
  definition(t) {
    t.model.link_open_id();
    t.model.link_id();
    t.model.member_id();
    t.model.send_id();
    t.model.timestamp();
    t.model.company();
  },
});

export const nws_link_openQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_link_open();
    t.crud.nws_link_opens({ filtering: true, ordering: true });
  },
});

export const nws_link_openMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_link_open();
    t.crud.updateOnenws_link_open();
    t.crud.upsertOnenws_link_open();
    t.crud.deleteOnenws_link_open();

    t.crud.updateManynws_link_open();
    t.crud.deleteManynws_link_open();
  },
});
