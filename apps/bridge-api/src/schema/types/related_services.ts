import { objectType, extendType } from 'nexus';

export const related_services = objectType({
  name: 'related_services',
  definition(t) {
    t.model.id();
    t.model.service_id();
    t.model.service();
    t.model.duration();
    t.model.occupier();
  },
});

export const related_servicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.related_services();
    t.crud.related_services({ filtering: true, ordering: true });
  },
});

export const related_servicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerelated_services();
    t.crud.updateOnerelated_services();
    t.crud.upsertOnerelated_services();
    t.crud.deleteOnerelated_services();

    t.crud.updateManyrelated_services();
    t.crud.deleteManyrelated_services();
  },
});
