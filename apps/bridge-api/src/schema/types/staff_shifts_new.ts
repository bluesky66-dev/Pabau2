import { objectType, extendType } from 'nexus';

export const staff_shifts_new = objectType({
  name: 'staff_shifts_new',
  definition(t) {
    t.model.id();
    t.model.staff_id();
    t.model.start_date();
    t.model.end_date();
    t.model.ss_rate();
    t.model.staff_role_id();
    t.model.CreatedDate();
    t.model.occupier();
  },
});

export const staff_shifts_newQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_shifts_new();
    t.crud.staff_shifts_news({ filtering: true, ordering: true });
  },
});

export const staff_shifts_newMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_shifts_new();
    t.crud.updateOnestaff_shifts_new();
    t.crud.upsertOnestaff_shifts_new();
    t.crud.deleteOnestaff_shifts_new();

    t.crud.updateManystaff_shifts_new();
    t.crud.deleteManystaff_shifts_new();
  },
});
