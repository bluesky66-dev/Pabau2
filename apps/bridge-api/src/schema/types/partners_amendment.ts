import { objectType, extendType } from 'nexus';

export const partners_amendment = objectType({
  name: 'partners_amendment',
  definition(t) {
    t.model.id();
    t.model.partner_id();
    t.model.amount();
    t.model.from_date();
    t.model.to_date();
  },
});

export const partners_amendmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.partners_amendment();
    t.crud.partners_amendments({ filtering: true, ordering: true });
  },
});

export const partners_amendmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepartners_amendment();
    t.crud.updateOnepartners_amendment();
    t.crud.upsertOnepartners_amendment();
    t.crud.deleteOnepartners_amendment();

    t.crud.updateManypartners_amendment();
    t.crud.deleteManypartners_amendment();
  },
});
