import { objectType, extendType } from 'nexus';

export const ac_log_actions = objectType({
  name: 'ac_log_actions',
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

export const ac_log_actionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ac_log_actions();
    t.crud.ac_log_actions({ filtering: true, ordering: true });
  },
});

export const ac_log_actionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneac_log_actions();
    t.crud.updateOneac_log_actions();
    t.crud.upsertOneac_log_actions();
    t.crud.deleteOneac_log_actions();

    t.crud.updateManyac_log_actions();
    t.crud.deleteManyac_log_actions();
  },
});
