import { objectType, extendType } from 'nexus';

export const checkin_averages = objectType({
  name: 'checkin_averages',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.product_id();
    t.model.avg_time_seconds();
  },
});

export const checkin_averagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkin_averages();
    t.crud.checkin_averages({ filtering: true, ordering: true });
  },
});

export const checkin_averagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecheckin_averages();
    t.crud.updateOnecheckin_averages();
    t.crud.upsertOnecheckin_averages();
    t.crud.deleteOnecheckin_averages();

    t.crud.updateManycheckin_averages();
    t.crud.deleteManycheckin_averages();
  },
});
