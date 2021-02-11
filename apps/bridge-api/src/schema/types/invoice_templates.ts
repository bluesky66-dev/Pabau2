import { objectType, extendType } from 'nexus';

export const invoice_templates = objectType({
  name: 'invoice_templates',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.type();
    t.model.description();
    t.model.style();
    t.model.activity();
    t.model.appearance();
    t.model.payment_information();
    t.model.header();
    t.model.footer();
    t.model.date_created();
    t.model.date_updated();
    t.model.occupier();
    t.model.stripe_button();
  },
});

export const invoice_templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.invoice_templates();
    t.crud.invoice_templates({ filtering: true, ordering: true });
  },
});

export const invoice_templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinvoice_templates();
    t.crud.updateOneinvoice_templates();
    t.crud.upsertOneinvoice_templates();
    t.crud.deleteOneinvoice_templates();

    t.crud.updateManyinvoice_templates();
    t.crud.deleteManyinvoice_templates();
  },
});
