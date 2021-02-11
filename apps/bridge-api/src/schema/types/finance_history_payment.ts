import { objectType, extendType } from 'nexus';

export const finance_history_payment = objectType({
  name: 'finance_history_payment',
  definition(t) {
    t.model.id();
    t.model.amount();
    t.model.payment_type_id();
    t.model.company_id();
    t.model.entry_date();
    t.model.finance_id();
    t.model.comments();
  },
});

export const finance_history_paymentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.finance_history_payment();
    t.crud.finance_history_payments({ filtering: true, ordering: true });
  },
});

export const finance_history_paymentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefinance_history_payment();
    t.crud.updateOnefinance_history_payment();
    t.crud.upsertOnefinance_history_payment();
    t.crud.deleteOnefinance_history_payment();

    t.crud.updateManyfinance_history_payment();
    t.crud.deleteManyfinance_history_payment();
  },
});
