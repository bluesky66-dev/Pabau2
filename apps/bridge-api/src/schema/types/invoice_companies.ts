import { objectType, extendType } from 'nexus';

export const invoice_companies = objectType({
  name: 'invoice_companies',
  definition(t) {
    t.model.id();
    t.model.company_name();
    t.model.company_id();
    t.model.payable_to();
    t.model.logo();
    t.model.company_details();
    t.model.larger_logo();
    t.model.branch_location_id();
    t.model.logo_position();
  },
});

export const invoice_companiesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.invoice_companies();
    t.crud.invoice_companies({ filtering: true, ordering: true });
  },
});

export const invoice_companiesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinvoice_companies();
    t.crud.updateOneinvoice_companies();
    t.crud.upsertOneinvoice_companies();
    t.crud.deleteOneinvoice_companies();

    t.crud.updateManyinvoice_companies();
    t.crud.deleteManyinvoice_companies();
  },
});
