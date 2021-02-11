import { objectType, extendType } from 'nexus';

export const memberships = objectType({
  name: 'memberships',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.occupier();
    t.model.autopay_mode();
    t.model.payment_every();
    t.model.number_payments();
    t.model.CreatedDate();
    t.model.description();
    t.model.from_time();
    t.model.to_time();
  },
});

export const membershipsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.memberships();
    t.crud.memberships({ filtering: true, ordering: true });
  },
});

export const membershipsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnememberships();
    t.crud.updateOnememberships();
    t.crud.upsertOnememberships();
    t.crud.deleteOnememberships();

    t.crud.updateManymemberships();
    t.crud.deleteManymemberships();
  },
});
