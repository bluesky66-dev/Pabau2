import { objectType, extendType } from 'nexus';

export const tutorial_system = objectType({
  name: 'tutorial_system',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.company_id();
    t.model.tutorial_section();
    t.model.tutorial_name();
  },
});

export const tutorial_systemQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tutorial_system();
    t.crud.tutorial_systems({ filtering: true, ordering: true });
  },
});

export const tutorial_systemMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetutorial_system();
    t.crud.updateOnetutorial_system();
    t.crud.upsertOnetutorial_system();
    t.crud.deleteOnetutorial_system();

    t.crud.updateManytutorial_system();
    t.crud.deleteManytutorial_system();
  },
});
