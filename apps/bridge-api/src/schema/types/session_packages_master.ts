import { objectType, extendType } from 'nexus';

export const session_packages_master = objectType({
  name: 'session_packages_master',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.occupier();
    t.model.created_date();
    t.model.deleted();
  },
});

export const session_packages_masterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.session_packages_master();
    t.crud.session_packages_masters({ filtering: true, ordering: true });
  },
});

export const session_packages_masterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesession_packages_master();
    t.crud.updateOnesession_packages_master();
    t.crud.upsertOnesession_packages_master();
    t.crud.deleteOnesession_packages_master();

    t.crud.updateManysession_packages_master();
    t.crud.deleteManysession_packages_master();
  },
});
