import { objectType, extendType } from 'nexus';

export const trusted_browser = objectType({
  name: 'trusted_browser',
  definition(t) {
    t.model.id();
    t.model.browser_stamp();
    t.model.country();
    t.model.region();
    t.model.city();
    t.model.ip_address();
    t.model.company_id();
    t.model.created_on();
    t.model.user_id();
    t.model.is_authorized();
    t.model.authorization_hash();
    t.model.is_admin();
  },
});

export const trusted_browserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.trusted_browser();
    t.crud.trusted_browsers({ filtering: true, ordering: true });
  },
});

export const trusted_browserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetrusted_browser();
    t.crud.updateOnetrusted_browser();
    t.crud.upsertOnetrusted_browser();
    t.crud.deleteOnetrusted_browser();

    t.crud.updateManytrusted_browser();
    t.crud.deleteManytrusted_browser();
  },
});
