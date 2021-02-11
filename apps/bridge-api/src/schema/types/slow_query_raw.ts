import { objectType, extendType } from 'nexus';

export const slow_query_raw = objectType({
  name: 'slow_query_raw',
  definition(t) {
    t.model.query_id();
    t.model.sql_text();
    t.model.db();
    t.model.server_host();
    t.model.request_uri();
    t.model.get_data();
    t.model.post_data();
    t.model.date_time();
    t.model.query_time();
  },
});

export const slow_query_rawQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.slow_query_raw();
    t.crud.slow_query_raws({ filtering: true, ordering: true });
  },
});

export const slow_query_rawMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneslow_query_raw();
    t.crud.updateOneslow_query_raw();
    t.crud.upsertOneslow_query_raw();
    t.crud.deleteOneslow_query_raw();

    t.crud.updateManyslow_query_raw();
    t.crud.deleteManyslow_query_raw();
  },
});
