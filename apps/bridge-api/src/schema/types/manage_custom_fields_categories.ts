import { objectType, extendType } from 'nexus';

export const manage_custom_fields_categories = objectType({
  name: 'manage_custom_fields_categories',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.company_id();
  },
});

export const manage_custom_fields_categoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.manage_custom_fields_categories();
    t.crud.manage_custom_fields_categories({ filtering: true, ordering: true });
  },
});

export const manage_custom_fields_categoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemanage_custom_fields_categories();
    t.crud.updateOnemanage_custom_fields_categories();
    t.crud.upsertOnemanage_custom_fields_categories();
    t.crud.deleteOnemanage_custom_fields_categories();

    t.crud.updateManymanage_custom_fields_categories();
    t.crud.deleteManymanage_custom_fields_categories();
  },
});
