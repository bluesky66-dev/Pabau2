import { objectType, extendType } from 'nexus';

export const ClasstypeMaster = objectType({
  name: 'ClasstypeMaster',
  definition(t) {
    t.model.ctype_id();
    t.model.ctype_name();
    t.model.ctype_compid();
    t.model.ctype_date();
    t.model.ctype_color();
    t.model.ctype_description();
    t.model.payment_option_disabled();
    t.model.credit_option_disabled();
  },
});

export const classtypeMasterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classtypeMaster();
    t.crud.classtypeMasters({ filtering: true, ordering: true });

    t.field('classtypeMastersCount', {
      type: 'Int',
      args: {
        where: 'ClasstypeMasterWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.classtypeMaster.count(args);
      },
    });
  },
});

export const classtypeMasterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClasstypeMaster();
    t.crud.updateOneClasstypeMaster();
    t.crud.upsertOneClasstypeMaster();
    t.crud.deleteOneClasstypeMaster();

    t.crud.updateManyClasstypeMaster();
    t.crud.deleteManyClasstypeMaster();
  },
});
