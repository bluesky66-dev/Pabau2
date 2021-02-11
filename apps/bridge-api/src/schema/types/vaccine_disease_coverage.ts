import { objectType, extendType } from 'nexus';

export const vaccine_disease_coverage = objectType({
  name: 'vaccine_disease_coverage',
  definition(t) {
    t.model.id();
    t.model.cm_vaccine_id();
    t.model.disease_id();
    t.model.data();
  },
});

export const vaccine_disease_coverageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.vaccine_disease_coverage();
    t.crud.vaccine_disease_coverages({ filtering: true, ordering: true });
  },
});

export const vaccine_disease_coverageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevaccine_disease_coverage();
    t.crud.updateOnevaccine_disease_coverage();
    t.crud.upsertOnevaccine_disease_coverage();
    t.crud.deleteOnevaccine_disease_coverage();

    t.crud.updateManyvaccine_disease_coverage();
    t.crud.deleteManyvaccine_disease_coverage();
  },
});
