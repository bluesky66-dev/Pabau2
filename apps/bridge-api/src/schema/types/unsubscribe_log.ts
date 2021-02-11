import { objectType, extendType } from 'nexus';

export const unsubscribe_log = objectType({
  name: 'unsubscribe_log',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.company_id();
    t.model.activity();
    t.model.activity_date();
    t.model.sub_status();
    t.model.contact_id_type();
    t.model.email();
  },
});

export const unsubscribe_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.unsubscribe_log();
    t.crud.unsubscribe_logs({ filtering: true, ordering: true });
  },
});

export const unsubscribe_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneunsubscribe_log();
    t.crud.updateOneunsubscribe_log();
    t.crud.upsertOneunsubscribe_log();
    t.crud.deleteOneunsubscribe_log();

    t.crud.updateManyunsubscribe_log();
    t.crud.deleteManyunsubscribe_log();
  },
});
