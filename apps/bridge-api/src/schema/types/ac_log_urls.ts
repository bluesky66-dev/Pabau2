import { objectType, extendType } from 'nexus';

export const ac_log_urls = objectType({
  name: 'ac_log_urls',
  definition(t) {
    t.model.id();
    t.model.url();
    t.model.file();
    t.model.referer();
  },
});

export const ac_log_urlsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ac_log_urls();
    t.crud.ac_log_urls({ filtering: true, ordering: true });
  },
});

export const ac_log_urlsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneac_log_urls();
    t.crud.updateOneac_log_urls();
    t.crud.upsertOneac_log_urls();
    t.crud.deleteOneac_log_urls();

    t.crud.updateManyac_log_urls();
    t.crud.deleteManyac_log_urls();
  },
});
