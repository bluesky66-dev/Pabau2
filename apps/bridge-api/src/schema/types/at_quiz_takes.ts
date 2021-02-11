import { objectType, extendType } from 'nexus';

export const at_quiz_takes = objectType({
  name: 'at_quiz_takes',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.email();
    t.model.take_date();
    t.model.answers();
    t.model.concerns();
    t.model.answers2();
    t.model.products();
  },
});

export const at_quiz_takesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.at_quiz_takes();
    t.crud.at_quiz_takes({ filtering: true, ordering: true });
  },
});

export const at_quiz_takesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneat_quiz_takes();
    t.crud.updateOneat_quiz_takes();
    t.crud.upsertOneat_quiz_takes();
    t.crud.deleteOneat_quiz_takes();

    t.crud.updateManyat_quiz_takes();
    t.crud.deleteManyat_quiz_takes();
  },
});
