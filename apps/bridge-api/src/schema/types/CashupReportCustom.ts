import { objectType, extendType } from 'nexus';

export const CashupReportCustom = objectType({
  name: 'CashupReportCustom',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.location_id();
    t.model.cashup_date();
    t.model.custom_type();
    t.model.custom_amount();
    t.model.custom_actual();
    t.model.custom_difference();
    t.model.card_type();
  },
});

export const cashupReportCustomQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cashupReportCustom();
    t.crud.cashupReportCustoms({ filtering: true, ordering: true });

    t.field('cashupReportCustomsCount', {
      type: 'Int',
      args: {
        where: 'CashupReportCustomWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cashupReportCustom.count(args);
      },
    });
  },
});

export const cashupReportCustomMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCashupReportCustom();
    t.crud.updateOneCashupReportCustom();
    t.crud.upsertOneCashupReportCustom();
    t.crud.deleteOneCashupReportCustom();

    t.crud.updateManyCashupReportCustom();
    t.crud.deleteManyCashupReportCustom();
  },
});
