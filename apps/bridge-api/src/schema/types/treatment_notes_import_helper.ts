import { objectType, extendType } from 'nexus';

export const treatment_notes_import_helper = objectType({
  name: 'treatment_notes_import_helper',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.custom_contact_id();
    t.model.custom_appt_id();
    t.model.custom_contact_email();
    t.model.Fname();
    t.model.Lname();
    t.model.custom_user_name();
    t.model.Subject();
    t.model.Note();
    t.model.created_date();
    t.model.occupier();
    t.model.imported();
    t.model.added();
    t.model.old_id();
    t.model.old_note();
  },
});

export const treatment_notes_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.treatment_notes_import_helper();
    t.crud.treatment_notes_import_helpers({ filtering: true, ordering: true });
  },
});

export const treatment_notes_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetreatment_notes_import_helper();
    t.crud.updateOnetreatment_notes_import_helper();
    t.crud.upsertOnetreatment_notes_import_helper();
    t.crud.deleteOnetreatment_notes_import_helper();

    t.crud.updateManytreatment_notes_import_helper();
    t.crud.deleteManytreatment_notes_import_helper();
  },
});
