import { objectType, extendType } from 'nexus';

export const connect_general = objectType({
  name: 'connect_general',
  definition(t) {
    t.model.id();
    t.model.username();
    t.model.advance();
    t.model.notify();
    t.model.login();
    t.model.employee();
    t.model.date();
    t.model.occupier();
    t.model.paypal_address();
    t.model.paypal_currency();
    t.model.template_id();
    t.model.from_email();
    t.model.payment_api_url();
    t.model.signature();
    t.model.service_order();
    t.model.sms_template_id();
    t.model.enable_email_notification();
    t.model.enable_sms_notification();
    t.model.password_template_id();
    t.model.client_template_id();
  },
});

export const connect_generalQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.connect_general();
    t.crud.connect_generals({ filtering: true, ordering: true });
  },
});

export const connect_generalMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconnect_general();
    t.crud.updateOneconnect_general();
    t.crud.upsertOneconnect_general();
    t.crud.deleteOneconnect_general();

    t.crud.updateManyconnect_general();
    t.crud.deleteManyconnect_general();
  },
});
