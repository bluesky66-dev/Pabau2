import { objectType, extendType } from 'nexus';

export const services_master_category = objectType({
  name: 'services_master_category',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.occupier();
    t.model.ord();
    t.model.type();
    t.model.image();
  },
});

export const services_master_categoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.services_master_category();
    t.crud.services_master_categories({ filtering: true, ordering: true });
  },
});

export const services_master_categoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneservices_master_category();
    t.crud.updateOneservices_master_category();
    t.crud.upsertOneservices_master_category();
    t.crud.deleteOneservices_master_category();

    t.crud.updateManyservices_master_category();
    t.crud.deleteManyservices_master_category();
  },
});
