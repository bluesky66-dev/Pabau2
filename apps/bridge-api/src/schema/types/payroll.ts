import { objectType, extendType } from 'nexus';

export const payroll = objectType({
  name: 'payroll',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.period_type();
    t.model.period_from();
    t.model.period_to();
    t.model.position();
    t.model.locations();
    t.model.total_hours();
    t.model.wage_pay();
    t.model.salary_pay();
    t.model.commission_pay();
    t.model.total_pay();
    t.model.created_by();
    t.model.created_date();
    t.model.employees();
    t.model.invoice_ids();
    t.model.pending_invoice_ids();
    t.model.finance_ids();
  },
});

export const payrollQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.payroll();
    t.crud.payrolls({ filtering: true, ordering: true });
  },
});

export const payrollMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepayroll();
    t.crud.updateOnepayroll();
    t.crud.upsertOnepayroll();
    t.crud.deleteOnepayroll();

    t.crud.updateManypayroll();
    t.crud.deleteManypayroll();
  },
});
