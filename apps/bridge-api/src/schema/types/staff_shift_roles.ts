import { objectType, extendType } from 'nexus';

export const staff_shift_roles = objectType({
  name: 'staff_shift_roles',
  definition(t) {
    t.model.role_id();
    t.model.role_cid();
    t.model.role_name();
    t.model.role_colour();
    t.model.role_delete();
  },
});

export const staff_shift_rolesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_shift_roles();
    t.crud.staff_shift_roles({ filtering: true, ordering: true });
  },
});

export const staff_shift_rolesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_shift_roles();
    t.crud.updateOnestaff_shift_roles();
    t.crud.upsertOnestaff_shift_roles();
    t.crud.deleteOnestaff_shift_roles();

    t.crud.updateManystaff_shift_roles();
    t.crud.deleteManystaff_shift_roles();
  },
});
