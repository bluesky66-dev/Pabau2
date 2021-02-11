import { objectType, extendType } from 'nexus';

export const mailchimp_api = objectType({
  name: 'mailchimp_api',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.api_key();
    t.model.email_type();
    t.model.status();
    t.model.autosync_list();
  },
});

export const mailchimp_apiQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.mailchimp_api();
    t.crud.mailchimp_apis({ filtering: true, ordering: true });
  },
});

export const mailchimp_apiMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemailchimp_api();
    t.crud.updateOnemailchimp_api();
    t.crud.upsertOnemailchimp_api();
    t.crud.deleteOnemailchimp_api();

    t.crud.updateManymailchimp_api();
    t.crud.deleteManymailchimp_api();
  },
});
