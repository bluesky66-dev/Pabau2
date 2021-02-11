import { objectType, extendType } from 'nexus';

export const seller_pay = objectType({
  name: 'seller_pay',
  definition(t) {
    t.model.id();
    t.model.visible();
    t.model.uid();
    t.model.amount();
    t.model.timestampe();
  },
});

export const seller_payQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.seller_pay();
    t.crud.seller_pays({ filtering: true, ordering: true });
  },
});

export const seller_payMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneseller_pay();
    t.crud.updateOneseller_pay();
    t.crud.upsertOneseller_pay();
    t.crud.deleteOneseller_pay();

    t.crud.updateManyseller_pay();
    t.crud.deleteManyseller_pay();
  },
});
