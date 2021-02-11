import { objectType, extendType } from 'nexus';

export const lab_request_inbound = objectType({
  name: 'lab_request_inbound',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.lab_request_id();
    t.model.email_from();
    t.model.pending_review();
    t.model.email_subject();
    t.model.attachment_name();
    t.model.received_date();
    t.model.attachment_url();
    t.model.matched_on();
    t.model.channel();
    t.model.matched_by_id();
    t.model.is_deleted();
    t.model.tdl_response();
  },
});

export const lab_request_inboundQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lab_request_inbound();
    t.crud.lab_request_inbounds({ filtering: true, ordering: true });
  },
});

export const lab_request_inboundMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelab_request_inbound();
    t.crud.updateOnelab_request_inbound();
    t.crud.upsertOnelab_request_inbound();
    t.crud.deleteOnelab_request_inbound();

    t.crud.updateManylab_request_inbound();
    t.crud.deleteManylab_request_inbound();
  },
});
