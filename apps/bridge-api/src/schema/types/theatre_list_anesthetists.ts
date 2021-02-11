import { objectType, extendType } from 'nexus';

export const theatre_list_anesthetists = objectType({
  name: 'theatre_list_anesthetists',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.company_id();
    t.model.theatre_list_date_settings();
  },
});

export const theatre_list_anesthetistsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.theatre_list_anesthetists();
    t.crud.theatre_list_anesthetists({ filtering: true, ordering: true });
  },
});

export const theatre_list_anesthetistsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetheatre_list_anesthetists();
    t.crud.updateOnetheatre_list_anesthetists();
    t.crud.upsertOnetheatre_list_anesthetists();
    t.crud.deleteOnetheatre_list_anesthetists();

    t.crud.updateManytheatre_list_anesthetists();
    t.crud.deleteManytheatre_list_anesthetists();
  },
});
