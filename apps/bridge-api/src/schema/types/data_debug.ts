import { objectType, extendType } from 'nexus';

export const data_debug = objectType({
  name: 'data_debug',
  definition(t) {
    t.model.id();
    t.model.output();
    t.model.cont_format();
    t.model.event_date();
  },
});

export const data_debugQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.data_debug();
    t.crud.data_debugs({ filtering: true, ordering: true });
  },
});

export const data_debugMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedata_debug();
    t.crud.updateOnedata_debug();
    t.crud.upsertOnedata_debug();
    t.crud.deleteOnedata_debug();

    t.crud.updateManydata_debug();
    t.crud.deleteManydata_debug();
  },
});
