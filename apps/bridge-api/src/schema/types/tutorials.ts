import { objectType, extendType } from 'nexus';

export const tutorials = objectType({
  name: 'tutorials',
  definition(t) {
    t.model.id();
    t.model.tutorial_name();
    t.model.video_id();
    t.model.section();
    t.model.tutorial_order();
  },
});

export const tutorialsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tutorials();
    t.crud.tutorials({ filtering: true, ordering: true });
  },
});

export const tutorialsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetutorials();
    t.crud.updateOnetutorials();
    t.crud.upsertOnetutorials();
    t.crud.deleteOnetutorials();

    t.crud.updateManytutorials();
    t.crud.deleteManytutorials();
  },
});
