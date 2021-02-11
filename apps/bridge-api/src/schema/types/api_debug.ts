import { objectType, extendType } from 'nexus';

export const api_debug = objectType({
  name: 'api_debug',
  definition(t) {
    t.model.id();
    t.model.data_received();
    t.model.company_id();
    t.model.api_code();
    t.model.created_date();
    t.model.data_type();
  },
});

export const api_debugQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.api_debug();
    t.crud.api_debugs({ filtering: true, ordering: true });
  },
});

export const api_debugMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneapi_debug();
    t.crud.updateOneapi_debug();
    t.crud.upsertOneapi_debug();
    t.crud.deleteOneapi_debug();

    t.crud.updateManyapi_debug();
    t.crud.deleteManyapi_debug();
  },
});
