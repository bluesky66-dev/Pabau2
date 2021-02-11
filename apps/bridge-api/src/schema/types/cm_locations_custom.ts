import { objectType, extendType } from 'nexus';

export const cm_locations_custom = objectType({
  name: 'cm_locations_custom',
  definition(t) {
    t.model.id();
    t.model.location_id();
    t.model.custom_field_id();
    t.model.custom_field_value();
    t.model.occupier();
  },
});

export const cm_locations_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_locations_custom();
    t.crud.cm_locations_customs({ filtering: true, ordering: true });
  },
});

export const cm_locations_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_locations_custom();
    t.crud.updateOnecm_locations_custom();
    t.crud.upsertOnecm_locations_custom();
    t.crud.deleteOnecm_locations_custom();

    t.crud.updateManycm_locations_custom();
    t.crud.deleteManycm_locations_custom();
  },
});
