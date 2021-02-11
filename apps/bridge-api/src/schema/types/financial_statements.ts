import { objectType, extendType } from 'nexus';

export const financial_statements = objectType({
  name: 'financial_statements',
  definition(t) {
    t.model.id();
    t.model.statement_no();
    t.model.url();
    t.model.contact_id();
    t.model.insurer_id();
    t.model.occupier();
    t.model.creation_date();
  },
});

export const financial_statementsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.financial_statements();
    t.crud.financial_statements({ filtering: true, ordering: true });
  },
});

export const financial_statementsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnefinancial_statements();
    t.crud.updateOnefinancial_statements();
    t.crud.upsertOnefinancial_statements();
    t.crud.deleteOnefinancial_statements();

    t.crud.updateManyfinancial_statements();
    t.crud.deleteManyfinancial_statements();
  },
});
