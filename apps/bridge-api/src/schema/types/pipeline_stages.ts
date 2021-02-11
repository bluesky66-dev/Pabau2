import { objectType, extendType } from 'nexus';

export const pipeline_stages = objectType({
  name: 'pipeline_stages',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.pipeline_id();
    t.model.name();
    t.model.stage_order();
    t.model.custom_field_ids();
    t.model.note();
    t.model.created_date();
    t.model.updated_date();
  },
});

export const pipeline_stagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pipeline_stages();
    t.crud.pipeline_stages({ filtering: true, ordering: true });
  },
});

export const pipeline_stagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepipeline_stages();
    t.crud.updateOnepipeline_stages();
    t.crud.upsertOnepipeline_stages();
    t.crud.deleteOnepipeline_stages();

    t.crud.updateManypipeline_stages();
    t.crud.deleteManypipeline_stages();
  },
});
