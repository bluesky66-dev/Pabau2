import { objectType, extendType } from 'nexus';

export const config = objectType({
  name: 'config',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.value();
    t.model.occupier();
  },
});

export const configQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.config();
    t.crud.configs({ filtering: true, ordering: true });
  },
});

export const configMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconfig();
    t.crud.updateOneconfig();
    t.crud.upsertOneconfig();
    t.crud.deleteOneconfig();

    t.crud.updateManyconfig();
    t.crud.deleteManyconfig();
  },
});
