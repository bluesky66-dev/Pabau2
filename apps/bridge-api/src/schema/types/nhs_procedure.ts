import { objectType, extendType } from 'nexus';

export const nhs_procedure = objectType({
  name: 'nhs_procedure',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.nhs_procedure_type_id();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.nhs_outcome_profile_id();
    t.model.subname();
  },
});

export const nhs_procedureQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_procedure();
    t.crud.nhs_procedures({ filtering: true, ordering: true });
  },
});

export const nhs_procedureMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_procedure();
    t.crud.updateOnenhs_procedure();
    t.crud.upsertOnenhs_procedure();
    t.crud.deleteOnenhs_procedure();

    t.crud.updateManynhs_procedure();
    t.crud.deleteManynhs_procedure();
  },
});
