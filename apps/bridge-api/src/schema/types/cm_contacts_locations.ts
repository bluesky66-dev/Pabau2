import { objectType, extendType } from 'nexus';

export const cm_contacts_locations = objectType({
  name: 'cm_contacts_locations',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.location_id();
  },
});

export const cm_contacts_locationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_locations();
    t.crud.cm_contacts_locations({ filtering: true, ordering: true });
  },
});

export const cm_contacts_locationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_locations();
    t.crud.updateOnecm_contacts_locations();
    t.crud.upsertOnecm_contacts_locations();
    t.crud.deleteOnecm_contacts_locations();

    t.crud.updateManycm_contacts_locations();
    t.crud.deleteManycm_contacts_locations();
  },
});
