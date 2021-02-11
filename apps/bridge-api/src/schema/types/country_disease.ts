import { objectType, extendType } from 'nexus';

export const country_disease = objectType({
  name: 'country_disease',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.country_id();
    t.model.disease_id();
    t.model.risk_level();
    t.model.imported();
  },
});

export const country_diseaseQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.country_disease();
    t.crud.country_diseases({ filtering: true, ordering: true });
  },
});

export const country_diseaseMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecountry_disease();
    t.crud.updateOnecountry_disease();
    t.crud.upsertOnecountry_disease();
    t.crud.deleteOnecountry_disease();

    t.crud.updateManycountry_disease();
    t.crud.deleteManycountry_disease();
  },
});
