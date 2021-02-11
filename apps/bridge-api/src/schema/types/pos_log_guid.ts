import { objectType, extendType } from 'nexus';

export const pos_log_guid = objectType({
  name: 'pos_log_guid',
  definition(t) {
    t.model.id();
    t.model.guid();
    t.model.company();
  },
});

export const pos_log_guidQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pos_log_guid();
    t.crud.pos_log_guids({ filtering: true, ordering: true });
  },
});

export const pos_log_guidMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepos_log_guid();
    t.crud.updateOnepos_log_guid();
    t.crud.upsertOnepos_log_guid();
    t.crud.deleteOnepos_log_guid();

    t.crud.updateManypos_log_guid();
    t.crud.deleteManypos_log_guid();
  },
});
