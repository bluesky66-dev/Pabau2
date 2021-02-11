import { objectType, extendType } from 'nexus';

export const company_services_import_helper = objectType({
  name: 'company_services_import_helper',
  definition(t) {
    t.model.id();
    t.model.service();
    t.model.custom_id();
    t.model.color();
    t.model.occupier();
    t.model.imported();
  },
});

export const company_services_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_import_helper();
    t.crud.company_services_import_helpers({ filtering: true, ordering: true });
  },
});

export const company_services_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_import_helper();
    t.crud.updateOnecompany_services_import_helper();
    t.crud.upsertOnecompany_services_import_helper();
    t.crud.deleteOnecompany_services_import_helper();

    t.crud.updateManycompany_services_import_helper();
    t.crud.deleteManycompany_services_import_helper();
  },
});
