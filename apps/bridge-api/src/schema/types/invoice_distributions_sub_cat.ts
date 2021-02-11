import { objectType, extendType } from 'nexus';

export const invoice_distributions_sub_cat = objectType({
  name: 'invoice_distributions_sub_cat',
  definition(t) {
    t.model.id();
    t.model.distribution_id();
    t.model.name();
    t.model.value();
    t.model.description();
    t.model.occupier();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const invoice_distributions_sub_catQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.invoice_distributions_sub_cat();
    t.crud.invoice_distributions_sub_cats({ filtering: true, ordering: true });
  },
});

export const invoice_distributions_sub_catMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinvoice_distributions_sub_cat();
    t.crud.updateOneinvoice_distributions_sub_cat();
    t.crud.upsertOneinvoice_distributions_sub_cat();
    t.crud.deleteOneinvoice_distributions_sub_cat();

    t.crud.updateManyinvoice_distributions_sub_cat();
    t.crud.deleteManyinvoice_distributions_sub_cat();
  },
});
