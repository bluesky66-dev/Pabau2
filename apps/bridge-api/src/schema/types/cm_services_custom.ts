import { objectType, extendType } from 'nexus';

export const cm_services_custom = objectType({
  name: 'cm_services_custom',
  definition(t) {
    t.model.id();
    t.model.service_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_value();
  },
});

export const cm_services_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_services_custom();
    t.crud.cm_services_customs({ filtering: true, ordering: true });
  },
});

export const cm_services_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_services_custom();
    t.crud.updateOnecm_services_custom();
    t.crud.upsertOnecm_services_custom();
    t.crud.deleteOnecm_services_custom();

    t.crud.updateManycm_services_custom();
    t.crud.deleteManycm_services_custom();
  },
});
