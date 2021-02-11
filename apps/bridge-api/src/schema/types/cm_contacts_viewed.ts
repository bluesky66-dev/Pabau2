import { objectType, extendType } from 'nexus';

export const cm_contacts_viewed = objectType({
  name: 'cm_contacts_viewed',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.user_id();
    t.model.occupier();
    t.model.date();
  },
});

export const cm_contacts_viewedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_viewed();
    t.crud.cm_contacts_vieweds({ filtering: true, ordering: true });
  },
});

export const cm_contacts_viewedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_viewed();
    t.crud.updateOnecm_contacts_viewed();
    t.crud.upsertOnecm_contacts_viewed();
    t.crud.deleteOnecm_contacts_viewed();

    t.crud.updateManycm_contacts_viewed();
    t.crud.deleteManycm_contacts_viewed();
  },
});
