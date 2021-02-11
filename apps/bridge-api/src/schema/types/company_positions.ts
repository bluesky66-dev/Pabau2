import { objectType, extendType } from 'nexus';

export const company_positions = objectType({
  name: 'company_positions',
  definition(t) {
    t.model.id();
    t.model.company();
    t.model.position();
  },
});

export const company_positionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_positions();
    t.crud.company_positions({ filtering: true, ordering: true });
  },
});

export const company_positionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_positions();
    t.crud.updateOnecompany_positions();
    t.crud.upsertOnecompany_positions();
    t.crud.deleteOnecompany_positions();

    t.crud.updateManycompany_positions();
    t.crud.deleteManycompany_positions();
  },
});
