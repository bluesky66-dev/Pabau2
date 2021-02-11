import { objectType, extendType } from 'nexus';

export const failed_import = objectType({
  name: 'failed_import',
  definition(t) {
    t.model.id();
    t.model.file_name();
    t.model.col0();
    t.model.col1();
    t.model.col2();
    t.model.col3();
  },
});

export const failed_importQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.failed_import();
    t.crud.failed_imports({ filtering: true, ordering: true });
  },
});

export const failed_importMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefailed_import();
    t.crud.updateOnefailed_import();
    t.crud.upsertOnefailed_import();
    t.crud.deleteOnefailed_import();

    t.crud.updateManyfailed_import();
    t.crud.deleteManyfailed_import();
  },
});
