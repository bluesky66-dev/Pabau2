import { objectType, extendType } from 'nexus';

export const engage_meter_services = objectType({
  name: 'engage_meter_services',
  definition(t) {
    t.model.id();
    t.model.meter_id();
    t.model.service_id();
  },
});

export const engage_meter_servicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.engage_meter_services();
    t.crud.engage_meter_services({ filtering: true, ordering: true });
  },
});

export const engage_meter_servicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneengage_meter_services();
    t.crud.updateOneengage_meter_services();
    t.crud.upsertOneengage_meter_services();
    t.crud.deleteOneengage_meter_services();

    t.crud.updateManyengage_meter_services();
    t.crud.deleteManyengage_meter_services();
  },
});
