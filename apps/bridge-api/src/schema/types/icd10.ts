import { objectType, extendType } from 'nexus';

export const icd10 = objectType({
  name: 'icd10',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.description();
    t.model.full_description();
    t.model.hf_exclude();
  },
});

export const icd10Query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.icd10();
    t.crud.icd10s({ filtering: true, ordering: true });
  },
});

export const icd10Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneicd10();
    t.crud.updateOneicd10();
    t.crud.upsertOneicd10();
    t.crud.deleteOneicd10();

    t.crud.updateManyicd10();
    t.crud.deleteManyicd10();
  },
});
