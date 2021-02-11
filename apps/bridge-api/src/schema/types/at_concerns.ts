import { objectType, extendType } from 'nexus';

export const at_concerns = objectType({
  name: 'at_concerns',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.image();
    t.model.region();
  },
});

export const at_concernsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.at_concerns();
    t.crud.at_concerns({ filtering: true, ordering: true });
  },
});

export const at_concernsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneat_concerns();
    t.crud.updateOneat_concerns();
    t.crud.upsertOneat_concerns();
    t.crud.deleteOneat_concerns();

    t.crud.updateManyat_concerns();
    t.crud.deleteManyat_concerns();
  },
});
