import { objectType, extendType } from 'nexus';

export const cm_voucher_history = objectType({
  name: 'cm_voucher_history',
  definition(t) {
    t.model.id();
    t.model.voucher_id();
    t.model.amount_used();
    t.model.sale_id();
  },
});

export const cm_voucher_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_voucher_history();
    t.crud.cm_voucher_histories({ filtering: true, ordering: true });
  },
});

export const cm_voucher_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_voucher_history();
    t.crud.updateOnecm_voucher_history();
    t.crud.upsertOnecm_voucher_history();
    t.crud.deleteOnecm_voucher_history();

    t.crud.updateManycm_voucher_history();
    t.crud.deleteManycm_voucher_history();
  },
});
