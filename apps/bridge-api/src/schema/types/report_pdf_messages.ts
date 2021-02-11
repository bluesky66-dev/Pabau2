import { objectType, extendType } from 'nexus';

export const report_pdf_messages = objectType({
  name: 'report_pdf_messages',
  definition(t) {
    t.model.id();
    t.model.report_pdf_id();
    t.model.email();
    t.model.subject();
    t.model.body();
    t.model.occupier();
    t.model.user_id();
  },
});

export const report_pdf_messagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.report_pdf_messages();
    t.crud.report_pdf_messages({ filtering: true, ordering: true });
  },
});

export const report_pdf_messagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereport_pdf_messages();
    t.crud.updateOnereport_pdf_messages();
    t.crud.upsertOnereport_pdf_messages();
    t.crud.deleteOnereport_pdf_messages();

    t.crud.updateManyreport_pdf_messages();
    t.crud.deleteManyreport_pdf_messages();
  },
});
