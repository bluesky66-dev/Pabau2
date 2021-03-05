import { objectType, extendType } from 'nexus';

export const BookmarkedPage = objectType({
  name: 'BookmarkedPage',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.link();
    t.model.companyid();
    t.model.title();
    t.model.icon();
  },
});

export const bookmarkedPageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bookmarkedPage();
    t.crud.bookmarkedPages({ filtering: true, ordering: true });

    t.field('bookmarkedPagesCount', {
      type: 'Int',
      args: {
        where: 'BookmarkedPageWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bookmarkedPage.count(args);
      },
    });
  },
});

export const bookmarkedPageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBookmarkedPage();
    t.crud.updateOneBookmarkedPage();
    t.crud.upsertOneBookmarkedPage();
    t.crud.deleteOneBookmarkedPage();

    t.crud.updateManyBookmarkedPage();
    t.crud.deleteManyBookmarkedPage();
  },
});
