import { objectType, extendType } from 'nexus';

export const lead_scoring_acitivity_mode_code = objectType({
  name: 'lead_scoring_acitivity_mode_code',
  definition(t) {
    t.model.id();
    t.model.activity_mode();
    t.model.code();
    t.model.description();
  },
});

export const lead_scoring_acitivity_mode_codeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lead_scoring_acitivity_mode_code();
    t.crud.lead_scoring_acitivity_mode_codes({ filtering: true, ordering: true });
  },
});

export const lead_scoring_acitivity_mode_codeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelead_scoring_acitivity_mode_code();
    t.crud.updateOnelead_scoring_acitivity_mode_code();
    t.crud.upsertOnelead_scoring_acitivity_mode_code();
    t.crud.deleteOnelead_scoring_acitivity_mode_code();

    t.crud.updateManylead_scoring_acitivity_mode_code();
    t.crud.deleteManylead_scoring_acitivity_mode_code();
  },
});
