import { objectType, extendType } from 'nexus';

export const webhook_integration = objectType({
  name: 'webhook_integration',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.webhook_url();
    t.model.module();
  },
});

export const webhook_integrationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.webhook_integration();
    t.crud.webhook_integrations({ filtering: true, ordering: true });
  },
});

export const webhook_integrationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewebhook_integration();
    t.crud.updateOnewebhook_integration();
    t.crud.upsertOnewebhook_integration();
    t.crud.deleteOnewebhook_integration();

    t.crud.updateManywebhook_integration();
    t.crud.deleteManywebhook_integration();
  },
});
