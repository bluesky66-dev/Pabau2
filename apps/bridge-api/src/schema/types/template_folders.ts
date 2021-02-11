import { objectType, extendType } from 'nexus';

export const template_folders = objectType({
  name: 'template_folders',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.folder_name();
    t.model.folder_description();
  },
});

export const template_foldersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.template_folders();
    t.crud.template_folders({ filtering: true, ordering: true });
  },
});

export const template_foldersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetemplate_folders();
    t.crud.updateOnetemplate_folders();
    t.crud.upsertOnetemplate_folders();
    t.crud.deleteOnetemplate_folders();

    t.crud.updateManytemplate_folders();
    t.crud.deleteManytemplate_folders();
  },
});
