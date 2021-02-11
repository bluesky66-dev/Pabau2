import { objectType, extendType } from 'nexus';

export const external_guest = objectType({
  name: 'external_guest',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.Name();
    t.model.Email();
  },
});

export const external_guestQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.external_guest();
    t.crud.external_guests({ filtering: true, ordering: true });
  },
});

export const external_guestMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneexternal_guest();
    t.crud.updateOneexternal_guest();
    t.crud.upsertOneexternal_guest();
    t.crud.deleteOneexternal_guest();

    t.crud.updateManyexternal_guest();
    t.crud.deleteManyexternal_guest();
  },
});
