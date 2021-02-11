import { objectType, extendType } from 'nexus';

export const membership_contact = objectType({
  name: 'membership_contact',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.membership_id();
    t.model.invoice_id();
    t.model.activation_date();
    t.model.expiration_date();
    t.model.occupier();
    t.model.CreatedDate();
    t.model.LastUpdated();
    t.model.suspended();
    t.model.first_payment();
    t.model.UID();
  },
});

export const membership_contactQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.membership_contact();
    t.crud.membership_contacts({ filtering: true, ordering: true });
  },
});

export const membership_contactMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemembership_contact();
    t.crud.updateOnemembership_contact();
    t.crud.upsertOnemembership_contact();
    t.crud.deleteOnemembership_contact();

    t.crud.updateManymembership_contact();
    t.crud.deleteManymembership_contact();
  },
});
