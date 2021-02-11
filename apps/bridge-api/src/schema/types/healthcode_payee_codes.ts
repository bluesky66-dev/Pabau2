import { objectType, extendType } from 'nexus';

export const healthcode_payee_codes = objectType({
  name: 'healthcode_payee_codes',
  definition(t) {
    t.model.id();
    t.model.practitioner_id();
    t.model.insurer_id();
    t.model.code();
    t.model.location_id();
    t.model.company_id();
  },
});

export const healthcode_payee_codesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.healthcode_payee_codes();
    t.crud.healthcode_payee_codes({ filtering: true, ordering: true });
  },
});

export const healthcode_payee_codesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnehealthcode_payee_codes();
    t.crud.updateOnehealthcode_payee_codes();
    t.crud.upsertOnehealthcode_payee_codes();
    t.crud.deleteOnehealthcode_payee_codes();

    t.crud.updateManyhealthcode_payee_codes();
    t.crud.deleteManyhealthcode_payee_codes();
  },
});
