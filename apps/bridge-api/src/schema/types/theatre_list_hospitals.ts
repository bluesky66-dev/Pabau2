import { objectType, extendType } from 'nexus';

export const theatre_list_hospitals = objectType({
  name: 'theatre_list_hospitals',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.company_id();
    t.model.theatre_list_date_settings();
  },
});

export const theatre_list_hospitalsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.theatre_list_hospitals();
    t.crud.theatre_list_hospitals({ filtering: true, ordering: true });
  },
});

export const theatre_list_hospitalsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetheatre_list_hospitals();
    t.crud.updateOnetheatre_list_hospitals();
    t.crud.upsertOnetheatre_list_hospitals();
    t.crud.deleteOnetheatre_list_hospitals();

    t.crud.updateManytheatre_list_hospitals();
    t.crud.deleteManytheatre_list_hospitals();
  },
});
