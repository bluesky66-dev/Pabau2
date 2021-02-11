import { objectType, extendType } from 'nexus';

export const support_guides = objectType({
  name: 'support_guides',
  definition(t) {
    t.model.id();
    t.model.page();
    t.model.link();
  },
});

export const support_guidesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.support_guides();
    t.crud.support_guides({ filtering: true, ordering: true });
  },
});

export const support_guidesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesupport_guides();
    t.crud.updateOnesupport_guides();
    t.crud.upsertOnesupport_guides();
    t.crud.deleteOnesupport_guides();

    t.crud.updateManysupport_guides();
    t.crud.deleteManysupport_guides();
  },
});
