import { objectType, extendType } from 'nexus';

export const cp_pathways = objectType({
  name: 'cp_pathways',
  definition(t) {
    t.model.id();
    t.model.pathway_name();
    t.model.company_id();
    t.model.description();
    t.model.is_active();
    t.model.order();
    t.model.cp_pathways_taken();
    t.model.cp_steps();
  },
});

export const cp_pathwaysQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cp_pathways();
    t.crud.cp_pathways({ filtering: true, ordering: true });
  },
});

export const cp_pathwaysMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecp_pathways();
    t.crud.updateOnecp_pathways();
    t.crud.upsertOnecp_pathways();
    t.crud.deleteOnecp_pathways();

    t.crud.updateManycp_pathways();
    t.crud.deleteManycp_pathways();
  },
});
