import { objectType, extendType } from 'nexus';

export const lab_requests_pref_delivery = objectType({
  name: 'lab_requests_pref_delivery',
  definition(t) {
    t.model.id();
    t.model.lab_requests_id();
    t.model.type();
    t.model.creation_date();
  },
});

export const lab_requests_pref_deliveryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lab_requests_pref_delivery();
    t.crud.lab_requests_pref_deliveries({ filtering: true, ordering: true });
  },
});

export const lab_requests_pref_deliveryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelab_requests_pref_delivery();
    t.crud.updateOnelab_requests_pref_delivery();
    t.crud.upsertOnelab_requests_pref_delivery();
    t.crud.deleteOnelab_requests_pref_delivery();

    t.crud.updateManylab_requests_pref_delivery();
    t.crud.deleteManylab_requests_pref_delivery();
  },
});
