import { objectType, extendType } from 'nexus';

export const hourly_report_temp = objectType({
  name: 'hourly_report_temp',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.uid();
    t.model.uname();
    t.model.date();
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
    t.model.haircuts_total();
    t.model.haircuts_9_10();
    t.model.haircuts_10_11();
    t.model.haircuts_11_12();
    t.model.haircuts_12_13();
    t.model.haircuts_13_14();
    t.model.haircuts_14_15();
    t.model.haircuts_15_16();
    t.model.haircuts_16_17();
    t.model.haircuts_17_18();
    t.model.haircuts_18_19();
    t.model.haircuts_p_total();
    t.model.haircuts_p_9_10();
    t.model.haircuts_p_10_11();
    t.model.haircuts_p_11_12();
    t.model.haircuts_p_12_13();
    t.model.haircuts_p_13_14();
    t.model.haircuts_p_14_15();
    t.model.haircuts_p_15_16();
    t.model.haircuts_p_16_17();
    t.model.haircuts_p_17_18();
    t.model.haircuts_p_18_19();
    t.model.shaves_total();
    t.model.shaves_9_10();
    t.model.shaves_10_11();
    t.model.shaves_11_12();
    t.model.shaves_12_13();
    t.model.shaves_13_14();
    t.model.shaves_14_15();
    t.model.shaves_15_16();
    t.model.shaves_16_17();
    t.model.shaves_17_18();
    t.model.shaves_18_19();
    t.model.beards_total();
    t.model.beards_9_10();
    t.model.beards_10_11();
    t.model.beards_11_12();
    t.model.beards_12_13();
    t.model.beards_13_14();
    t.model.beards_14_15();
    t.model.beards_15_16();
    t.model.beards_16_17();
    t.model.beards_17_18();
    t.model.beards_18_19();
    t.model.avg_wait_time_9_10();
    t.model.avg_wait_time_10_11();
    t.model.avg_wait_time_11_12();
    t.model.avg_wait_time_12_13();
    t.model.avg_wait_time_13_14();
    t.model.avg_wait_time_14_15();
    t.model.avg_wait_time_15_16();
    t.model.avg_wait_time_16_17();
    t.model.avg_wait_time_17_18();
    t.model.avg_wait_time_18_19();
    t.model.revenue_total();
    t.model.revenue_9_10();
    t.model.revenue_10_11();
    t.model.revenue_11_12();
    t.model.revenue_12_13();
    t.model.revenue_13_14();
    t.model.revenue_14_15();
    t.model.revenue_15_16();
    t.model.revenue_16_17();
    t.model.revenue_17_18();
    t.model.revenue_18_19();
  },
});

export const hourly_report_tempQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.hourly_report_temp();
    t.crud.hourly_report_temps({ filtering: true, ordering: true });
  },
});

export const hourly_report_tempMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnehourly_report_temp();
    t.crud.updateOnehourly_report_temp();
    t.crud.upsertOnehourly_report_temp();
    t.crud.deleteOnehourly_report_temp();

    t.crud.updateManyhourly_report_temp();
    t.crud.deleteManyhourly_report_temp();
  },
});
