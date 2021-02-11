import { objectType, extendType } from 'nexus';

export const cp_steps_taken = objectType({
  name: 'cp_steps_taken',
  definition(t) {
    t.model.id();
    t.model.step_id();
    t.model.path_taken_id();
    t.model.contact_id();
    t.model.date();
    t.model.time();
    t.model.status();
    t.model.record_id();
    t.model.cp_pathways_taken();
    t.model.cp_steps();
  },
});

export const cp_steps_takenQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cp_steps_taken();
    t.crud.cp_steps_takens({ filtering: true, ordering: true });
  },
});

export const cp_steps_takenMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecp_steps_taken();
    t.crud.updateOnecp_steps_taken();
    t.crud.upsertOnecp_steps_taken();
    t.crud.deleteOnecp_steps_taken();

    t.crud.updateManycp_steps_taken();
    t.crud.deleteManycp_steps_taken();
  },
});
