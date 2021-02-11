import { objectType, extendType } from 'nexus';

export const credit_tracking = objectType({
  name: 'credit_tracking',
  definition(t) {
    t.model.ct_id();
    t.model.ct_uid();
    t.model.ct_amount();
    t.model.ct_date();
    t.model.ct_txid();
    t.model.status();
  },
});

export const credit_trackingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.credit_tracking();
    t.crud.credit_trackings({ filtering: true, ordering: true });
  },
});

export const credit_trackingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecredit_tracking();
    t.crud.updateOnecredit_tracking();
    t.crud.upsertOnecredit_tracking();
    t.crud.deleteOnecredit_tracking();

    t.crud.updateManycredit_tracking();
    t.crud.deleteManycredit_tracking();
  },
});
