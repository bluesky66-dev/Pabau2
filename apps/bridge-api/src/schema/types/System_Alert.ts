import { objectType, extendType } from 'nexus';

export const System_Alert = objectType({
  name: 'System_Alert',
  definition(t) {
    t.model.alertid();
    t.model.cid();
    t.model.uid();
    t.model.message();
    t.model.read();
    t.model.entrydate();
    t.model.type();
    t.model.browser_id();
  },
});

export const system_AlertQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.system_Alert();
    t.crud.system_Alerts({ filtering: true, ordering: true });
  },
});

export const system_AlertMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSystem_Alert();
    t.crud.updateOneSystem_Alert();
    t.crud.upsertOneSystem_Alert();
    t.crud.deleteOneSystem_Alert();

    t.crud.updateManySystem_Alert();
    t.crud.deleteManySystem_Alert();
  },
});
