import { objectType, extendType } from 'nexus';

export const nws_send = objectType({
  name: 'nws_send',
  definition(t) {
    t.model.send_id();
    t.model.start_time();
    t.model.status();
    t.model.finish_time();
    t.model.newsletter_id();
    t.model.campaign_id();
    t.model.template_html();
    t.model.full_html();
    t.model.company();
  },
});

export const nws_sendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_send();
    t.crud.nws_sends({ filtering: true, ordering: true });
  },
});

export const nws_sendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_send();
    t.crud.updateOnenws_send();
    t.crud.upsertOnenws_send();
    t.crud.deleteOnenws_send();

    t.crud.updateManynws_send();
    t.crud.deleteManynws_send();
  },
});
