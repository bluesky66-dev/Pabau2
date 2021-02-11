import { objectType, extendType } from 'nexus';

export const cp_pathways_taken = objectType({
  name: 'cp_pathways_taken',
  definition(t) {
    t.model.id();
    t.model.pathway_id();
    t.model.contact_id();
    t.model.booking_id();
    t.model.started_on();
    t.model.status();
    t.model.comment();
    t.model.cp_pathways();
    t.model.cp_steps_taken();
  },
});

export const cp_pathways_takenQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cp_pathways_taken();
    t.crud.cp_pathways_takens({ filtering: true, ordering: true });
  },
});

export const cp_pathways_takenMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecp_pathways_taken();
    t.crud.updateOnecp_pathways_taken();
    t.crud.upsertOnecp_pathways_taken();
    t.crud.deleteOnecp_pathways_taken();

    t.crud.updateManycp_pathways_taken();
    t.crud.deleteManycp_pathways_taken();
  },
});
