import { objectType, extendType } from 'nexus';

export const icd9 = objectType({
  name: 'icd9',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.desc();
  },
});

export const icd9Query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.icd9();
    t.crud.icd9s({ filtering: true, ordering: true });
  },
});

export const icd9Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneicd9();
    t.crud.updateOneicd9();
    t.crud.upsertOneicd9();
    t.crud.deleteOneicd9();

    t.crud.updateManyicd9();
    t.crud.deleteManyicd9();
  },
});
