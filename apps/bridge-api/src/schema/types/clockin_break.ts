import { objectType, extendType } from 'nexus';

export const clockin_break = objectType({
  name: 'clockin_break',
  definition(t) {
    t.model.break_time_id();
    t.model.clock_id();
    t.model.break_time_start();
    t.model.break_time_out();
  },
});

export const clockin_breakQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.clockin_break();
    t.crud.clockin_breaks({ filtering: true, ordering: true });
  },
});

export const clockin_breakMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclockin_break();
    t.crud.updateOneclockin_break();
    t.crud.upsertOneclockin_break();
    t.crud.deleteOneclockin_break();

    t.crud.updateManyclockin_break();
    t.crud.deleteManyclockin_break();
  },
});
