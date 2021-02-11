import { objectType, extendType } from 'nexus';

export const scanner_batches = objectType({
  name: 'scanner_batches',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.batch_id();
    t.model.date_created();
    t.model.category_card();
  },
});

export const scanner_batchesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.scanner_batches();
    t.crud.scanner_batches({ filtering: true, ordering: true });
  },
});

export const scanner_batchesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnescanner_batches();
    t.crud.updateOnescanner_batches();
    t.crud.upsertOnescanner_batches();
    t.crud.deleteOnescanner_batches();

    t.crud.updateManyscanner_batches();
    t.crud.deleteManyscanner_batches();
  },
});
