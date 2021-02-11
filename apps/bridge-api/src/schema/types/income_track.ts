import { objectType, extendType } from 'nexus';

export const income_track = objectType({
  name: 'income_track',
  definition(t) {
    t.model.id();
    t.model.count();
    t.model.type();
    t.model.revenue();
  },
});

export const income_trackQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.income_track();
    t.crud.income_tracks({ filtering: true, ordering: true });
  },
});

export const income_trackMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneincome_track();
    t.crud.updateOneincome_track();
    t.crud.upsertOneincome_track();
    t.crud.deleteOneincome_track();

    t.crud.updateManyincome_track();
    t.crud.deleteManyincome_track();
  },
});
