import { objectType, extendType } from 'nexus';

export const cm_contact_alerts = objectType({
  name: 'cm_contact_alerts',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.ContactID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
    t.model.Critical();
    t.model.medical_conditions_id();
  },
});

export const cm_contact_alertsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_contact_alerts();
    t.crud.cm_contact_alerts({ filtering: true, ordering: true });
  },
});

export const cm_contact_alertsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_contact_alerts();
    t.crud.updateOnecm_contact_alerts();
    t.crud.upsertOnecm_contact_alerts();
    t.crud.deleteOnecm_contact_alerts();

    t.crud.updateManycm_contact_alerts();
    t.crud.deleteManycm_contact_alerts();
  },
});
