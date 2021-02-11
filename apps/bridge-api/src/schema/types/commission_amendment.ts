import { objectType, extendType } from 'nexus';

export const commission_amendment = objectType({
  name: 'commission_amendment',
  definition(t) {
    t.model.id();
    t.model.partner_company_id();
    t.model.from_date();
    t.model.to_date();
    t.model.amount();
    t.model.description();
    t.model.company_id();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const commission_amendmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.commission_amendment();
    t.crud.commission_amendments({ filtering: true, ordering: true });
  },
});

export const commission_amendmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommission_amendment();
    t.crud.updateOnecommission_amendment();
    t.crud.upsertOnecommission_amendment();
    t.crud.deleteOnecommission_amendment();

    t.crud.updateManycommission_amendment();
    t.crud.deleteManycommission_amendment();
  },
});
