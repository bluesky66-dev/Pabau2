import { objectType, extendType } from 'nexus';

export const solutions = objectType({
  name: 'solutions',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.status();
    t.model.question();
    t.model.answer();
    t.model.ownerid();
    t.model.occupier();
    t.model.category();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const solutionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.solutions();
    t.crud.solutions({ filtering: true, ordering: true });
  },
});

export const solutionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesolutions();
    t.crud.updateOnesolutions();
    t.crud.upsertOnesolutions();
    t.crud.deleteOnesolutions();

    t.crud.updateManysolutions();
    t.crud.deleteManysolutions();
  },
});
