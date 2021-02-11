import { objectType, extendType } from 'nexus';

export const cm_invoice_notes = objectType({
  name: 'cm_invoice_notes',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.InvoiceID();
    t.model.Note();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_invoice_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_invoice_notes();
    t.crud.cm_invoice_notes({ filtering: true, ordering: true });
  },
});

export const cm_invoice_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_invoice_notes();
    t.crud.updateOnecm_invoice_notes();
    t.crud.upsertOnecm_invoice_notes();
    t.crud.deleteOnecm_invoice_notes();

    t.crud.updateManycm_invoice_notes();
    t.crud.deleteManycm_invoice_notes();
  },
});
