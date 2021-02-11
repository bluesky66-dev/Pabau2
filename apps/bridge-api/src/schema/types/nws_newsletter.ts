import { objectType, extendType } from 'nexus';

export const nws_newsletter = objectType({
  name: 'nws_newsletter',
  definition(t) {
    t.model.newsletter_id();
    t.model.create_date();
    t.model.template();
    t.model.subject();
    t.model.from_name();
    t.model.from_email();
    t.model.content();
    t.model.bounce_email();
    t.model.company();
    t.model.grroup_id();
    t.model.campaign_type();
    t.model.groups_recipients();
    t.model.sent_by();
    t.model.created_by();
    t.model.groups_prerecipients();
    t.model.campaign_status();
    t.model.send_date();
    t.model.finished_date();
    t.model.total_recips();
    t.model.body_content();
  },
});

export const nws_newsletterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nws_newsletter();
    t.crud.nws_newsletters({ filtering: true, ordering: true });
  },
});

export const nws_newsletterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenws_newsletter();
    t.crud.updateOnenws_newsletter();
    t.crud.upsertOnenws_newsletter();
    t.crud.deleteOnenws_newsletter();

    t.crud.updateManynws_newsletter();
    t.crud.deleteManynws_newsletter();
  },
});
