import { objectType, extendType } from 'nexus';

export const url_shortener = objectType({
  name: 'url_shortener',
  definition(t) {
    t.model.id();
    t.model.shortcode();
    t.model.full_url();
    t.model.company_id();
    t.model.date_created();
    t.model.clicks();
  },
});

export const url_shortenerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.url_shortener();
    t.crud.url_shorteners({ filtering: true, ordering: true });
  },
});

export const url_shortenerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneurl_shortener();
    t.crud.updateOneurl_shortener();
    t.crud.upsertOneurl_shortener();
    t.crud.deleteOneurl_shortener();

    t.crud.updateManyurl_shortener();
    t.crud.deleteManyurl_shortener();
  },
});
