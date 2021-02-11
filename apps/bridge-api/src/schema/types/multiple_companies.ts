import { objectType, extendType } from 'nexus';

export const multiple_companies = objectType({
  name: 'multiple_companies',
  definition(t) {
    t.model.id();
    t.model.head_office_id();
    t.model.company_id();
  },
});

export const multiple_companiesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.multiple_companies();
    t.crud.multiple_companies({ filtering: true, ordering: true });
  },
});

export const multiple_companiesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemultiple_companies();
    t.crud.updateOnemultiple_companies();
    t.crud.upsertOnemultiple_companies();
    t.crud.deleteOnemultiple_companies();

    t.crud.updateManymultiple_companies();
    t.crud.deleteManymultiple_companies();
  },
});
