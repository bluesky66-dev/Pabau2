import { objectType, extendType } from 'nexus';

export const CalRangeRequest = objectType({
  name: 'CalRangeRequest',
  definition(t) {
    t.model.id();
    t.model.minutes();
    t.model.company_id();
    t.model.start_date();
    t.model.end_date();
  },
});

export const calRangeRequestQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.calRangeRequest();
    t.crud.calRangeRequests({ filtering: true, ordering: true });

    t.field('calRangeRequestsCount', {
      type: 'Int',
      args: {
        where: 'CalRangeRequestWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.calRangeRequest.count(args);
      },
    });
  },
});

export const calRangeRequestMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCalRangeRequest();
    t.crud.updateOneCalRangeRequest();
    t.crud.upsertOneCalRangeRequest();
    t.crud.deleteOneCalRangeRequest();

    t.crud.updateManyCalRangeRequest();
    t.crud.deleteManyCalRangeRequest();
  },
});
