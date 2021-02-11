import { objectType, extendType } from 'nexus';

export const message_templates_services = objectType({
  name: 'message_templates_services',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.template_id();
    t.model.service_id();
  },
});

export const message_templates_servicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.message_templates_services();
    t.crud.message_templates_services({ filtering: true, ordering: true });
  },
});

export const message_templates_servicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemessage_templates_services();
    t.crud.updateOnemessage_templates_services();
    t.crud.upsertOnemessage_templates_services();
    t.crud.deleteOnemessage_templates_services();

    t.crud.updateManymessage_templates_services();
    t.crud.deleteManymessage_templates_services();
  },
});
