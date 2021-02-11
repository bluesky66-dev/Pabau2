import { objectType, extendType } from 'nexus';

export const holiday_requests = objectType({
  name: 'holiday_requests',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.staff_id();
    t.model.request_id();
    t.model.holiday_from();
    t.model.holiday_to();
    t.model.status();
    t.model.leave_type();
    t.model.approved_by();
    t.model.staff_comments();
    t.model.seen();
    t.model.rejected_by();
    t.model.approve_comments();
    t.model.reject_comments();
  },
});

export const holiday_requestsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.holiday_requests();
    t.crud.holiday_requests({ filtering: true, ordering: true });
  },
});

export const holiday_requestsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneholiday_requests();
    t.crud.updateOneholiday_requests();
    t.crud.upsertOneholiday_requests();
    t.crud.deleteOneholiday_requests();

    t.crud.updateManyholiday_requests();
    t.crud.deleteManyholiday_requests();
  },
});
