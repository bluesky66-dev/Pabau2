import { objectType, extendType } from 'nexus';

export const ipaddress_vote_map = objectType({
  name: 'ipaddress_vote_map',
  definition(t) {
    t.model.id();
    t.model.voting_id();
    t.model.ip_address();
    t.model.vote_rank();
  },
});

export const ipaddress_vote_mapQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ipaddress_vote_map();
    t.crud.ipaddress_vote_maps({ filtering: true, ordering: true });
  },
});

export const ipaddress_vote_mapMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneipaddress_vote_map();
    t.crud.updateOneipaddress_vote_map();
    t.crud.upsertOneipaddress_vote_map();
    t.crud.deleteOneipaddress_vote_map();

    t.crud.updateManyipaddress_vote_map();
    t.crud.deleteManyipaddress_vote_map();
  },
});
