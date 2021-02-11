import { objectType, extendType } from 'nexus';

export const users_hours = objectType({
  name: 'users_hours',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.company_id();
    t.model.clock_in();
    t.model.clock_out();
  },
});

export const users_hoursQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.users_hours();
    t.crud.users_hours({ filtering: true, ordering: true });
  },
});

export const users_hoursMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneusers_hours();
    t.crud.updateOneusers_hours();
    t.crud.upsertOneusers_hours();
    t.crud.deleteOneusers_hours();

    t.crud.updateManyusers_hours();
    t.crud.deleteManyusers_hours();
  },
});
