import { objectType, extendType } from 'nexus';

export const insurer_validation = objectType({
  name: 'insurer_validation',
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.rule();
    t.model.regex();
    t.model.reference();
  },
});

export const insurer_validationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.insurer_validation();
    t.crud.insurer_validations({ filtering: true, ordering: true });
  },
});

export const insurer_validationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinsurer_validation();
    t.crud.updateOneinsurer_validation();
    t.crud.upsertOneinsurer_validation();
    t.crud.deleteOneinsurer_validation();

    t.crud.updateManyinsurer_validation();
    t.crud.deleteManyinsurer_validation();
  },
});
