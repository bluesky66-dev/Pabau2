import { objectType, extendType } from 'nexus';

export const cal_range_requests = objectType({
  name: 'cal_range_requests',
  definition(t) {
    t.model.id();
    t.model.minutes();
    t.model.company_id();
    t.model.start_date();
    t.model.end_date();
  },
});

export const cal_range_requestsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cal_range_requests();
    t.crud.cal_range_requests({ filtering: true, ordering: true });
  },
});

export const cal_range_requestsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecal_range_requests();
    t.crud.updateOnecal_range_requests();
    t.crud.upsertOnecal_range_requests();
    t.crud.deleteOnecal_range_requests();

    t.crud.updateManycal_range_requests();
    t.crud.deleteManycal_range_requests();
  },
});
