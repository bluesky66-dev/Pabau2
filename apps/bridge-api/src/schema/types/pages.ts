import { objectType, extendType } from 'nexus';

export const pages = objectType({
  name: 'pages',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.link();
    t.model.parent();
    t.model.category();
    t.model.showcase();
    t.model.description();
    t.model.features();
    t.model.new();
    t.model.img();
    t.model.admin();
    t.model.order();
    t.model.cover();
    t.model.tickier_order();
    t.model.friendly_name();
    t.model.app_weight();
    t.model.video_link();
    t.model.large_thumb();
    t.model.inactive();
    t.model.private_key();
    t.model.new_url();
  },
});

export const pagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pages();
    t.crud.pages({ filtering: true, ordering: true });
  },
});

export const pagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepages();
    t.crud.updateOnepages();
    t.crud.upsertOnepages();
    t.crud.deleteOnepages();

    t.crud.updateManypages();
    t.crud.deleteManypages();
  },
});
