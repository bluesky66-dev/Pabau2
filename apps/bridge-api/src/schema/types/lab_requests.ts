import { objectType, extendType } from 'nexus';

export const lab_requests = objectType({
  name: 'lab_requests',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.company_id();
    t.model.request_date();
    t.model.last_update();
    t.model.request_by_id();
    t.model.request_status();
    t.model.request_lab_id();
    t.model.lab_id();
    t.model.request_id();
    t.model.received_id();
    t.model.communication_id();
    t.model.send_result();
    t.model.receive_result();
    t.model.receive_raw();
    t.model.receive_date();
    t.model.sent_date();
  },
});

export const lab_requestsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lab_requests();
    t.crud.lab_requests({ filtering: true, ordering: true });
  },
});

export const lab_requestsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelab_requests();
    t.crud.updateOnelab_requests();
    t.crud.upsertOnelab_requests();
    t.crud.deleteOnelab_requests();

    t.crud.updateManylab_requests();
    t.crud.deleteManylab_requests();
  },
});
