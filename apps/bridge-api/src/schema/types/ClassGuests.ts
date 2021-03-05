import { objectType, extendType } from 'nexus';

export const ClassGuests = objectType({
  name: 'ClassGuests',
  definition(t) {
    t.model.id();
    t.model.guest_name();
    t.model.signing_date();
    t.model.class_id();
    t.model.company_id();
    t.model.cancel_status();
    t.model.mobile();
  },
});

export const classGuestsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classGuests();
    t.crud.classGuests({ filtering: true, ordering: true });

    t.field('classGuestsCount', {
      type: 'Int',
      args: {
        where: 'ClassGuestsWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.classGuests.count(args);
      },
    });
  },
});

export const classGuestsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClassGuests();
    t.crud.updateOneClassGuests();
    t.crud.upsertOneClassGuests();
    t.crud.deleteOneClassGuests();

    t.crud.updateManyClassGuests();
    t.crud.deleteManyClassGuests();
  },
});
