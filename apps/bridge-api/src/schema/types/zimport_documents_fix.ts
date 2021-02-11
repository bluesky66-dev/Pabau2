import { objectType, extendType } from 'nexus';

export const zimport_documents_fix = objectType({
  name: 'zimport_documents_fix',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.file_id();
    t.model.filename();
    t.model.extension();
    t.model.date_time();
    t.model.custom_contact_id();
    t.model.custom_user_name();
  },
});

export const zimport_documents_fixQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_documents_fix();
    t.crud.zimport_documents_fixes({ filtering: true, ordering: true });
  },
});

export const zimport_documents_fixMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_documents_fix();
    t.crud.updateOnezimport_documents_fix();
    t.crud.upsertOnezimport_documents_fix();
    t.crud.deleteOnezimport_documents_fix();

    t.crud.updateManyzimport_documents_fix();
    t.crud.deleteManyzimport_documents_fix();
  },
});
