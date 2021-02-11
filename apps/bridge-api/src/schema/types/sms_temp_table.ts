import { objectType, extendType } from 'nexus';

export const sms_temp_table = objectType({
  name: 'sms_temp_table',
  definition(t) {
    t.model.id();
    t.model.mobile();
    t.model.company_id();
    t.model.sent_sms();
    t.model.status();
  },
});

export const sms_temp_tableQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_temp_table();
    t.crud.sms_temp_tables({ filtering: true, ordering: true });
  },
});

export const sms_temp_tableMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_temp_table();
    t.crud.updateOnesms_temp_table();
    t.crud.upsertOnesms_temp_table();
    t.crud.deleteOnesms_temp_table();

    t.crud.updateManysms_temp_table();
    t.crud.deleteManysms_temp_table();
  },
});
