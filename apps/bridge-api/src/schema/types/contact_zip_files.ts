import { objectType, extendType } from 'nexus';

export const contact_zip_files = objectType({
  name: 'contact_zip_files',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.contact_id();
    t.model.file_name();
    t.model.linkhref();
    t.model.status();
    t.model.user_id();
    t.model.date_added();
    t.model.date_processing();
    t.model.date_processed();
  },
});

export const contact_zip_filesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_zip_files();
    t.crud.contact_zip_files({ filtering: true, ordering: true });
  },
});

export const contact_zip_filesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_zip_files();
    t.crud.updateOnecontact_zip_files();
    t.crud.upsertOnecontact_zip_files();
    t.crud.deleteOnecontact_zip_files();

    t.crud.updateManycontact_zip_files();
    t.crud.deleteManycontact_zip_files();
  },
});
