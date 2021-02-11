import { objectType, extendType } from 'nexus';

export const task_manager_lists = objectType({
  name: 'task_manager_lists',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.occupier();
    t.model.by_uid();
    t.model.uid();
  },
});

export const task_manager_listsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.task_manager_lists();
    t.crud.task_manager_lists({ filtering: true, ordering: true });
  },
});

export const task_manager_listsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetask_manager_lists();
    t.crud.updateOnetask_manager_lists();
    t.crud.upsertOnetask_manager_lists();
    t.crud.deleteOnetask_manager_lists();

    t.crud.updateManytask_manager_lists();
    t.crud.deleteManytask_manager_lists();
  },
});
