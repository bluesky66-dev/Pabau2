import { objectType, extendType } from 'nexus';

export const bookmarked_pages = objectType({
  name: 'bookmarked_pages',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.link();
    t.model.companyid();
    t.model.title();
    t.model.icon();
  },
});

export const bookmarked_pagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bookmarked_pages();
    t.crud.bookmarked_pages({ filtering: true, ordering: true });
  },
});

export const bookmarked_pagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebookmarked_pages();
    t.crud.updateOnebookmarked_pages();
    t.crud.upsertOnebookmarked_pages();
    t.crud.deleteOnebookmarked_pages();

    t.crud.updateManybookmarked_pages();
    t.crud.deleteManybookmarked_pages();
  },
});
