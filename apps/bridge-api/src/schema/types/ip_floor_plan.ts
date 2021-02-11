import { objectType, extendType } from 'nexus';

export const ip_floor_plan = objectType({
  name: 'ip_floor_plan',
  definition(t) {
    t.model.id();
    t.model.floor_id();
    t.model.bed_id();
    t.model.plan_info();
    t.model.company_id();
    t.model.created_date();
    t.model.updated_date();
  },
});

export const ip_floor_planQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_floor_plan();
    t.crud.ip_floor_plans({ filtering: true, ordering: true });
  },
});

export const ip_floor_planMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_floor_plan();
    t.crud.updateOneip_floor_plan();
    t.crud.upsertOneip_floor_plan();
    t.crud.deleteOneip_floor_plan();

    t.crud.updateManyip_floor_plan();
    t.crud.deleteManyip_floor_plan();
  },
});
