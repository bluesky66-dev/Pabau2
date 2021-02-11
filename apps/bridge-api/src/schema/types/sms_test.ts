import { objectType, extendType } from 'nexus';

export const sms_test = objectType({
  name: 'sms_test',
  definition(t) {
    t.model.id();
    t.model.response();
  },
});

export const sms_testQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sms_test();
    t.crud.sms_tests({ filtering: true, ordering: true });
  },
});

export const sms_testMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesms_test();
    t.crud.updateOnesms_test();
    t.crud.upsertOnesms_test();
    t.crud.deleteOnesms_test();

    t.crud.updateManysms_test();
    t.crud.deleteManysms_test();
  },
});
