import { objectType, extendType } from 'nexus';

export const tm_subtasks = objectType({
  name: 'tm_subtasks',
  definition(t) {
    t.model.id();
    t.model.parent_id();
    t.model.task_name();
    t.model.task_description();
    t.model.delivery_date();
    t.model.payments();
    t.model.assigned_to();
    t.model.status();
    t.model.company_id();
  },
});

export const tm_subtasksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tm_subtasks();
    t.crud.tm_subtasks({ filtering: true, ordering: true });
  },
});

export const tm_subtasksMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetm_subtasks();
    t.crud.updateOnetm_subtasks();
    t.crud.upsertOnetm_subtasks();
    t.crud.deleteOnetm_subtasks();

    t.crud.updateManytm_subtasks();
    t.crud.deleteManytm_subtasks();
  },
});
