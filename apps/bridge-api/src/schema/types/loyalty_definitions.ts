import { objectType, extendType } from 'nexus';

export const loyalty_definitions = objectType({
  name: 'loyalty_definitions',
  definition(t) {
    t.model.id();
    t.model.promotion_type();
    t.model.promotion_description();
    t.model.sub_description();
    t.model.promotion_name();
    t.model.disabled();
    t.model.type();
  },
});

export const loyalty_definitionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.loyalty_definitions();
    t.crud.loyalty_definitions({ filtering: true, ordering: true });
  },
});

export const loyalty_definitionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneloyalty_definitions();
    t.crud.updateOneloyalty_definitions();
    t.crud.upsertOneloyalty_definitions();
    t.crud.deleteOneloyalty_definitions();

    t.crud.updateManyloyalty_definitions();
    t.crud.deleteManyloyalty_definitions();
  },
});
