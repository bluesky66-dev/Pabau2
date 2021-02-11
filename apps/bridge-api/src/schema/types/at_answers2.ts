import { objectType, extendType } from 'nexus';

export const at_answers2 = objectType({
  name: 'at_answers2',
  definition(t) {
    t.model.id();
    t.model.question_id();
    t.model.name();
  },
});

export const at_answers2Query = extendType({
  type: 'Query',
  definition(t) {
    t.crud.at_answers2();
    t.crud.at_answers2s({ filtering: true, ordering: true });
  },
});

export const at_answers2Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneat_answers2();
    t.crud.updateOneat_answers2();
    t.crud.upsertOneat_answers2();
    t.crud.deleteOneat_answers2();

    t.crud.updateManyat_answers2();
    t.crud.deleteManyat_answers2();
  },
});
