import { objectType, extendType } from 'nexus';

export const CashupReport = objectType({
  name: 'CashupReport',
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

export const cashupReportQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cashupReport();
    t.crud.cashupReports({ filtering: true, ordering: true });

    t.field('cashupReportsCount', {
      type: 'Int',
      args: {
        where: 'CashupReportWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cashupReport.count(args);
      },
    });
  },
});

export const cashupReportMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCashupReport();
    t.crud.updateOneCashupReport();
    t.crud.upsertOneCashupReport();
    t.crud.deleteOneCashupReport();

    t.crud.updateManyCashupReport();
    t.crud.deleteManyCashupReport();
  },
});
