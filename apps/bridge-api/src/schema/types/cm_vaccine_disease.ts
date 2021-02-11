import { objectType, extendType } from 'nexus';

export const cm_vaccine_disease = objectType({
  name: 'cm_vaccine_disease',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.vaccine_id();
    t.model.disease_id();
    t.model.imported();
    t.model.is_required();
  },
});

export const cm_vaccine_diseaseQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_vaccine_disease();
    t.crud.cm_vaccine_diseases({ filtering: true, ordering: true });
  },
});

export const cm_vaccine_diseaseMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_vaccine_disease();
    t.crud.updateOnecm_vaccine_disease();
    t.crud.upsertOnecm_vaccine_disease();
    t.crud.deleteOnecm_vaccine_disease();

    t.crud.updateManycm_vaccine_disease();
    t.crud.deleteManycm_vaccine_disease();
  },
});
