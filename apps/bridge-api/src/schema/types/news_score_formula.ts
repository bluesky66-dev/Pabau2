import { objectType, extendType } from 'nexus';

export const news_score_formula = objectType({
  name: 'news_score_formula',
  definition(t) {
    t.model.id();
    t.model.news_score_id();
    t.model.formula();
    t.model.single_val();
    t.model.from_val();
    t.model.to_val();
    t.model.score();
    t.model.color();
    t.model.alert_rmo_ios();
    t.model.alert_rmo_email();
    t.model.alert_rmo_sms();
    t.model.alert_rmo_web();
  },
});

export const news_score_formulaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.news_score_formula();
    t.crud.news_score_formulas({ filtering: true, ordering: true });
  },
});

export const news_score_formulaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenews_score_formula();
    t.crud.updateOnenews_score_formula();
    t.crud.upsertOnenews_score_formula();
    t.crud.deleteOnenews_score_formula();

    t.crud.updateManynews_score_formula();
    t.crud.deleteManynews_score_formula();
  },
});
