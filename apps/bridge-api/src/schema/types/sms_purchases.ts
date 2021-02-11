import { objectType, extendType } from 'nexus';

export const sms_purchases = objectType({
  name: 'sms_purchases',
  definition(t) {
    t.model.id();
    t.model.date();
    t.model.sms_amount();
    t.model.cid();
    t.model.user();
    t.model.price();
    t.model.profit();
    t.model.purchase_type();
    t.model.status();
  },
});

export const sms_purchasesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_purchases();
    t.crud.sms_purchases({ filtering: true, ordering: true });
  },
});

export const sms_purchasesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_purchases();
    t.crud.updateOnesms_purchases();
    t.crud.upsertOnesms_purchases();
    t.crud.deleteOnesms_purchases();

    t.crud.updateManysms_purchases();
    t.crud.deleteManysms_purchases();
  },
});
