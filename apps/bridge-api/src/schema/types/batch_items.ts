import { objectType, extendType } from 'nexus';

export const batch_items = objectType({
  name: 'batch_items',
  definition(t) {
    t.model.id();
    t.model.batch_id();
    t.model.company_id();
    t.model.product_id();
    t.model.usage_date();
    t.model.patient_id();
    t.model.created_by_id();
    t.model.qty();
    t.model.appointment_id();
    t.model.batch_flag();
  },
});

export const batch_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.batch_items();
    t.crud.batch_items({ filtering: true, ordering: true });
  },
});

export const batch_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebatch_items();
    t.crud.updateOnebatch_items();
    t.crud.upsertOnebatch_items();
    t.crud.deleteOnebatch_items();

    t.crud.updateManybatch_items();
    t.crud.deleteManybatch_items();
  },
});
