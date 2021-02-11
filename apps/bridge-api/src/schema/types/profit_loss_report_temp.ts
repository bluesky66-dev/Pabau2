import { objectType, extendType } from 'nexus';

export const profit_loss_report_temp = objectType({
  name: 'profit_loss_report_temp',
  definition(t) {
    t.model.id();
    t.model.weekdate();
    t.model.company_id();
    t.model.uid();
    t.model.staffId();
    t.model.employee();
    t.model.Sunday_Cost_Net();
    t.model.Sunday_Cost_Gross();
    t.model.Sunday_hours();
    t.model.Monday_Cost_Net();
    t.model.Monday_Cost_Gross();
    t.model.Monday_hours();
    t.model.Tuesday_Cost_Net();
    t.model.Tuesday_Cost_Gross();
    t.model.Tuesday_hours();
    t.model.Wednesday_Cost_Net();
    t.model.Wednesday_Cost_Gross();
    t.model.Wednesday_hours();
    t.model.Thursday_Cost_Net();
    t.model.Thursday_Cost_Gross();
    t.model.Thursday_hours();
    t.model.Friday_Cost_Net();
    t.model.Friday_Cost_Gross();
    t.model.Friday_hours();
    t.model.Saturday_Cost_Net();
    t.model.Saturday_Cost_Gross();
    t.model.Saturday_hours();
    t.model.Total_Week_Cost_Net();
    t.model.Total_Week_Cost_Gross();
    t.model.Total_Week_hours();
    t.model.xp();
    t.model.wages();
    t.model.FC();
    t.model.Total_Working_Count();
    t.model.botw();
    t.model.botw_level();
  },
});

export const profit_loss_report_tempQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.profit_loss_report_temp();
    t.crud.profit_loss_report_temps({ filtering: true, ordering: true });
  },
});

export const profit_loss_report_tempMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneprofit_loss_report_temp();
    t.crud.updateOneprofit_loss_report_temp();
    t.crud.upsertOneprofit_loss_report_temp();
    t.crud.deleteOneprofit_loss_report_temp();

    t.crud.updateManyprofit_loss_report_temp();
    t.crud.deleteManyprofit_loss_report_temp();
  },
});
