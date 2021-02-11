import { objectType, extendType } from 'nexus';

export const zimport_documents = objectType({
  name: 'zimport_documents',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.orig_filename();
    t.model.filename();
    t.model.filetype();
    t.model.contact_custom_id();
    t.model.date_created();
    t.model.custom_id();
    t.model.title();
    t.model.added();
    t.model.custom_contact_name();
    t.model.custom_user_name();
    t.model.contact_id();
    t.model.old_filename();
  },
});

export const zimport_documentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_documents();
    t.crud.zimport_documents({ filtering: true, ordering: true });
  },
});

export const zimport_documentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_documents();
    t.crud.updateOnezimport_documents();
    t.crud.upsertOnezimport_documents();
    t.crud.deleteOnezimport_documents();

    t.crud.updateManyzimport_documents();
    t.crud.deleteManyzimport_documents();
  },
});
