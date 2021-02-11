import { objectType, extendType } from 'nexus';

export const scanner_cards = objectType({
  name: 'scanner_cards',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.card_number();
    t.model.date_created();
    t.model.date_activated();
    t.model.card_points();
    t.model.batch_id();
    t.model.validated();
    t.model.contact_id();
    t.model.category_card();
  },
});

export const scanner_cardsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.scanner_cards();
    t.crud.scanner_cards({ filtering: true, ordering: true });
  },
});

export const scanner_cardsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnescanner_cards();
    t.crud.updateOnescanner_cards();
    t.crud.upsertOnescanner_cards();
    t.crud.deleteOnescanner_cards();

    t.crud.updateManyscanner_cards();
    t.crud.deleteManyscanner_cards();
  },
});
