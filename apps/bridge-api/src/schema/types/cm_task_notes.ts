import { objectType, extendType } from 'nexus';

export const cm_task_notes = objectType({
  name: 'cm_task_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.TaskID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_task_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_task_notes();
    t.crud.cm_task_notes({ filtering: true, ordering: true });
  },
});

export const cm_task_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_task_notes();
    t.crud.updateOnecm_task_notes();
    t.crud.upsertOnecm_task_notes();
    t.crud.deleteOnecm_task_notes();

    t.crud.updateManycm_task_notes();
    t.crud.deleteManycm_task_notes();
  },
});
