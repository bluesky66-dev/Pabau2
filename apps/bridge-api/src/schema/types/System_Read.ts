import { objectType, extendType } from 'nexus';

export const System_Read = objectType({
  name: 'System_Read',
  definition(t) {
    t.model.id();
    t.model.proper_id();
  },
});

export const system_ReadQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.system_Read();
    t.crud.system_Reads({ filtering: true, ordering: true });
  },
});

export const system_ReadMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSystem_Read();
    t.crud.updateOneSystem_Read();
    t.crud.upsertOneSystem_Read();
    t.crud.deleteOneSystem_Read();

    t.crud.updateManySystem_Read();
    t.crud.deleteManySystem_Read();
  },
});
