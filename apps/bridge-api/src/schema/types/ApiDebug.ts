import { objectType, extendType } from 'nexus';

export const ApiDebug = objectType({
  name: 'ApiDebug',
  definition(t) {
    t.model.id();
    t.model.data_received();
    t.model.company_id();
    t.model.api_code();
    t.model.created_date();
    t.model.data_type();
  },
});

export const apiDebugQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.apiDebug();
    t.crud.apiDebugs({ filtering: true, ordering: true , pagination: true });

    t.field('apiDebugsCount', {
      type: 'Int',
      args: {
        where: 'ApiDebugWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.apiDebug.count(args);
      },
    });
  },
});

export const apiDebugMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneApiDebug();
    t.crud.updateOneApiDebug();
    t.crud.upsertOneApiDebug();
    t.crud.deleteOneApiDebug();

    t.crud.updateManyApiDebug();
    t.crud.deleteManyApiDebug();
  },
});
