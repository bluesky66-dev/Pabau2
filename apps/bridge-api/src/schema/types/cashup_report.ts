import { objectType, extendType } from 'nexus';

export const cashup_report = objectType({
  name: 'cashup_report',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.staff_id();
    t.model.location_id();
    t.model.float_amount();
    t.model.opening_balance();
    t.model.cash_amount();
    t.model.cash_actual();
    t.model.cash_difference();
    t.model.cheque_amount();
    t.model.cheque_actual();
    t.model.cheque_difference();
    t.model.card_amount();
    t.model.card_actual();
    t.model.card_difference();
    t.model.giftvoucher_amount();
    t.model.giftvoucher_actual();
    t.model.giftvoucher_difference();
    t.model.comments();
    t.model.cashup_date();
    t.model.finance_id();
  },
});

export const cashup_reportQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cashup_report();
    t.crud.cashup_reports({ filtering: true, ordering: true });
  },
});

export const cashup_reportMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecashup_report();
    t.crud.updateOnecashup_report();
    t.crud.upsertOnecashup_report();
    t.crud.deleteOnecashup_report();

    t.crud.updateManycashup_report();
    t.crud.deleteManycashup_report();
  },
});
