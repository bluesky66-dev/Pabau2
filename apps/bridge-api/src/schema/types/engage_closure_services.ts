import { objectType, extendType } from 'nexus';

export const engage_closure_services = objectType({
  name: 'engage_closure_services',
  definition(t) {
    t.model.id();
    t.model.meter_id();
    t.model.service_id();
  },
});

export const engage_closure_servicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.engage_closure_services();
    t.crud.engage_closure_services({ filtering: true, ordering: true });
  },
});

export const engage_closure_servicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneengage_closure_services();
    t.crud.updateOneengage_closure_services();
    t.crud.upsertOneengage_closure_services();
    t.crud.deleteOneengage_closure_services();

    t.crud.updateManyengage_closure_services();
    t.crud.deleteManyengage_closure_services();
  },
});
