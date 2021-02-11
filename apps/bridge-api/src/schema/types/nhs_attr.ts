import { objectType, extendType } from 'nexus';

export const nhs_attr = objectType({
  name: 'nhs_attr',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.nhs_locum_id();
  },
});

export const nhs_attrQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_attr();
    t.crud.nhs_attrs({ filtering: true, ordering: true });
  },
});

export const nhs_attrMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_attr();
    t.crud.updateOnenhs_attr();
    t.crud.upsertOnenhs_attr();
    t.crud.deleteOnenhs_attr();

    t.crud.updateManynhs_attr();
    t.crud.deleteManynhs_attr();
  },
});
