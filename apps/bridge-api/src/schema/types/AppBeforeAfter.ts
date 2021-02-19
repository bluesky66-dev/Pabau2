import { objectType, extendType } from 'nexus';

export const AppBeforeAfter = objectType({
  name: 'AppBeforeAfter',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.before_img();
    t.model.after_img();
    t.model.pass_key();
  },
});

export const appBeforeAfterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.appBeforeAfter();
    t.crud.appBeforeAfters({ filtering: true, ordering: true , pagination: true });

    t.field('appBeforeAftersCount', {
      type: 'Int',
      args: {
        where: 'AppBeforeAfterWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.appBeforeAfter.count(args);
      },
    });
  },
});

export const appBeforeAfterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAppBeforeAfter();
    t.crud.updateOneAppBeforeAfter();
    t.crud.upsertOneAppBeforeAfter();
    t.crud.deleteOneAppBeforeAfter();

    t.crud.updateManyAppBeforeAfter();
    t.crud.deleteManyAppBeforeAfter();
  },
});
