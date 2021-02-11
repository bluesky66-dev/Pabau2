import { objectType, extendType } from 'nexus';

export const medical_approval_notes = objectType({
  name: 'medical_approval_notes',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.appointment_id();
    t.model.actioned_by();
    t.model.path_taken_id();
    t.model.note();
    t.model.response();
    t.model.created_date();
    t.model.status();
    t.model.requested_by();
    t.model.response_date();
  },
});

export const medical_approval_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_approval_notes();
    t.crud.medical_approval_notes({ filtering: true, ordering: true });
  },
});

export const medical_approval_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_approval_notes();
    t.crud.updateOnemedical_approval_notes();
    t.crud.upsertOnemedical_approval_notes();
    t.crud.deleteOnemedical_approval_notes();

    t.crud.updateManymedical_approval_notes();
    t.crud.deleteManymedical_approval_notes();
  },
});
