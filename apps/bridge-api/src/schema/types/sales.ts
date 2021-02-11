import { objectType, extendType } from 'nexus';

export const sales = objectType({
  name: 'sales',
  definition(t) {
    t.model.id();
    t.model.seller();
    t.model.date();
    t.model.tickets_dispensed();
    t.model.tickets_returned();
    t.model.paid_by();
  },
});

export const salesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sales();
    t.crud.sales({ filtering: true, ordering: true });
  },
});

export const salesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesales();
    t.crud.updateOnesales();
    t.crud.upsertOnesales();
    t.crud.deleteOnesales();

    t.crud.updateManysales();
    t.crud.deleteManysales();
  },
});
