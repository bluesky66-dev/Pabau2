import { objectType, extendType } from 'nexus';

export const facebook_pages = objectType({
  name: 'facebook_pages',
  definition(t) {
    t.model.id();
    t.model.fb_page_id();
    t.model.company_id();
  },
});

export const facebook_pagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.facebook_pages();
    t.crud.facebook_pages({ filtering: true, ordering: true });
  },
});

export const facebook_pagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefacebook_pages();
    t.crud.updateOnefacebook_pages();
    t.crud.upsertOnefacebook_pages();
    t.crud.deleteOnefacebook_pages();

    t.crud.updateManyfacebook_pages();
    t.crud.deleteManyfacebook_pages();
  },
});
