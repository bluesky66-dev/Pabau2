import { objectType, extendType } from 'nexus';

export const tax_disabled_services = objectType({
  name: 'tax_disabled_services',
  definition(t) {
    t.model.id();
    t.model.tax_id();
    t.model.service_id();
  },
});

export const tax_disabled_servicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tax_disabled_services();
    t.crud.tax_disabled_services({ filtering: true, ordering: true });
  },
});

export const tax_disabled_servicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetax_disabled_services();
    t.crud.updateOnetax_disabled_services();
    t.crud.upsertOnetax_disabled_services();
    t.crud.deleteOnetax_disabled_services();

    t.crud.updateManytax_disabled_services();
    t.crud.deleteManytax_disabled_services();
  },
});
