import { objectType, extendType } from 'nexus';

export const cm_task_assignment = objectType({
  name: 'cm_task_assignment',
  definition(t) {
    t.model.ID();
    t.model.taskid();
    t.model.assignedby();
    t.model.assignedto();
    t.model.taskStatus();
    t.model.CreatedDate();
  },
});

export const cm_task_assignmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_task_assignment();
    t.crud.cm_task_assignments({ filtering: true, ordering: true });
  },
});

export const cm_task_assignmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_task_assignment();
    t.crud.updateOnecm_task_assignment();
    t.crud.upsertOnecm_task_assignment();
    t.crud.deleteOnecm_task_assignment();

    t.crud.updateManycm_task_assignment();
    t.crud.deleteManycm_task_assignment();
  },
});
