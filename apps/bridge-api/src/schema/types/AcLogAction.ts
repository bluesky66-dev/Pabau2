import { objectType, extendType } from 'nexus';

export const AcLogAction = objectType({
  name: 'AcLogAction',
  definition(t) {
    t.model.id();
    t.model.pabauid();
    t.model.action_name();
    t.model.action_status();
    t.model.command();
    t.model.table_aff();
    t.model.row_aff();
    t.model.row_id();
  },
});

export const acLogActionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.acLogAction();
    t.crud.acLogActions({ filtering: true, ordering: true , pagination: true });

    t.field('acLogActionsCount', {
      type: 'Int',
      args: {
        where: 'AcLogActionWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.acLogAction.count(args);
      },
    });
  },
});

export const acLogActionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAcLogAction();
    t.crud.updateOneAcLogAction();
    t.crud.upsertOneAcLogAction();
    t.crud.deleteOneAcLogAction();

    t.crud.updateManyAcLogAction();
    t.crud.deleteManyAcLogAction();
  },
});
