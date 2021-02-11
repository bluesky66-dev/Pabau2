import { objectType, extendType } from 'nexus';

export const at_questions2 = objectType({
  name: 'at_questions2',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.type();
  },
});

export const at_questions2Query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.at_questions2();
    t.crud.at_questions2s({ filtering: true, ordering: true });
  },
});

export const at_questions2Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneat_questions2();
    t.crud.updateOneat_questions2();
    t.crud.upsertOneat_questions2();
    t.crud.deleteOneat_questions2();

    t.crud.updateManyat_questions2();
    t.crud.deleteManyat_questions2();
  },
});
