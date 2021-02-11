import { objectType, extendType } from 'nexus';

export const zdoctor_users = objectType({
  name: 'zdoctor_users',
  definition(t) {
    t.model.id();
    t.model.custom_id();
    t.model.full_name();
    t.model.occupier();
  },
});

export const zdoctor_usersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zdoctor_users();
    t.crud.zdoctor_users({ filtering: true, ordering: true });
  },
});

export const zdoctor_usersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezdoctor_users();
    t.crud.updateOnezdoctor_users();
    t.crud.upsertOnezdoctor_users();
    t.crud.deleteOnezdoctor_users();

    t.crud.updateManyzdoctor_users();
    t.crud.deleteManyzdoctor_users();
  },
});
