import { objectType, extendType } from 'nexus';

export const nws_member = objectType({
  name: 'nws_member',
  definition(t) {
    t.model.member_id();
    t.model.first_name();
    t.model.last_name();
    t.model.email();
    t.model.join_date();
    t.model.ip_address();
    t.model.unsubscribe_date();
    t.model.unsubscribe_send_id();
    t.model.company();
    t.model.temp();
    t.model.imported();
  },
});

export const nws_memberQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_member();
    t.crud.nws_members({ filtering: true, ordering: true });
  },
});

export const nws_memberMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_member();
    t.crud.updateOnenws_member();
    t.crud.upsertOnenws_member();
    t.crud.deleteOnenws_member();

    t.crud.updateManynws_member();
    t.crud.deleteManynws_member();
  },
});
