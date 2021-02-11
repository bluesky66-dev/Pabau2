import { objectType, extendType } from 'nexus';

export const communication_log_email = objectType({
  name: 'communication_log_email',
  definition(t) {
    t.model.id();
    t.model.from_email_id();
    t.model.template_id();
    t.model.contact_id();
    t.model.company_id();
    t.model.sent_date();
    t.model.status();
  },
});

export const communication_log_emailQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communication_log_email();
    t.crud.communication_log_emails({ filtering: true, ordering: true });
  },
});

export const communication_log_emailMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunication_log_email();
    t.crud.updateOnecommunication_log_email();
    t.crud.upsertOnecommunication_log_email();
    t.crud.deleteOnecommunication_log_email();

    t.crud.updateManycommunication_log_email();
    t.crud.deleteManycommunication_log_email();
  },
});
