import { objectType, extendType } from 'nexus';

export const user_alerts_cc = objectType({
  name: 'user_alerts_cc',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.cc_name();
    t.model.cc_email();
    t.model.cc_phone();
  },
});

export const user_alerts_ccQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_alerts_cc();
    t.crud.user_alerts_ccs({ filtering: true, ordering: true });
  },
});

export const user_alerts_ccMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_alerts_cc();
    t.crud.updateOneuser_alerts_cc();
    t.crud.upsertOneuser_alerts_cc();
    t.crud.deleteOneuser_alerts_cc();

    t.crud.updateManyuser_alerts_cc();
    t.crud.deleteManyuser_alerts_cc();
  },
});
