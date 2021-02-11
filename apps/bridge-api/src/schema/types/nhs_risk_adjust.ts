import { objectType, extendType } from 'nexus';

export const nhs_risk_adjust = objectType({
  name: 'nhs_risk_adjust',
  definition(t) {
    t.model.id();
    t.model.nhs_procedure_id();
    t.model.name();
    t.model.formula();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.type();
  },
});

export const nhs_risk_adjustQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_risk_adjust();
    t.crud.nhs_risk_adjusts({ filtering: true, ordering: true });
  },
});

export const nhs_risk_adjustMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_risk_adjust();
    t.crud.updateOnenhs_risk_adjust();
    t.crud.upsertOnenhs_risk_adjust();
    t.crud.deleteOnenhs_risk_adjust();

    t.crud.updateManynhs_risk_adjust();
    t.crud.deleteManynhs_risk_adjust();
  },
});
