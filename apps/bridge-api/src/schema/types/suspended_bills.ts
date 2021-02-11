import { objectType, extendType } from 'nexus';

export const suspended_bills = objectType({
  name: 'suspended_bills',
  definition(t) {
    t.model.id();
    t.model.date();
    t.model.customer_id();
    t.model.count();
    t.model.tax1();
    t.model.tax2();
    t.model.total();
  },
});

export const suspended_billsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.suspended_bills();
    t.crud.suspended_bills({ filtering: true, ordering: true });
  },
});

export const suspended_billsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesuspended_bills();
    t.crud.updateOnesuspended_bills();
    t.crud.upsertOnesuspended_bills();
    t.crud.deleteOnesuspended_bills();

    t.crud.updateManysuspended_bills();
    t.crud.deleteManysuspended_bills();
  },
});
