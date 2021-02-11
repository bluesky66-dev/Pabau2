import { objectType, extendType } from 'nexus';

export const payments = objectType({
  name: 'payments',
  definition(t) {
    t.model.id();
    t.model.from();
    t.model.date();
    t.model.amount();
    t.model.invoice();
    t.model.pmethod();
    t.model.occupier();
  },
});

export const paymentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.payments();
    t.crud.payments({ filtering: true, ordering: true });
  },
});

export const paymentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepayments();
    t.crud.updateOnepayments();
    t.crud.upsertOnepayments();
    t.crud.deleteOnepayments();

    t.crud.updateManypayments();
    t.crud.deleteManypayments();
  },
});
