import { objectType, extendType } from 'nexus';

export const company_services_equipment = objectType({
  name: 'company_services_equipment',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.service_id();
    t.model.equipment_id();
    t.model.equipment_quantity();
    t.model.priority_order();
  },
});

export const company_services_equipmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_equipment();
    t.crud.company_services_equipments({ filtering: true, ordering: true });
  },
});

export const company_services_equipmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_equipment();
    t.crud.updateOnecompany_services_equipment();
    t.crud.upsertOnecompany_services_equipment();
    t.crud.deleteOnecompany_services_equipment();

    t.crud.updateManycompany_services_equipment();
    t.crud.deleteManycompany_services_equipment();
  },
});
