import { objectType, extendType } from 'nexus';

export const languages = objectType({
  name: 'languages',
  definition(t) {
    t.model.ID();
    t.model.code();
    t.model.name();
  },
});

export const languagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.languages();
    t.crud.languages({ filtering: true, ordering: true });
  },
});

export const languagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelanguages();
    t.crud.updateOnelanguages();
    t.crud.upsertOnelanguages();
    t.crud.deleteOnelanguages();

    t.crud.updateManylanguages();
    t.crud.deleteManylanguages();
  },
});
