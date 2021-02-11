import { objectType, extendType } from 'nexus';

export const contract_folders = objectType({
  name: 'contract_folders',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.description();
  },
});

export const contract_foldersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contract_folders();
    t.crud.contract_folders({ filtering: true, ordering: true });
  },
});

export const contract_foldersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontract_folders();
    t.crud.updateOnecontract_folders();
    t.crud.upsertOnecontract_folders();
    t.crud.deleteOnecontract_folders();

    t.crud.updateManycontract_folders();
    t.crud.deleteManycontract_folders();
  },
});
