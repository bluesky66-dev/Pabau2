import { objectType, extendType } from 'nexus';

export const class_sms_history = objectType({
  name: 'class_sms_history',
  definition(t) {
    t.model.id();
    t.model.class_id();
    t.model.user_id();
    t.model.message();
    t.model.datetime();
  },
});

export const class_sms_historyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.class_sms_history();
    t.crud.class_sms_histories({ filtering: true, ordering: true });
  },
});

export const class_sms_historyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclass_sms_history();
    t.crud.updateOneclass_sms_history();
    t.crud.upsertOneclass_sms_history();
    t.crud.deleteOneclass_sms_history();

    t.crud.updateManyclass_sms_history();
    t.crud.deleteManyclass_sms_history();
  },
});
