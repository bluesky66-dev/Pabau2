import { objectType, extendType } from 'nexus';

export const user_reports = objectType({
  name: 'user_reports',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.report_id();
  },
});

export const user_reportsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_reports();
    t.crud.user_reports({ filtering: true, ordering: true });
  },
});

export const user_reportsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_reports();
    t.crud.updateOneuser_reports();
    t.crud.upsertOneuser_reports();
    t.crud.deleteOneuser_reports();

    t.crud.updateManyuser_reports();
    t.crud.deleteManyuser_reports();
  },
});
