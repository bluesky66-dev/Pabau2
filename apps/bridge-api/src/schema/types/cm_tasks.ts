import { objectType, extendType } from 'nexus';

export const cm_tasks = objectType({
  name: 'cm_tasks',
  definition(t) {
    t.model.ID();
    t.model.occupier();
    t.model.userid();
    t.model.title();
    t.model.description();
    t.model.attachment();
    t.model.status();
    t.model.CreatedDate();
    t.model.EditedDate();
    t.model.custom_task_name();
  },
});

export const cm_tasksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_tasks();
    t.crud.cm_tasks({ filtering: true, ordering: true });
  },
});

export const cm_tasksMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_tasks();
    t.crud.updateOnecm_tasks();
    t.crud.upsertOnecm_tasks();
    t.crud.deleteOnecm_tasks();

    t.crud.updateManycm_tasks();
    t.crud.deleteManycm_tasks();
  },
});
