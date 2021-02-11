import { objectType, extendType } from 'nexus';

export const salutations = objectType({
  name: 'salutations',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.company_id();
  },
});

export const salutationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.salutations();
    t.crud.salutations({ filtering: true, ordering: true });
  },
});

export const salutationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesalutations();
    t.crud.updateOnesalutations();
    t.crud.upsertOnesalutations();
    t.crud.deleteOnesalutations();

    t.crud.updateManysalutations();
    t.crud.deleteManysalutations();
  },
});
