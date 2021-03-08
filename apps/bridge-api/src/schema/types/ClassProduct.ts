import { objectType, extendType } from 'nexus';

export const ClassProduct = objectType({
  name: 'ClassProduct',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.name();
    t.model.unit();
    t.model.size();
    t.model.product_order();
    t.model.um();
    t.model.cost();
    t.model.price();
    t.model.alert_quantity();
    t.model.image();
    t.model.category_id();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.product_desc();
  },
});

export const classProductQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classProduct();
    t.crud.classProducts({ filtering: true, ordering: true });

    t.field('classProductsCount', {
      type: 'Int',
      args: {
        where: 'ClassProductWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.classProduct.count(args);
      },
    });
  },
});

export const classProductMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClassProduct();
    t.crud.updateOneClassProduct();
    t.crud.upsertOneClassProduct();
    t.crud.deleteOneClassProduct();

    t.crud.updateManyClassProduct();
    t.crud.deleteManyClassProduct();
  },
});
