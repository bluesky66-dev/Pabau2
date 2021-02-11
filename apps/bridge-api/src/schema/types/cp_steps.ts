import { objectType, extendType } from 'nexus';

export const cp_steps = objectType({
  name: 'cp_steps',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.created_date();
    t.model.step();
    t.model.order();
    t.model.item_id();
    t.model.pathway_id();
    t.model.can_skip();
    t.model.display_time();
    t.model.other_value();
    t.model.description();
    t.model.who_does_this();
    t.model.cp_pathways();
    t.model.cp_steps_taken();
  },
});

export const cp_stepsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cp_steps();
    t.crud.cp_steps({ filtering: true, ordering: true });
  },
});

export const cp_stepsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecp_steps();
    t.crud.updateOnecp_steps();
    t.crud.upsertOnecp_steps();
    t.crud.deleteOnecp_steps();

    t.crud.updateManycp_steps();
    t.crud.deleteManycp_steps();
  },
});
