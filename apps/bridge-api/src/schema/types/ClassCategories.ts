import { objectType, extendType } from 'nexus';

export const ClassCategories = objectType({
  name: 'ClassCategories',
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

export const classCategoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classCategories();
    t.crud.classCategories({ filtering: true, ordering: true });

    t.field('classCategoriesCount', {
      type: 'Int',
      args: {
        where: 'ClassCategoriesWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.classCategories.count(args);
      },
    });
  },
});

export const classCategoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClassCategories();
    t.crud.updateOneClassCategories();
    t.crud.upsertOneClassCategories();
    t.crud.deleteOneClassCategories();

    t.crud.updateManyClassCategories();
    t.crud.deleteManyClassCategories();
  },
});
