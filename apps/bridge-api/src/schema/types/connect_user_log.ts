import { objectType, extendType } from 'nexus';

export const connect_user_log = objectType({
  name: 'connect_user_log',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.date();
    t.model.company_id();
    t.model.ip_address();
  },
});

export const connect_user_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.connect_user_log();
    t.crud.connect_user_logs({ filtering: true, ordering: true });
  },
});

export const connect_user_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconnect_user_log();
    t.crud.updateOneconnect_user_log();
    t.crud.upsertOneconnect_user_log();
    t.crud.deleteOneconnect_user_log();

    t.crud.updateManyconnect_user_log();
    t.crud.deleteManyconnect_user_log();
  },
});
