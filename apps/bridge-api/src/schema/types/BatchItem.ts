import { objectType, extendType } from 'nexus';

export const BatchItem = objectType({
  name: 'BatchItem',
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

export const batchItemQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.batchItem();
    t.crud.batchItems({ filtering: true, ordering: true });

    t.field('batchItemsCount', {
      type: 'Int',
      args: {
        where: 'BatchItemWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.batchItem.count(args);
      },
    });
  },
});

export const batchItemMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBatchItem();
    t.crud.updateOneBatchItem();
    t.crud.upsertOneBatchItem();
    t.crud.deleteOneBatchItem();

    t.crud.updateManyBatchItem();
    t.crud.deleteManyBatchItem();
  },
});
