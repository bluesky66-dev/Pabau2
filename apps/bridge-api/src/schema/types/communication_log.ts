import { objectType, extendType } from 'nexus';

export const communication_log = objectType({
  name: 'communication_log',
  definition(t) {
    t.model.id();
    t.model.status();
    t.model.subject();
    t.model.sentby();
    t.model.source();
    t.model.to();
    t.model.companyid();
    t.model.email_by();
    t.model.message();
    t.model.date();
    t.model.communication_type();
    t.model.contact_id();
    t.model.site_section();
    t.model.custom_id();
    t.model.contact_custom_id();
    t.model.imported();
    t.model.Practitioner_id();
    t.model.User_id();
    t.model.email_read();
    t.model.result_log();
    t.model.template_id();
    t.model.header();
    t.model.footer();
    t.model.sms_delivery_status();
    t.model.mandrill_email_id();
    t.model.mandril_status();
    t.model.sensitive_data();
    t.model.cc();
    t.model.booking_id();
  },
});

export const communication_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communication_log();
    t.crud.communication_logs({ filtering: true, ordering: true });
  },
});

export const communication_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunication_log();
    t.crud.updateOnecommunication_log();
    t.crud.upsertOnecommunication_log();
    t.crud.deleteOnecommunication_log();

    t.crud.updateManycommunication_log();
    t.crud.deleteManycommunication_log();
  },
});
