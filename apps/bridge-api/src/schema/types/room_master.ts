import { objectType, extendType } from 'nexus';

export const room_master = objectType({
  name: 'room_master',
  definition(t) {
    t.model.r_id();
    t.model.r_comp_id();
    t.model.r_loc_id();
    t.model.r_room();
    t.model.r_date();
  },
});

export const room_masterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.room_master();
    t.crud.room_masters({ filtering: true, ordering: true });
  },
});

export const room_masterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneroom_master();
    t.crud.updateOneroom_master();
    t.crud.upsertOneroom_master();
    t.crud.deleteOneroom_master();

    t.crud.updateManyroom_master();
    t.crud.deleteManyroom_master();
  },
});
