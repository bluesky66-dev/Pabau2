import { objectType, extendType } from 'nexus';

export const cm_staff_users = objectType({
  name: 'cm_staff_users',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.Field1();
    t.model.Value1();
    t.model.Field2();
    t.model.Value2();
    t.model.Field3();
    t.model.Value3();
    t.model.Field4();
    t.model.Value4();
    t.model.Field5();
    t.model.Value5();
    t.model.Field6();
    t.model.Value6();
    t.model.Field7();
    t.model.Value7();
    t.model.Field8();
    t.model.Value8();
    t.model.Field9();
    t.model.Value9();
    t.model.Field10();
    t.model.Value10();
    t.model.Field11();
    t.model.Value11();
    t.model.Field12();
    t.model.Value12();
    t.model.Field13();
    t.model.Value13();
    t.model.Field14();
    t.model.Value14();
    t.model.Field15();
    t.model.Value15();
    t.model.Field16();
    t.model.Value16();
    t.model.Field17();
    t.model.Value17();
    t.model.Field18();
    t.model.Value18();
    t.model.Field19();
    t.model.Value19();
    t.model.Field20();
    t.model.Value20();
  },
});

export const cm_staff_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_users();
    t.crud.cm_staff_users({ filtering: true, ordering: true });
  },
});

export const cm_staff_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_users();
    t.crud.updateOnecm_staff_users();
    t.crud.upsertOnecm_staff_users();
    t.crud.deleteOnecm_staff_users();

    t.crud.updateManycm_staff_users();
    t.crud.deleteManycm_staff_users();
  },
});
