import { objectType, extendType } from 'nexus';

export const cm_linkprw = objectType({
  name: 'cm_linkprw',
  definition(t) {
    t.model.ID();
    t.model.postId();
    t.model.url();
    t.model.video();
    t.model.videoIframe();
    t.model.title();
    t.model.content();
    t.model.thumb();
    t.model.hrefurl();
    t.model.imageId();
  },
});

export const cm_linkprwQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_linkprw();
    t.crud.cm_linkprws({ filtering: true, ordering: true });
  },
});

export const cm_linkprwMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_linkprw();
    t.crud.updateOnecm_linkprw();
    t.crud.upsertOnecm_linkprw();
    t.crud.deleteOnecm_linkprw();

    t.crud.updateManycm_linkprw();
    t.crud.deleteManycm_linkprw();
  },
});
