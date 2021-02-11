import { objectType, extendType } from 'nexus';

export const ip_specialities_members = objectType({
  name: 'ip_specialities_members',
  definition(t) {
    t.model.id();
    t.model.specialities_id();
    t.model.member_id();
  },
});

export const ip_specialities_membersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_specialities_members();
    t.crud.ip_specialities_members({ filtering: true, ordering: true });
  },
});

export const ip_specialities_membersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_specialities_members();
    t.crud.updateOneip_specialities_members();
    t.crud.upsertOneip_specialities_members();
    t.crud.deleteOneip_specialities_members();

    t.crud.updateManyip_specialities_members();
    t.crud.deleteManyip_specialities_members();
  },
});
