import { objectType, extendType } from 'nexus';

export const task_targets = objectType({
  name: 'task_targets',
  definition(t) {
    t.model.id();
    t.model.target_type();
    t.model.target_number();
    t.model.task_id();
    t.model.target_name();
    t.model.from_date();
    t.model.to_date();
  },
});

export const task_targetsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.task_targets();
    t.crud.task_targets({ filtering: true, ordering: true });
  },
});

export const task_targetsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetask_targets();
    t.crud.updateOnetask_targets();
    t.crud.upsertOnetask_targets();
    t.crud.deleteOnetask_targets();

    t.crud.updateManytask_targets();
    t.crud.deleteManytask_targets();
  },
});
