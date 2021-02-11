import { objectType, extendType } from 'nexus';

export const flagged_items = objectType({
  name: 'flagged_items',
  definition(t) {
    t.model.id();
    t.model.target_id();
    t.model.type();
    t.model.description();
    t.model.raised_by();
  },
});

export const flagged_itemsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.flagged_items();
    t.crud.flagged_items({ filtering: true, ordering: true });
  },
});

export const flagged_itemsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneflagged_items();
    t.crud.updateOneflagged_items();
    t.crud.upsertOneflagged_items();
    t.crud.deleteOneflagged_items();

    t.crud.updateManyflagged_items();
    t.crud.deleteManyflagged_items();
  },
});
