import { objectType, extendType } from 'nexus';

export const request_permission = objectType({
  name: 'request_permission',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.uid();
    t.model.type();
    t.model.name();
    t.model.target_id();
    t.model.approved();
    t.model.approved_by_id();
    t.model.approved_on();
    t.model.requested_on();
  },
});

export const request_permissionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.request_permission();
    t.crud.request_permissions({ filtering: true, ordering: true });
  },
});

export const request_permissionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerequest_permission();
    t.crud.updateOnerequest_permission();
    t.crud.upsertOnerequest_permission();
    t.crud.deleteOnerequest_permission();

    t.crud.updateManyrequest_permission();
    t.crud.deleteManyrequest_permission();
  },
});
