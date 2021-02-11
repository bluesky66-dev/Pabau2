import { objectType, extendType } from 'nexus';

export const pabau_shortener = objectType({
  name: 'pabau_shortener',
  definition(t) {
    t.model.id();
    t.model.redirect_code();
    t.model.url();
    t.model.company_id();
  },
});

export const pabau_shortenerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_shortener();
    t.crud.pabau_shorteners({ filtering: true, ordering: true });
  },
});

export const pabau_shortenerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_shortener();
    t.crud.updateOnepabau_shortener();
    t.crud.upsertOnepabau_shortener();
    t.crud.deleteOnepabau_shortener();

    t.crud.updateManypabau_shortener();
    t.crud.deleteManypabau_shortener();
  },
});
