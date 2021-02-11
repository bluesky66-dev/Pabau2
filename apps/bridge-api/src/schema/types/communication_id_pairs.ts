import { objectType, extendType } from 'nexus';

export const communication_id_pairs = objectType({
  name: 'communication_id_pairs',
  definition(t) {
    t.model.id();
    t.model.old_id();
    t.model.new_id();
    t.model.type();
    t.model.failed();
    t.model.call_log_fixed();
  },
});

export const communication_id_pairsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communication_id_pairs();
    t.crud.communication_id_pairs({ filtering: true, ordering: true });
  },
});

export const communication_id_pairsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunication_id_pairs();
    t.crud.updateOnecommunication_id_pairs();
    t.crud.upsertOnecommunication_id_pairs();
    t.crud.deleteOnecommunication_id_pairs();

    t.crud.updateManycommunication_id_pairs();
    t.crud.deleteManycommunication_id_pairs();
  },
});
