import { objectType, extendType } from 'nexus';

export const connect_registration_fields = objectType({
  name: 'connect_registration_fields',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.fields_data();
  },
});

export const connect_registration_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.connect_registration_fields();
    t.crud.connect_registration_fields({ filtering: true, ordering: true });
  },
});

export const connect_registration_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconnect_registration_fields();
    t.crud.updateOneconnect_registration_fields();
    t.crud.upsertOneconnect_registration_fields();
    t.crud.deleteOneconnect_registration_fields();

    t.crud.updateManyconnect_registration_fields();
    t.crud.deleteManyconnect_registration_fields();
  },
});
