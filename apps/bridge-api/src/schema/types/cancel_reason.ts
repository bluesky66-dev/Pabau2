import { objectType, extendType } from 'nexus';

export const cancel_reason = objectType({
  name: 'cancel_reason',
  definition(t) {
    t.model.id();
    t.model.reason_name();
    t.model.occupier();
    t.model.late_cancel();
    t.model.apply_cancellation_policy();
    t.model.created_at();
    t.model.modified_at();
  },
});

export const cancel_reasonQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cancel_reason();
    t.crud.cancel_reasons({ filtering: true, ordering: true });
  },
});

export const cancel_reasonMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecancel_reason();
    t.crud.updateOnecancel_reason();
    t.crud.upsertOnecancel_reason();
    t.crud.deleteOnecancel_reason();

    t.crud.updateManycancel_reason();
    t.crud.deleteManycancel_reason();
  },
});
