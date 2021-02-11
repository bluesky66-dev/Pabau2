import { objectType, extendType } from 'nexus';

export const batches = objectType({
  name: 'batches',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.order_id();
    t.model.order_item_id();
    t.model.batch_no();
    t.model.qty();
    t.model.uid();
    t.model.creation_date();
    t.model.expiry_date();
  },
});

export const batchesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.batches();
    t.crud.batches({ filtering: true, ordering: true });
  },
});

export const batchesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebatches();
    t.crud.updateOnebatches();
    t.crud.upsertOnebatches();
    t.crud.deleteOnebatches();

    t.crud.updateManybatches();
    t.crud.deleteManybatches();
  },
});
