import { objectType, extendType } from 'nexus';

export const zha_import_services = objectType({
  name: 'zha_import_services',
  definition(t) {
    t.model.id();
    t.model.custom_service_id();
    t.model.service_name();
    t.model.occupier();
  },
});

export const zha_import_servicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zha_import_services();
    t.crud.zha_import_services({ filtering: true, ordering: true });
  },
});

export const zha_import_servicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezha_import_services();
    t.crud.updateOnezha_import_services();
    t.crud.upsertOnezha_import_services();
    t.crud.deleteOnezha_import_services();

    t.crud.updateManyzha_import_services();
    t.crud.deleteManyzha_import_services();
  },
});
