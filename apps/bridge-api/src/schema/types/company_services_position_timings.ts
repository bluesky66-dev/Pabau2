import { objectType, extendType } from 'nexus';

export const company_services_position_timings = objectType({
  name: 'company_services_position_timings',
  definition(t) {
    t.model.id();
    t.model.company_services_id();
    t.model.position_id();
    t.model.position_name();
    t.model.duration();
    t.model.occupier();
    t.model.created_date();
    t.model.modified_date();
  },
});

export const company_services_position_timingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_position_timings();
    t.crud.company_services_position_timings({ filtering: true, ordering: true });
  },
});

export const company_services_position_timingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_position_timings();
    t.crud.updateOnecompany_services_position_timings();
    t.crud.upsertOnecompany_services_position_timings();
    t.crud.deleteOnecompany_services_position_timings();

    t.crud.updateManycompany_services_position_timings();
    t.crud.deleteManycompany_services_position_timings();
  },
});
