import { objectType, extendType } from 'nexus';

export const news_score_configuration = objectType({
  name: 'news_score_configuration',
  definition(t) {
    t.model.id();
    t.model.mid();
    t.model.label();
    t.model.set_class();
    t.model.company_id();
    t.model.uid();
    t.model.creation_date();
  },
});

export const news_score_configurationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.news_score_configuration();
    t.crud.news_score_configurations({ filtering: true, ordering: true });
  },
});

export const news_score_configurationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenews_score_configuration();
    t.crud.updateOnenews_score_configuration();
    t.crud.upsertOnenews_score_configuration();
    t.crud.deleteOnenews_score_configuration();

    t.crud.updateManynews_score_configuration();
    t.crud.deleteManynews_score_configuration();
  },
});
