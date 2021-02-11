import { objectType, extendType } from 'nexus';

export const cm_tagging = objectType({
  name: 'cm_tagging',
  definition(t) {
    t.model.ID();
    t.model.postId();
    t.model.type();
    t.model.tag_id();
  },
});

export const cm_taggingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_tagging();
    t.crud.cm_taggings({ filtering: true, ordering: true });
  },
});

export const cm_taggingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_tagging();
    t.crud.updateOnecm_tagging();
    t.crud.upsertOnecm_tagging();
    t.crud.deleteOnecm_tagging();

    t.crud.updateManycm_tagging();
    t.crud.deleteManycm_tagging();
  },
});
