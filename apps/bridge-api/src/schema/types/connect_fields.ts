import { objectType, extendType } from 'nexus';

export const connect_fields = objectType({
  name: 'connect_fields',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.first_name();
    t.model.last_name();
    t.model.mobile();
    t.model.address();
    t.model.city();
    t.model.county();
    t.model.postcode();
    t.model.country();
  },
});

export const connect_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.connect_fields();
    t.crud.connect_fields({ filtering: true, ordering: true });
  },
});

export const connect_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconnect_fields();
    t.crud.updateOneconnect_fields();
    t.crud.upsertOneconnect_fields();
    t.crud.deleteOneconnect_fields();

    t.crud.updateManyconnect_fields();
    t.crud.deleteManyconnect_fields();
  },
});
