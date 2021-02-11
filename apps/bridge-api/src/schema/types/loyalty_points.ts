import { objectType, extendType } from 'nexus';

export const loyalty_points = objectType({
  name: 'loyalty_points',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.points();
    t.model.contact_id();
  },
});

export const loyalty_pointsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.loyalty_points();
    t.crud.loyalty_points({ filtering: true, ordering: true });
  },
});

export const loyalty_pointsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneloyalty_points();
    t.crud.updateOneloyalty_points();
    t.crud.upsertOneloyalty_points();
    t.crud.deleteOneloyalty_points();

    t.crud.updateManyloyalty_points();
    t.crud.deleteManyloyalty_points();
  },
});
