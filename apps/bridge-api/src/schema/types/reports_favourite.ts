import { objectType, extendType } from 'nexus';

export const reports_favourite = objectType({
  name: 'reports_favourite',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.report_id();
    t.model.stars();
  },
});

export const reports_favouriteQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.reports_favourite();
    t.crud.reports_favourites({ filtering: true, ordering: true });
  },
});

export const reports_favouriteMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereports_favourite();
    t.crud.updateOnereports_favourite();
    t.crud.upsertOnereports_favourite();
    t.crud.deleteOnereports_favourite();

    t.crud.updateManyreports_favourite();
    t.crud.deleteManyreports_favourite();
  },
});
