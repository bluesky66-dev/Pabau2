import { objectType, extendType } from 'nexus';

export const zfrances_documents = objectType({
  name: 'zfrances_documents',
  definition(t) {
    t.model.id();
    t.model.patientId();
    t.model.dateCreated();
    t.model.sessionNOtes();
    t.model.custom_user_name();
    t.model.added();
  },
});

export const zfrances_documentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zfrances_documents();
    t.crud.zfrances_documents({ filtering: true, ordering: true });
  },
});

export const zfrances_documentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezfrances_documents();
    t.crud.updateOnezfrances_documents();
    t.crud.upsertOnezfrances_documents();
    t.crud.deleteOnezfrances_documents();

    t.crud.updateManyzfrances_documents();
    t.crud.deleteManyzfrances_documents();
  },
});
