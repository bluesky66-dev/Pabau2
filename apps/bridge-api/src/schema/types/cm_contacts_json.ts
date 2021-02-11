import { objectType, extendType } from 'nexus';

export const cm_contacts_json = objectType({
  name: 'cm_contacts_json',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.clients_json();
    t.model.date_updated();
  },
});

export const cm_contacts_jsonQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_json();
    t.crud.cm_contacts_jsons({ filtering: true, ordering: true });
  },
});

export const cm_contacts_jsonMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_json();
    t.crud.updateOnecm_contacts_json();
    t.crud.upsertOnecm_contacts_json();
    t.crud.deleteOnecm_contacts_json();

    t.crud.updateManycm_contacts_json();
    t.crud.deleteManycm_contacts_json();
  },
});
