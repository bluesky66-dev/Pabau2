import { objectType, extendType } from 'nexus';

export const code_set = objectType({
  name: 'code_set',
  definition(t) {
    t.model.id();
    t.model.set_name();
    t.model.company_id();
    t.model.layers();
  },
});

export const code_setQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.code_set();
    t.crud.code_sets({ filtering: true, ordering: true });
  },
});

export const code_setMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecode_set();
    t.crud.updateOnecode_set();
    t.crud.upsertOnecode_set();
    t.crud.deleteOnecode_set();

    t.crud.updateManycode_set();
    t.crud.deleteManycode_set();
  },
});
