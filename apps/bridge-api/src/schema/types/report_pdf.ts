import { objectType, extendType } from 'nexus';

export const report_pdf = objectType({
  name: 'report_pdf',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.occupier();
    t.model.content();
    t.model.datetime();
    t.model.unique_id();
    t.model.guid();
  },
});

export const report_pdfQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.report_pdf();
    t.crud.report_pdfs({ filtering: true, ordering: true });
  },
});

export const report_pdfMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnereport_pdf();
    t.crud.updateOnereport_pdf();
    t.crud.upsertOnereport_pdf();
    t.crud.deleteOnereport_pdf();

    t.crud.updateManyreport_pdf();
    t.crud.deleteManyreport_pdf();
  },
});
