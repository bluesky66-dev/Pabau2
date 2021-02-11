import { objectType, extendType } from 'nexus';

export const zenith_contact_dates = objectType({
  name: 'zenith_contact_dates',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.date();
    t.model.added();
  },
});

export const zenith_contact_datesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zenith_contact_dates();
    t.crud.zenith_contact_dates({ filtering: true, ordering: true });
  },
});

export const zenith_contact_datesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezenith_contact_dates();
    t.crud.updateOnezenith_contact_dates();
    t.crud.upsertOnezenith_contact_dates();
    t.crud.deleteOnezenith_contact_dates();

    t.crud.updateManyzenith_contact_dates();
    t.crud.deleteManyzenith_contact_dates();
  },
});
