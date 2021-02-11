import { objectType, extendType } from 'nexus';

export const staff_profiles = objectType({
  name: 'staff_profiles',
  definition(t) {
    t.model.sellerid();
    t.model.start();
    t.model.name();
    t.model.surname();
    t.model.number();
    t.model.photo();
    t.model.email();
    t.model.occupier();
    t.model.visible();
    t.model.job_title();
    t.model.birthdate();
    t.model.city();
    t.model.postcode();
    t.model.country();
    t.model.homephone();
    t.model.workphone();
    t.model.manager();
  },
});

export const staff_profilesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.staff_profiles();
    t.crud.staff_profiles({ filtering: true, ordering: true });
  },
});

export const staff_profilesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestaff_profiles();
    t.crud.updateOnestaff_profiles();
    t.crud.upsertOnestaff_profiles();
    t.crud.deleteOnestaff_profiles();

    t.crud.updateManystaff_profiles();
    t.crud.deleteManystaff_profiles();
  },
});
