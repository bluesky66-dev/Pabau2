import { objectType, extendType } from 'nexus';

export const pipeline_stage_custom_fields = objectType({
  name: 'pipeline_stage_custom_fields',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.opportunity_id();
    t.model.stage_id();
    t.model.custom_field_id();
    t.model.custom_field_value();
    t.model.updated_date();
  },
});

export const pipeline_stage_custom_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pipeline_stage_custom_fields();
    t.crud.pipeline_stage_custom_fields({ filtering: true, ordering: true });
  },
});

export const pipeline_stage_custom_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepipeline_stage_custom_fields();
    t.crud.updateOnepipeline_stage_custom_fields();
    t.crud.upsertOnepipeline_stage_custom_fields();
    t.crud.deleteOnepipeline_stage_custom_fields();

    t.crud.updateManypipeline_stage_custom_fields();
    t.crud.deleteManypipeline_stage_custom_fields();
  },
});
