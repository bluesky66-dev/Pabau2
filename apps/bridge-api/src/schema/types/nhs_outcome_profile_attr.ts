import { objectType, extendType } from 'nexus';

export const nhs_outcome_profile_attr = objectType({
  name: 'nhs_outcome_profile_attr',
  definition(t) {
    t.model.id();
    t.model.nhs_outcome_profile_id();
    t.model.nhs_attr_id();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
  },
});

export const nhs_outcome_profile_attrQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_outcome_profile_attr();
    t.crud.nhs_outcome_profile_attrs({ filtering: true, ordering: true });
  },
});

export const nhs_outcome_profile_attrMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_outcome_profile_attr();
    t.crud.updateOnenhs_outcome_profile_attr();
    t.crud.upsertOnenhs_outcome_profile_attr();
    t.crud.deleteOnenhs_outcome_profile_attr();

    t.crud.updateManynhs_outcome_profile_attr();
    t.crud.deleteManynhs_outcome_profile_attr();
  },
});
