import { objectType, extendType } from 'nexus';

export const custom_codes = objectType({
  name: 'custom_codes',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.code_set_id();
    t.model.code();
    t.model.layer_1();
    t.model.layer_2();
    t.model.layer_3();
    t.model.layer_4();
    t.model.layer_5();
    t.model.description();
    t.model.icd9();
    t.model.icd10();
    t.model.osics10();
    t.model.is_fav();
  },
});

export const custom_codesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.custom_codes();
    t.crud.custom_codes({ filtering: true, ordering: true });
  },
});

export const custom_codesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecustom_codes();
    t.crud.updateOnecustom_codes();
    t.crud.upsertOnecustom_codes();
    t.crud.deleteOnecustom_codes();

    t.crud.updateManycustom_codes();
    t.crud.deleteManycustom_codes();
  },
});
