import { objectType, extendType } from 'nexus';

export const connect_stats = objectType({
  name: 'connect_stats',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.user_id();
    t.model.date();
    t.model.ip_address();
    t.model.step_location();
    t.model.step_service();
    t.model.step_employee();
    t.model.step_date();
    t.model.step_login();
    t.model.converted();
  },
});

export const connect_statsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.connect_stats();
    t.crud.connect_stats({ filtering: true, ordering: true });
  },
});

export const connect_statsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconnect_stats();
    t.crud.updateOneconnect_stats();
    t.crud.upsertOneconnect_stats();
    t.crud.deleteOneconnect_stats();

    t.crud.updateManyconnect_stats();
    t.crud.deleteManyconnect_stats();
  },
});
