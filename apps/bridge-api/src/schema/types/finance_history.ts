import { objectType, extendType } from 'nexus';

export const finance_history = objectType({
  name: 'finance_history',
  definition(t) {
    t.model.FinanceID();
    t.model.user_id();
    t.model.Record_Type();
    t.model.Date();
    t.model.Linked_Document();
    t.model.Reference();
    t.model.Amount();
    t.model.Company();
    t.model.tax_id();
    t.model.status();
    t.model.invoice_id();
    t.model.commission_sheet_id();
    t.model.staff_id();
    t.model.account_id();
    t.model.debtor();
    t.model.who_expense();
    t.model.what_expense();
    t.model.location_id();
    t.model.bank_ref();
    t.model.comments();
    t.model.matched_with();
    t.model.dispute_flag();
  },
});

export const finance_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.finance_history();
    t.crud.finance_histories({ filtering: true, ordering: true });
  },
});

export const finance_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefinance_history();
    t.crud.updateOnefinance_history();
    t.crud.upsertOnefinance_history();
    t.crud.deleteOnefinance_history();

    t.crud.updateManyfinance_history();
    t.crud.deleteManyfinance_history();
  },
});
