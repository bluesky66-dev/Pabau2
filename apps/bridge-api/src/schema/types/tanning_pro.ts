import { objectType, extendType } from 'nexus';

export const tanning_pro = objectType({
  name: 'tanning_pro',
  definition(t) {
    t.model.id();
    t.model.amount();
    t.model.contact_id();
    t.model.company_id();
  },
});

export const tanning_proQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tanning_pro();
    t.crud.tanning_pros({ filtering: true, ordering: true });
  },
});

export const tanning_proMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetanning_pro();
    t.crud.updateOnetanning_pro();
    t.crud.upsertOnetanning_pro();
    t.crud.deleteOnetanning_pro();

    t.crud.updateManytanning_pro();
    t.crud.deleteManytanning_pro();
  },
});
