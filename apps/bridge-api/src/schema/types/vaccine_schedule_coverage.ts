import { objectType, extendType } from 'nexus';

export const vaccine_schedule_coverage = objectType({
  name: 'vaccine_schedule_coverage',
  definition(t) {
    t.model.id();
    t.model.vaccine_schedule_id();
    t.model.disease_id();
    t.model.coverage_end_date();
    t.model.cover_length();
  },
});

export const vaccine_schedule_coverageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.vaccine_schedule_coverage();
    t.crud.vaccine_schedule_coverages({ filtering: true, ordering: true });
  },
});

export const vaccine_schedule_coverageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevaccine_schedule_coverage();
    t.crud.updateOnevaccine_schedule_coverage();
    t.crud.upsertOnevaccine_schedule_coverage();
    t.crud.deleteOnevaccine_schedule_coverage();

    t.crud.updateManyvaccine_schedule_coverage();
    t.crud.deleteManyvaccine_schedule_coverage();
  },
});
