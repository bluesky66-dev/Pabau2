import { objectType, extendType } from 'nexus';

export const invoice_distributions = objectType({
  name: 'invoice_distributions',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.allow_edit();
    t.model.set_as_default();
    t.model.occupier();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const invoice_distributionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.invoice_distributions();
    t.crud.invoice_distributions({ filtering: true, ordering: true });
  },
});

export const invoice_distributionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinvoice_distributions();
    t.crud.updateOneinvoice_distributions();
    t.crud.upsertOneinvoice_distributions();
    t.crud.deleteOneinvoice_distributions();

    t.crud.updateManyinvoice_distributions();
    t.crud.deleteManyinvoice_distributions();
  },
});
