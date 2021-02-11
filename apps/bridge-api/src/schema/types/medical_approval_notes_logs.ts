import { objectType, extendType } from 'nexus';

export const medical_approval_notes_logs = objectType({
  name: 'medical_approval_notes_logs',
  definition(t) {
    t.model.id();
    t.model.medical_approval_id();
    t.model.company_id();
    t.model.actioned_by();
    t.model.status();
    t.model.response();
    t.model.date();
  },
});

export const medical_approval_notes_logsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_approval_notes_logs();
    t.crud.medical_approval_notes_logs({ filtering: true, ordering: true });
  },
});

export const medical_approval_notes_logsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_approval_notes_logs();
    t.crud.updateOnemedical_approval_notes_logs();
    t.crud.upsertOnemedical_approval_notes_logs();
    t.crud.deleteOnemedical_approval_notes_logs();

    t.crud.updateManymedical_approval_notes_logs();
    t.crud.deleteManymedical_approval_notes_logs();
  },
});
