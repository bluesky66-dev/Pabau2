import { objectType, extendType } from 'nexus';

export const engage_connects = objectType({
  name: 'engage_connects',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.group_id();
    t.model.send_time();
  },
});

export const engage_connectsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.engage_connects();
    t.crud.engage_connects({ filtering: true, ordering: true });
  },
});

export const engage_connectsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneengage_connects();
    t.crud.updateOneengage_connects();
    t.crud.upsertOneengage_connects();
    t.crud.deleteOneengage_connects();

    t.crud.updateManyengage_connects();
    t.crud.deleteManyengage_connects();
  },
});
