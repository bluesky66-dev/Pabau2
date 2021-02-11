import { objectType, extendType } from 'nexus';

export const user_availability = objectType({
  name: 'user_availability',
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.day();
    t.model.start_time();
    t.model.end_time();
    t.model.break();
    t.model.start_break();
    t.model.end_break();
  },
});

export const user_availabilityQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_availability();
    t.crud.user_availabilities({ filtering: true, ordering: true });
  },
});

export const user_availabilityMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_availability();
    t.crud.updateOneuser_availability();
    t.crud.upsertOneuser_availability();
    t.crud.deleteOneuser_availability();

    t.crud.updateManyuser_availability();
    t.crud.deleteManyuser_availability();
  },
});
