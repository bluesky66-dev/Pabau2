import { objectType, extendType } from 'nexus';

export const training_titles = objectType({
  name: 'training_titles',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.category();
    t.model.type();
    t.model.occupier();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const training_titlesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.training_titles();
    t.crud.training_titles({ filtering: true, ordering: true });
  },
});

export const training_titlesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetraining_titles();
    t.crud.updateOnetraining_titles();
    t.crud.upsertOnetraining_titles();
    t.crud.deleteOnetraining_titles();

    t.crud.updateManytraining_titles();
    t.crud.deleteManytraining_titles();
  },
});
