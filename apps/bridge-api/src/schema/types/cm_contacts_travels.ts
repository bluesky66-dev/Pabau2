import { objectType, extendType } from 'nexus';

export const cm_contacts_travels = objectType({
  name: 'cm_contacts_travels',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.country_id();
    t.model.start_date();
    t.model.end_date();
    t.model.company_id();
    t.model.duration();
    t.model.mode();
    t.model.uid();
    t.model.medical_record_id();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const cm_contacts_travelsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contacts_travels();
    t.crud.cm_contacts_travels({ filtering: true, ordering: true });
  },
});

export const cm_contacts_travelsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contacts_travels();
    t.crud.updateOnecm_contacts_travels();
    t.crud.upsertOnecm_contacts_travels();
    t.crud.deleteOnecm_contacts_travels();

    t.crud.updateManycm_contacts_travels();
    t.crud.deleteManycm_contacts_travels();
  },
});
