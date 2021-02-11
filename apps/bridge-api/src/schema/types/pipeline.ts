import { objectType, extendType } from 'nexus';

export const pipeline = objectType({
  name: 'pipeline',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.description();
    t.model.status();
    t.model.services_ids();
    t.model.note();
    t.model.restrict_stages();
  },
});

export const pipelineQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pipeline();
    t.crud.pipelines({ filtering: true, ordering: true });
  },
});

export const pipelineMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepipeline();
    t.crud.updateOnepipeline();
    t.crud.upsertOnepipeline();
    t.crud.deleteOnepipeline();

    t.crud.updateManypipeline();
    t.crud.deleteManypipeline();
  },
});
