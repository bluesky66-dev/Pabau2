import { objectType, extendType } from 'nexus';

export const nhs_adjust_attr = objectType({
  name: 'nhs_adjust_attr',
  definition(t) {
    t.model.id();
    t.model.nhs_attr_id();
    t.model.nhs_risk_adjust_id();
    t.model.start();
    t.model.end();
    t.model.value();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.type();
    t.model.nhs_locum_id();
  },
});

export const nhs_adjust_attrQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.nhs_adjust_attr();
    t.crud.nhs_adjust_attrs({ filtering: true, ordering: true });
  },
});

export const nhs_adjust_attrMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnenhs_adjust_attr();
    t.crud.updateOnenhs_adjust_attr();
    t.crud.upsertOnenhs_adjust_attr();
    t.crud.deleteOnenhs_adjust_attr();

    t.crud.updateManynhs_adjust_attr();
    t.crud.deleteManynhs_adjust_attr();
  },
});
