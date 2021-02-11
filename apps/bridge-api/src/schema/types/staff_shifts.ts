import { objectType, extendType } from 'nexus';

export const staff_shifts = objectType({
  name: 'staff_shifts',
  definition(t) {
    t.model.ss_uid();
    t.model.ss_sid();
    t.model.ss_sweek();
    t.model.ss_start();
    t.model.ss_duration();
    t.model.ss_rate();
    t.model.ss_added();
    t.model.ss_role();
  },
});

export const staff_shiftsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_shifts();
    t.crud.staff_shifts({ filtering: true, ordering: true });
  },
});

export const staff_shiftsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_shifts();
    t.crud.updateOnestaff_shifts();
    t.crud.upsertOnestaff_shifts();
    t.crud.deleteOnestaff_shifts();

    t.crud.updateManystaff_shifts();
    t.crud.deleteManystaff_shifts();
  },
});
