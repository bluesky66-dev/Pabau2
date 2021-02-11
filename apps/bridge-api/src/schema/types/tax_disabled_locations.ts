import { objectType, extendType } from 'nexus';

export const tax_disabled_locations = objectType({
  name: 'tax_disabled_locations',
  definition(t) {
    t.model.id();
    t.model.tax_id();
    t.model.location_id();
  },
});

export const tax_disabled_locationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tax_disabled_locations();
    t.crud.tax_disabled_locations({ filtering: true, ordering: true });
  },
});

export const tax_disabled_locationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetax_disabled_locations();
    t.crud.updateOnetax_disabled_locations();
    t.crud.upsertOnetax_disabled_locations();
    t.crud.deleteOnetax_disabled_locations();

    t.crud.updateManytax_disabled_locations();
    t.crud.deleteManytax_disabled_locations();
  },
});
