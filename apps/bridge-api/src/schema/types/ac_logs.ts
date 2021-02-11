import { objectType, extendType } from 'nexus';

export const ac_logs = objectType({
  name: 'ac_logs',
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

export const ac_logsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ac_logs();
    t.crud.ac_logs({ filtering: true, ordering: true });
  },
});

export const ac_logsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneac_logs();
    t.crud.updateOneac_logs();
    t.crud.upsertOneac_logs();
    t.crud.deleteOneac_logs();

    t.crud.updateManyac_logs();
    t.crud.deleteManyac_logs();
  },
});
