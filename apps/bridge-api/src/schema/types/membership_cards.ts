import { objectType, extendType } from 'nexus';

export const membership_cards = objectType({
  name: 'membership_cards',
  definition(t) {
    t.model.memberid();
    t.model.details_id();
  },
});

export const membership_cardsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.membership_cards();
    t.crud.membership_cards({ filtering: true, ordering: true });
  },
});

export const membership_cardsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemembership_cards();
    t.crud.updateOnemembership_cards();
    t.crud.upsertOnemembership_cards();
    t.crud.deleteOnemembership_cards();

    t.crud.updateManymembership_cards();
    t.crud.deleteManymembership_cards();
  },
});
