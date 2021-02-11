import { objectType, extendType } from 'nexus';

export const nws_newsletter_member = objectType({
  name: 'nws_newsletter_member',
  definition(t) {
    t.model.id();
    t.model.send_id();
    t.model.member_id();
    t.model.sent_time();
    t.model.status();
    t.model.open_time();
    t.model.click_time();
    t.model.bounce_time();
    t.model.company();
    t.model.newsletter_id();
    t.model.communication_log_id();
    t.model.mandrill_id();
  },
});

export const nws_newsletter_memberQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_newsletter_member();
    t.crud.nws_newsletter_members({ filtering: true, ordering: true });
  },
});

export const nws_newsletter_memberMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_newsletter_member();
    t.crud.updateOnenws_newsletter_member();
    t.crud.upsertOnenws_newsletter_member();
    t.crud.deleteOnenws_newsletter_member();

    t.crud.updateManynws_newsletter_member();
    t.crud.deleteManynws_newsletter_member();
  },
});
