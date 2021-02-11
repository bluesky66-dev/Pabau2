import { objectType, extendType } from 'nexus';

export const quick_tools = objectType({
  name: 'quick_tools',
  definition(t) {
    t.model.id();
    t.model.parentid();
    t.model.secondaryid();
    t.model.title();
    t.model.ordering();
    t.model.link();
  },
});

export const quick_toolsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.quick_tools();
    t.crud.quick_tools({ filtering: true, ordering: true });
  },
});

export const quick_toolsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnequick_tools();
    t.crud.updateOnequick_tools();
    t.crud.upsertOnequick_tools();
    t.crud.deleteOnequick_tools();

    t.crud.updateManyquick_tools();
    t.crud.deleteManyquick_tools();
  },
});
