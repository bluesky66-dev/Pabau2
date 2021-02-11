import { objectType, extendType } from 'nexus';

export const cm_wallpost_files = objectType({
  name: 'cm_wallpost_files',
  definition(t) {
    t.model.ID();
    t.model.postId();
    t.model.filetype();
    t.model.filename();
    t.model.original();
  },
});

export const cm_wallpost_filesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_wallpost_files();
    t.crud.cm_wallpost_files({ filtering: true, ordering: true });
  },
});

export const cm_wallpost_filesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_wallpost_files();
    t.crud.updateOnecm_wallpost_files();
    t.crud.upsertOnecm_wallpost_files();
    t.crud.deleteOnecm_wallpost_files();

    t.crud.updateManycm_wallpost_files();
    t.crud.deleteManycm_wallpost_files();
  },
});
