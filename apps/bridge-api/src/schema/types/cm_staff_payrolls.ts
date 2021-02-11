import { objectType, extendType } from 'nexus';

export const cm_staff_payrolls = objectType({
  name: 'cm_staff_payrolls',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.StartDate();
    t.model.Transaction();
    t.model.TransactionRate();
    t.model.TransactionTime();
    t.model.Note();
    t.model.PostedBy();
    t.model.NewBalance();
    t.model.AccountType();
    t.model.LengthOfAbsence();
    t.model.LengthOfAbsenceVal();
  },
});

export const cm_staff_payrollsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_payrolls();
    t.crud.cm_staff_payrolls({ filtering: true, ordering: true });
  },
});

export const cm_staff_payrollsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_payrolls();
    t.crud.updateOnecm_staff_payrolls();
    t.crud.upsertOnecm_staff_payrolls();
    t.crud.deleteOnecm_staff_payrolls();

    t.crud.updateManycm_staff_payrolls();
    t.crud.deleteManycm_staff_payrolls();
  },
});
