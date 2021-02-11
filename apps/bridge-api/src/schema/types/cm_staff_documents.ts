import { objectType, extendType } from 'nexus';

export const cm_staff_documents = objectType({
  name: 'cm_staff_documents',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.Date();
    t.model.Name();
    t.model.Type();
    t.model.File();
  },
});

export const cm_staff_documentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_documents();
    t.crud.cm_staff_documents({ filtering: true, ordering: true });
  },
});

export const cm_staff_documentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_documents();
    t.crud.updateOnecm_staff_documents();
    t.crud.upsertOnecm_staff_documents();
    t.crud.deleteOnecm_staff_documents();

    t.crud.updateManycm_staff_documents();
    t.crud.deleteManycm_staff_documents();
  },
});
