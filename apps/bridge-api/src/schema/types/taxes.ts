import { objectType, extendType } from 'nexus';

export const taxes = objectType({
  name: 'taxes',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.value();
    t.model.rate();
    t.model.hidden();
    t.model.default();
    t.model.occupier();
    t.model.custom_id();
  },
});

export const taxesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.taxes();
    t.crud.taxes({ filtering: true, ordering: true });
  },
});

export const taxesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetaxes();
    t.crud.updateOnetaxes();
    t.crud.upsertOnetaxes();
    t.crud.deleteOnetaxes();

    t.crud.updateManytaxes();
    t.crud.deleteManytaxes();
  },
});
