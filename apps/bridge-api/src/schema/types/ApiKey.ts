import { objectType, extendType } from 'nexus';

export const ApiKey = objectType({
  name: 'ApiKey',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.api_key();
    t.model.app_type();
    t.model.created_date();
    t.model.contacts();
    t.model.bookings();
    t.model.invoices();
    t.model.locations();
    t.model.services();
    t.model.staff();
    t.model.financials();
    t.model.leads();
    t.model.medical_forms();
    t.model.reports();
  },
});

export const apiKeyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.apiKey();
    t.crud.apiKeys({ filtering: true, ordering: true , pagination: true });

    t.field('apiKeysCount', {
      type: 'Int',
      args: {
        where: 'ApiKeyWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.apiKey.count(args);
      },
    });
  },
});

export const apiKeyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneApiKey();
    t.crud.updateOneApiKey();
    t.crud.upsertOneApiKey();
    t.crud.deleteOneApiKey();

    t.crud.updateManyApiKey();
    t.crud.deleteManyApiKey();
  },
});
