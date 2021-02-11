import { objectType, extendType } from 'nexus';

export const cm_contacts_search = objectType({
  name: 'cm_contacts_search',
  definition(t) {
    t.model.id();
    t.model.string();
    t.model.company();
    t.model.result();
  },
});

export const cm_contacts_searchQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_search();
    t.crud.cm_contacts_searches({ filtering: true, ordering: true });
  },
});

export const cm_contacts_searchMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_search();
    t.crud.updateOnecm_contacts_search();
    t.crud.upsertOnecm_contacts_search();
    t.crud.deleteOnecm_contacts_search();

    t.crud.updateManycm_contacts_search();
    t.crud.deleteManycm_contacts_search();
  },
});
