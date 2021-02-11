import { objectType, extendType } from 'nexus';

export const sms_stats = objectType({
  name: 'sms_stats',
  definition(t) {
    t.model.smss_id();
    t.model.smss_uid();
    t.model.smss_camp();
    t.model.smss_time();
    t.model.smss_count();
  },
});

export const sms_statsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_stats();
    t.crud.sms_stats({ filtering: true, ordering: true });
  },
});

export const sms_statsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_stats();
    t.crud.updateOnesms_stats();
    t.crud.upsertOnesms_stats();
    t.crud.deleteOnesms_stats();

    t.crud.updateManysms_stats();
    t.crud.deleteManysms_stats();
  },
});
