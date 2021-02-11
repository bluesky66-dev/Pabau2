import { objectType, extendType } from 'nexus';

export const training_guides = objectType({
  name: 'training_guides',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.link();
    t.model.category();
  },
});

export const training_guidesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.training_guides();
    t.crud.training_guides({ filtering: true, ordering: true });
  },
});

export const training_guidesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetraining_guides();
    t.crud.updateOnetraining_guides();
    t.crud.upsertOnetraining_guides();
    t.crud.deleteOnetraining_guides();

    t.crud.updateManytraining_guides();
    t.crud.deleteManytraining_guides();
  },
});
