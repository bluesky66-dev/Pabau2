import { objectType, extendType } from 'nexus';

export const petty_cash_types = objectType({
  name: 'petty_cash_types',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.company_id();
    t.model.default_price();
    t.model.is_active();
  },
});

export const petty_cash_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.petty_cash_types();
    t.crud.petty_cash_types({ filtering: true, ordering: true });
  },
});

export const petty_cash_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepetty_cash_types();
    t.crud.updateOnepetty_cash_types();
    t.crud.upsertOnepetty_cash_types();
    t.crud.deleteOnepetty_cash_types();

    t.crud.updateManypetty_cash_types();
    t.crud.deleteManypetty_cash_types();
  },
});
