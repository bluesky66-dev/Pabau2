import { objectType, extendType } from 'nexus';

export const AcLog = objectType({
  name: 'AcLog',
  definition(t) {
    t.model.id();
    t.model.url_id();
    t.model.action_id();
    t.model.critical();
    t.model.occupier();
    t.model.user_id();
    t.model.date();
    t.model.humanize();
    t.model.user_agent();
    t.model.ipv4();
    t.model.row_aff();
    t.model.row_id();
    t.model.row_data();
  },
});

export const acLogQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.acLog();
    t.crud.acLogs({ filtering: true, ordering: true , pagination: true });

    t.field('acLogsCount', {
      type: 'Int',
      args: {
        where: 'AcLogWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.acLog.count(args);
      },
    });
  },
});

export const acLogMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAcLog();
    t.crud.updateOneAcLog();
    t.crud.upsertOneAcLog();
    t.crud.deleteOneAcLog();

    t.crud.updateManyAcLog();
    t.crud.deleteManyAcLog();
  },
});
