import { objectType, extendType } from 'nexus';

export const treatment_summary = objectType({
  name: 'treatment_summary',
  definition(t) {
    t.model.id();
    t.model.treatment_id();
    t.model.product_id();
    t.model.number_of_measures();
    t.model.numbers_of_injects();
    t.model.batch_number();
    t.model.expiry_date();
    t.model.other();
    t.model.company_id();
    t.model.contact_id();
    t.model.date_created();
  },
});

export const treatment_summaryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.treatment_summary();
    t.crud.treatment_summaries({ filtering: true, ordering: true });
  },
});

export const treatment_summaryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetreatment_summary();
    t.crud.updateOnetreatment_summary();
    t.crud.upsertOnetreatment_summary();
    t.crud.deleteOnetreatment_summary();

    t.crud.updateManytreatment_summary();
    t.crud.deleteManytreatment_summary();
  },
});
