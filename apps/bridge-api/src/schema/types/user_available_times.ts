import { objectType, extendType } from 'nexus';

export const user_available_times = objectType({
  name: 'user_available_times',
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.occupier();
    t.model.date();
    t.model.day();
    t.model.start_time();
    t.model.end_time();
    t.model.location_id();
    t.model.imported();
    t.model.tag_name();
  },
});

export const user_available_timesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_available_times();
    t.crud.user_available_times({ filtering: true, ordering: true });
  },
});

export const user_available_timesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_available_times();
    t.crud.updateOneuser_available_times();
    t.crud.upsertOneuser_available_times();
    t.crud.deleteOneuser_available_times();

    t.crud.updateManyuser_available_times();
    t.crud.deleteManyuser_available_times();
  },
});
