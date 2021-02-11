import { objectType, extendType } from 'nexus';

export const nhs_procedure_chart = objectType({
  name: 'nhs_procedure_chart',
  definition(t) {
    t.model.id();
    t.model.nhs_chart_type_id();
    t.model.nhs_procedure_id();
    t.model.positive();
    t.model.negative();
    t.model.positive_limit();
    t.model.negative_limit();
    t.model.reset();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
    t.model.median();
    t.model.order_by();
  },
});

export const nhs_procedure_chartQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_procedure_chart();
    t.crud.nhs_procedure_charts({ filtering: true, ordering: true });
  },
});

export const nhs_procedure_chartMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_procedure_chart();
    t.crud.updateOnenhs_procedure_chart();
    t.crud.upsertOnenhs_procedure_chart();
    t.crud.deleteOnenhs_procedure_chart();

    t.crud.updateManynhs_procedure_chart();
    t.crud.deleteManynhs_procedure_chart();
  },
});
