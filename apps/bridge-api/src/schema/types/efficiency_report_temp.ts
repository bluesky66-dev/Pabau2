import { objectType, extendType } from 'nexus';

export const efficiency_report_temp = objectType({
  name: 'efficiency_report_temp',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.uid();
    t.model.uname();
    t.model.date();
    t.model.total_time();
    t.model.work_start();
    t.model.customers_total();
    t.model.customers_9_10();
    t.model.customers_10_11();
    t.model.customers_11_12();
    t.model.customers_12_13();
    t.model.customers_13_14();
    t.model.customers_14_15();
    t.model.customers_15_16();
    t.model.customers_16_17();
    t.model.customers_17_18();
    t.model.customers_18_19();
    t.model.break_9_10();
    t.model.break_10_11();
    t.model.break_11_12();
    t.model.break_12_13();
    t.model.break_13_14();
    t.model.break_14_15();
    t.model.break_15_16();
    t.model.break_16_17();
    t.model.break_17_18();
    t.model.break_18_19();
    t.model.idle_9_10();
    t.model.idle_10_11();
    t.model.idle_11_12();
    t.model.idle_12_13();
    t.model.idle_13_14();
    t.model.idle_14_15();
    t.model.idle_15_16();
    t.model.idle_16_17();
    t.model.idle_17_18();
    t.model.idle_18_19();
    t.model.avail_9_10();
    t.model.avail_10_11();
    t.model.avail_11_12();
    t.model.avail_12_13();
    t.model.avail_13_14();
    t.model.avail_14_15();
    t.model.avail_15_16();
    t.model.avail_16_17();
    t.model.avail_17_18();
    t.model.avail_18_19();
    t.model.work_9_10();
    t.model.work_10_11();
    t.model.work_11_12();
    t.model.work_12_13();
    t.model.work_13_14();
    t.model.work_14_15();
    t.model.work_15_16();
    t.model.work_16_17();
    t.model.work_17_18();
    t.model.work_18_19();
    t.model.late_9_10();
    t.model.late_10_11();
    t.model.late_11_12();
    t.model.late_12_13();
    t.model.late_13_14();
    t.model.late_14_15();
    t.model.late_15_16();
    t.model.late_16_17();
    t.model.late_17_18();
    t.model.late_18_19();
  },
});

export const efficiency_report_tempQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.efficiency_report_temp();
    t.crud.efficiency_report_temps({ filtering: true, ordering: true });
  },
});

export const efficiency_report_tempMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneefficiency_report_temp();
    t.crud.updateOneefficiency_report_temp();
    t.crud.upsertOneefficiency_report_temp();
    t.crud.deleteOneefficiency_report_temp();

    t.crud.updateManyefficiency_report_temp();
    t.crud.deleteManyefficiency_report_temp();
  },
});
