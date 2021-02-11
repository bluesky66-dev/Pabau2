import { objectType, extendType } from 'nexus';

export const lab_request_result_followup = objectType({
  name: 'lab_request_result_followup',
  definition(t) {
    t.model.id();
    t.model.delivery_id();
    t.model.lab_request_id();
    t.model.company_id();
    t.model.type();
  },
});

export const lab_request_result_followupQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lab_request_result_followup();
    t.crud.lab_request_result_followups({ filtering: true, ordering: true });
  },
});

export const lab_request_result_followupMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelab_request_result_followup();
    t.crud.updateOnelab_request_result_followup();
    t.crud.upsertOnelab_request_result_followup();
    t.crud.deleteOnelab_request_result_followup();

    t.crud.updateManylab_request_result_followup();
    t.crud.deleteManylab_request_result_followup();
  },
});
