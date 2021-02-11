import { objectType, extendType } from 'nexus';

export const gift_card_types = objectType({
  name: 'gift_card_types',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.created_date();
    t.model.display_name();
    t.model.start_date();
    t.model.end_date();
    t.model.default_price();
    t.model.default_value();
    t.model.template_theme();
    t.model.is_active();
    t.model.description();
    t.model.terms();
  },
});

export const gift_card_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gift_card_types();
    t.crud.gift_card_types({ filtering: true, ordering: true });
  },
});

export const gift_card_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegift_card_types();
    t.crud.updateOnegift_card_types();
    t.crud.upsertOnegift_card_types();
    t.crud.deleteOnegift_card_types();

    t.crud.updateManygift_card_types();
    t.crud.deleteManygift_card_types();
  },
});
