import { objectType, extendType } from 'nexus';

export const class_categories = objectType({
  name: 'class_categories',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.name();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const class_categoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.class_categories();
    t.crud.class_categories({ filtering: true, ordering: true });
  },
});

export const class_categoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclass_categories();
    t.crud.updateOneclass_categories();
    t.crud.upsertOneclass_categories();
    t.crud.deleteOneclass_categories();

    t.crud.updateManyclass_categories();
    t.crud.deleteManyclass_categories();
  },
});
