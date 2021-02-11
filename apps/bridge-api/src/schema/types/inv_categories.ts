import { objectType, extendType } from 'nexus';

export const inv_categories = objectType({
  name: 'inv_categories',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.name();
    t.model.order();
    t.model.category_type();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.custom_id();
    t.model.PriceListGroup_id();
    t.model.imported();
    t.model.technical();
    t.model.image();
    t.model.disabled();
    t.model.tax_id();
    t.model.master_cat_id();
  },
});

export const inv_categoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_categories();
    t.crud.inv_categories({ filtering: true, ordering: true });
  },
});

export const inv_categoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_categories();
    t.crud.updateOneinv_categories();
    t.crud.upsertOneinv_categories();
    t.crud.deleteOneinv_categories();

    t.crud.updateManyinv_categories();
    t.crud.deleteManyinv_categories();
  },
});
