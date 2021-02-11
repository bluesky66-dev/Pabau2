import { objectType, extendType } from 'nexus';

export const automation_folders = objectType({
  name: 'automation_folders',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.description();
  },
});

export const automation_foldersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.automation_folders();
    t.crud.automation_folders({ filtering: true, ordering: true });
  },
});

export const automation_foldersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneautomation_folders();
    t.crud.updateOneautomation_folders();
    t.crud.upsertOneautomation_folders();
    t.crud.deleteOneautomation_folders();

    t.crud.updateManyautomation_folders();
    t.crud.deleteManyautomation_folders();
  },
});
