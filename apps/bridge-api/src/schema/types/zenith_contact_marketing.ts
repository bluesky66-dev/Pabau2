import { objectType, extendType } from 'nexus';

export const zenith_contact_marketing = objectType({
  name: 'zenith_contact_marketing',
  definition(t) {
    t.model.id();
    t.model.custom_contact_id();
    t.model.custom_contact_name();
    t.model.custom_marketing_source();
    t.model.custom_marketing_category();
  },
});

export const zenith_contact_marketingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zenith_contact_marketing();
    t.crud.zenith_contact_marketings({ filtering: true, ordering: true });
  },
});

export const zenith_contact_marketingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezenith_contact_marketing();
    t.crud.updateOnezenith_contact_marketing();
    t.crud.upsertOnezenith_contact_marketing();
    t.crud.deleteOnezenith_contact_marketing();

    t.crud.updateManyzenith_contact_marketing();
    t.crud.deleteManyzenith_contact_marketing();
  },
});
