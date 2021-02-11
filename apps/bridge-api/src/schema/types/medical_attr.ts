import { objectType, extendType } from 'nexus';

export const medical_attr = objectType({
  name: 'medical_attr',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.created_at();
    t.model.updated_at();
    t.model.deleted_at();
    t.model.occupier();
    t.model.description();
  },
});

export const medical_attrQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_attr();
    t.crud.medical_attrs({ filtering: true, ordering: true });
  },
});

export const medical_attrMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_attr();
    t.crud.updateOnemedical_attr();
    t.crud.upsertOnemedical_attr();
    t.crud.deleteOnemedical_attr();

    t.crud.updateManymedical_attr();
    t.crud.deleteManymedical_attr();
  },
});
