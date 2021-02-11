import { objectType, extendType } from 'nexus';

export const theatre_list = objectType({
  name: 'theatre_list',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.user_id();
    t.model.occupier();
    t.model.theatre_date();
    t.model.tci_datetime();
    t.model.admission();
    t.model.room();
    t.model.anesthetist();
    t.model.discharged();
    t.model.comments();
    t.model.session();
    t.model.episode();
    t.model.code();
    t.model.indications();
    t.model.duration();
    t.model.ord();
  },
});

export const theatre_listQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.theatre_list();
    t.crud.theatre_lists({ filtering: true, ordering: true });
  },
});

export const theatre_listMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetheatre_list();
    t.crud.updateOnetheatre_list();
    t.crud.upsertOnetheatre_list();
    t.crud.deleteOnetheatre_list();

    t.crud.updateManytheatre_list();
    t.crud.deleteManytheatre_list();
  },
});
