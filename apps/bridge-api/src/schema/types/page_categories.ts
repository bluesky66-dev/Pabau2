import { objectType, extendType } from 'nexus';

export const page_categories = objectType({
  name: 'page_categories',
  definition(t) {
    t.model.id();
    t.model.category();
    t.model.description();
    t.model.visible();
    t.model.url();
  },
});

export const page_categoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.page_categories();
    t.crud.page_categories({ filtering: true, ordering: true });
  },
});

export const page_categoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepage_categories();
    t.crud.updateOnepage_categories();
    t.crud.upsertOnepage_categories();
    t.crud.deleteOnepage_categories();

    t.crud.updateManypage_categories();
    t.crud.deleteManypage_categories();
  },
});
