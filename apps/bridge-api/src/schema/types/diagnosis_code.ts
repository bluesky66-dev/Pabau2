import { objectType, extendType } from 'nexus';

export const diagnosis_code = objectType({
  name: 'diagnosis_code',
  definition(t) {
    t.model.id();
    t.model.osics10_code();
    t.model.osics10_region();
    t.model.osics10_parent();
    t.model.oscis10_specific();
    t.model.osics10_detail();
    t.model.icd_injury_code();
    t.model.icd_injury_description();
    t.model.icd_parent();
    t.model.icd10();
    t.model.company_id();
    t.model.is_favourite();
    t.model.icd9();
  },
});

export const diagnosis_codeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.diagnosis_code();
    t.crud.diagnosis_codes({ filtering: true, ordering: true });
  },
});

export const diagnosis_codeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnediagnosis_code();
    t.crud.updateOnediagnosis_code();
    t.crud.upsertOnediagnosis_code();
    t.crud.deleteOnediagnosis_code();

    t.crud.updateManydiagnosis_code();
    t.crud.deleteManydiagnosis_code();
  },
});
