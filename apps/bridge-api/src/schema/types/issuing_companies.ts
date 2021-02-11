import { objectType, extendType } from 'nexus';

export const issuing_companies = objectType({
  name: 'issuing_companies',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.is_active();
    t.model.name();
    t.model.abbreviation();
    t.model.address();
    t.model.address2();
    t.model.city();
    t.model.postcode();
    t.model.website();
    t.model.email();
    t.model.phone();
    t.model.vat_registered();
    t.model.invoice_template_id();
    t.model.custom_id();
    t.model.invoice_prefix();
    t.model.invoice_starting_number();
  },
});

export const issuing_companiesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.issuing_companies();
    t.crud.issuing_companies({ filtering: true, ordering: true });
  },
});

export const issuing_companiesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneissuing_companies();
    t.crud.updateOneissuing_companies();
    t.crud.upsertOneissuing_companies();
    t.crud.deleteOneissuing_companies();

    t.crud.updateManyissuing_companies();
    t.crud.deleteManyissuing_companies();
  },
});
