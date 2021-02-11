import { objectType, extendType } from 'nexus';

export const importer_configuration = objectType({
  name: 'importer_configuration',
  definition(t) {
    t.model.id();
    t.model.software_name();
    t.model.client_module();
    t.model.staff_module();
  },
});

export const importer_configurationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.importer_configuration();
    t.crud.importer_configurations({ filtering: true, ordering: true });
  },
});

export const importer_configurationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneimporter_configuration();
    t.crud.updateOneimporter_configuration();
    t.crud.upsertOneimporter_configuration();
    t.crud.deleteOneimporter_configuration();

    t.crud.updateManyimporter_configuration();
    t.crud.deleteManyimporter_configuration();
  },
});
