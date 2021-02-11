import { objectType, extendType } from 'nexus';

export const opportunity_closure_reason = objectType({
  name: 'opportunity_closure_reason',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.is_active();
    t.model.occupier();
  },
});

export const opportunity_closure_reasonQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.opportunity_closure_reason();
    t.crud.opportunity_closure_reasons({ filtering: true, ordering: true });
  },
});

export const opportunity_closure_reasonMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneopportunity_closure_reason();
    t.crud.updateOneopportunity_closure_reason();
    t.crud.upsertOneopportunity_closure_reason();
    t.crud.deleteOneopportunity_closure_reason();

    t.crud.updateManyopportunity_closure_reason();
    t.crud.deleteManyopportunity_closure_reason();
  },
});
