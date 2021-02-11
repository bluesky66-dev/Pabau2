import { objectType, extendType } from 'nexus';

export const cm_wallpost_pinned = objectType({
  name: 'cm_wallpost_pinned',
  definition(t) {
    t.model.post_id();
    t.model.occupier();
    t.model.user_posted();
    t.model.user_target();
    t.model.from_pabau();
    t.model.from_source();
    t.model.title();
    t.model.message();
    t.model.url();
    t.model.date_expires();
    t.model.date_created();
    t.model.color_background();
    t.model.color_text();
    t.model.icon_image();
  },
});

export const cm_wallpost_pinnedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_wallpost_pinned();
    t.crud.cm_wallpost_pinneds({ filtering: true, ordering: true });
  },
});

export const cm_wallpost_pinnedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_wallpost_pinned();
    t.crud.updateOnecm_wallpost_pinned();
    t.crud.upsertOnecm_wallpost_pinned();
    t.crud.deleteOnecm_wallpost_pinned();

    t.crud.updateManycm_wallpost_pinned();
    t.crud.deleteManycm_wallpost_pinned();
  },
});
