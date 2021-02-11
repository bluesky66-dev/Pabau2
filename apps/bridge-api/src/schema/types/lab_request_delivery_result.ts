import { objectType, extendType } from 'nexus';

export const lab_request_delivery_result = objectType({
  name: 'lab_request_delivery_result',
  definition(t) {
    t.model.id();
    t.model.lab_requests_id();
    t.model.result_status();
    t.model.message();
    t.model.delivery_type();
    t.model.company_id();
    t.model.uid();
    t.model.creation_date();
  },
});

export const lab_request_delivery_resultQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lab_request_delivery_result();
    t.crud.lab_request_delivery_results({ filtering: true, ordering: true });
  },
});

export const lab_request_delivery_resultMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelab_request_delivery_result();
    t.crud.updateOnelab_request_delivery_result();
    t.crud.upsertOnelab_request_delivery_result();
    t.crud.deleteOnelab_request_delivery_result();

    t.crud.updateManylab_request_delivery_result();
    t.crud.deleteManylab_request_delivery_result();
  },
});
