import { objectType, extendType } from 'nexus';

export const zimport_newsletter_member = objectType({
  name: 'zimport_newsletter_member',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.date();
    t.model.email();
    t.model.subject();
    t.model.opens();
    t.model.added();
    t.model.newsletter_id();
  },
});

export const zimport_newsletter_memberQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_newsletter_member();
    t.crud.zimport_newsletter_members({ filtering: true, ordering: true });
  },
});

export const zimport_newsletter_memberMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_newsletter_member();
    t.crud.updateOnezimport_newsletter_member();
    t.crud.upsertOnezimport_newsletter_member();
    t.crud.deleteOnezimport_newsletter_member();

    t.crud.updateManyzimport_newsletter_member();
    t.crud.deleteManyzimport_newsletter_member();
  },
});
