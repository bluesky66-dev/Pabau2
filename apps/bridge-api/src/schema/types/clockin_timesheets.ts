import { objectType, extendType } from 'nexus';

export const clockin_timesheets = objectType({
  name: 'clockin_timesheets',
  definition(t) {
    t.model.clock_id();
    t.model.staff_uid();
    t.model.company_id();
    t.model.clockin();
    t.model.clockout();
    t.model.total_break_time();
    t.model.total_working_time();
    t.model.notes();
    t.model.approved();
    t.model.staff_name();
    t.model.ip_address();
  },
});

export const clockin_timesheetsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.clockin_timesheets();
    t.crud.clockin_timesheets({ filtering: true, ordering: true });
  },
});

export const clockin_timesheetsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclockin_timesheets();
    t.crud.updateOneclockin_timesheets();
    t.crud.upsertOneclockin_timesheets();
    t.crud.deleteOneclockin_timesheets();

    t.crud.updateManyclockin_timesheets();
    t.crud.deleteManyclockin_timesheets();
  },
});
