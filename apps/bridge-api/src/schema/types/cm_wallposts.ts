import { objectType, extendType } from 'nexus';

export const cm_wallposts = objectType({
  name: 'cm_wallposts',
  definition(t) {
    t.model.ID();
    t.model.userId();
    t.model.company();
    t.model.description();
    t.model.attachment();
    t.model.linkprw();
    t.model.post_time();
    t.model.status();
    t.model.ipAddress();
  },
});

export const cm_wallpostsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_wallposts();
    t.crud.cm_wallposts({ filtering: true, ordering: true });
  },
});

export const cm_wallpostsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_wallposts();
    t.crud.updateOnecm_wallposts();
    t.crud.upsertOnecm_wallposts();
    t.crud.deleteOnecm_wallposts();

    t.crud.updateManycm_wallposts();
    t.crud.deleteManycm_wallposts();
  },
});
