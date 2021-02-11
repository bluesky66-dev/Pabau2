import { objectType, extendType } from 'nexus';

export const user_requests = objectType({
  name: 'user_requests',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.date();
    t.model.company();
    t.model.hash();
    t.model.job_title();
    t.model.department();
    t.model.division();
    t.model.template();
    t.model.admin();
    t.model.staff_manager();
    t.model.first_name();
    t.model.last_name();
  },
});

export const user_requestsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_requests();
    t.crud.user_requests({ filtering: true, ordering: true });
  },
});

export const user_requestsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_requests();
    t.crud.updateOneuser_requests();
    t.crud.upsertOneuser_requests();
    t.crud.deleteOneuser_requests();

    t.crud.updateManyuser_requests();
    t.crud.deleteManyuser_requests();
  },
});
